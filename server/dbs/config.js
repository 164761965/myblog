/**
 * 配置文件
 */
export default{
    dbs:'mongodb://127.0.0.1:27017/myblog',
    redis:{
        get host(){
            return '127.0.0.1'
        },
        get port(){
            return 6379
        }
    },
    smtp:{
        get host(){
            return 'smtp.qq.com'
        },
        get user(){
            return '164761965@qq.com'
        },
        get pass(){
            return 'nxizxucmvzdrbice'
        },
        get code(){
            return ()=>{
                return Math.random().toString(16).slice(2,6).toUpperCase()
            }
        },
        /**
         * 获取过期时间
         */
        get expire(){
            return()=>{
                return new Date().getTime()+15*60*1000
            }
        }
    }
}