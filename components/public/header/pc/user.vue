<template>
    <div class="pc-user">
        <div class="user" v-if="user">
            <span>欢迎您，{{user}}</span>
            [<nuxt-link to="/exit"><span class="exit">退出</span></nuxt-link>]
        </div>
        <template v-else>
            <nuxt-link
                to="/login"
                class="login">立即登录</nuxt-link>
            <span class="interval"> | </span>
            <nuxt-link
                class="register"
                to="/register">注册</nuxt-link>
        </template>


    </div>
</template>

<script>
export default {
    data(){
        return {
            user:''
        }
    },
    async mounted(){
        const {status,data:{user}}=await this.$axios.get('/users/getUser')
        if(status===200){
            this.user=user
        }
    },
    
}
</script>

<style lang="scss">
.pc-user{
    .user{
        color:white;
    }
    .exit:hover{
        color:gray;
    }
    .interval{
        color:white;
    }
}

</style>