<template>
<div class="page-login">
    <!-- 登录框 -->
    <div class="loginFrame">
        <!-- :rules="rules" 是动态绑定的rules，表单验证规则 -->
        <el-form ref="accountForm" :model="accountForm" :rules="rules" class="demo-ruleForm login-container">
            <div class="formInput">
                <el-form-item label="账号" key="username" prop="username">
                    <el-input type="text" v-model="accountForm.username" auto-complete="new-password" placeholder="请输入您的账号" class="form-control"></el-input>
                </el-form-item>
                <el-form-item label="密码" key="password" prop="password" class="form-inline">
                    <el-input type="password" v-model="accountForm.password" auto-complete="new-password" placeholder="请输入密码" class="form-control" @keyup.enter.native="submitForm('accountForm')"></el-input>
                </el-form-item>
            </div>
            <div class="formSelect">
                <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
                <a href="#" class="forget">忘记密码</a> | 
                <nuxt-link
                    class="forget"
                    to="/register">注册</nuxt-link>
            </div>
            <div class="formButton">
                <el-form-item style="width:100%">
                    <el-button type="primary" style="width:100%" @click="submitForm('accountForm')">登录</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
</div>
</template>

<script>
import {
    setCookie,
    getCookie,
    clearCookie
} from "@/utils/cookie.js"

import CryptoJS from 'crypto-js'
export default {
    data() {
        return {
            checked: true, //是否记住密码
            isRemember: true, //localstorage中记录的是否记住密码选项，用于后续的比较
            accountForm: {
                username: '',
                password: '',
            },
            error:'',
            rules: {
                username: [{
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur'
                }],
                password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    },
                    // {
                    //     pattern: /^(\w){6,20}$/,
                    //     message: '只能输入6-20个字母、数字、下划线',
                    //     trigger: 'blur'
                    // }
                ]

            },
        }
    },
    layout: 'blank',
    beforeMount() {
        //获取cookie中保存的账号密码，如果有则进行赋值
        let username = getCookie("username")
        console.log(username)

        if (username) {
            let password = getCookie("password")
            if (password) {
                this.accountForm.username = username
                this.accountForm.password = password
            }
        }
        //读取是否记住密码的设置
        let isRemember = localStorage.getItem("isRemember")
        //由于默认值为勾选复选框，因此只需要判断不记住密码的情况
        if (isRemember === "false") {
            this.checked = false
            this.isRemember = false
        }

    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //验证通过

                    //判断复选框是否被勾选，勾选了则将账户信息保存到cookie中
                    if (this.checked == true) {
                        //账号密码保存时间为7天
                        setCookie("username", this.accountForm.username, 7 * 24)
                        setCookie("password", this.accountForm.password, 7 * 24)
                        //只有当复选框变化的时候才更改cookie里的值
                        if (this.isRemember === false) {
                            localStorage.setItem("isRemember", "true")
                        }
                    } else {
                        //不记住密码，清除cookie
                        clearCookie("username")
                        clearCookie("password")
                        if (this.isRemember === true) {
                            localStorage.setItem("isRemember", "false")
                        }
                    }

                    //向后端发送请求
                    this.$axios.post('/users/signin', {
                        username: window.encodeURIComponent(this.accountForm.username),
                        password: CryptoJS.MD5(this.accountForm.password).toString()
                    }).then(({
                        status,
                        data
                    }) => {
                        if (status == 200) {
                            if (data && data.code === 0) {
                                location.href = '/'
                            } else {
                                this.error = data.msg
                            }
                        } else {
                            this.error = "服务器出错"
                        }

                        setTimeout(()=>{
                            this.error=''
                        },1500)
                    })
                } else {
                    console.log("登录失败")
                    return false
                }
            })
        },
    }
}
</script>

<style lang="scss">
.page-login {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-image: url('../static/img/bg_login.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;

}

.login-container {
    border-radius: 15px;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    background-clip: padding-box;
    margin: 100px auto;
    width: 350px;
    padding: 40px 40px 0px 40px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid #f7f3f3;
    box-shadow: 0 0 25px #cec8c8;
}

label {
    width: 70px;
    text-align: left;
}

.form-control {
    width: 270px;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
}

.remember {
    width: 200px;
    text-align: left;
}

.forget {
    text-align: right;
    font-size: 14px;
}

.formSelect {
    margin-bottom: 10px;
    padding-bottom: 10px;
}

</style>
