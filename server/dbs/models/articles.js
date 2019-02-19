import mongoose from 'mongoose'
import {formatDate} from '../../../utils/date.js'

const Schema=mongoose.Schema

const articleSchema = new Schema({
    //主键id
    aid:{
        type:String,
        unique:true,
        require:true
    },
    //支付宝收款码
    alipay_image:{
        type:String,
        require:false,
    },
    //围观数
    browse_count:{
        type:Number,
        required:false
    },
    //分类名称
    cate_name:{
        type:String,
        require:false
    },
    class_id:{
        type:Number,
        require:false
    },
    //收藏数
    collect_count:{
        type:Number,
        default:0
    },
    //评论数
    comment_count:{
        type:Number,
        default:0
    },
    //文章内容
    content:{
        type:String
    },
    //创建时间
    create_time:{
        type:String,
        default(){
            return formatDate(new Date(),'yyyy-MM-dd HH:mm:ss')
        }
    },
    //描述
    description:{
        type:String
    },
    //图像
    image:{
        type:String
    },
    //是否是热点文章
    is_hot:{
        type:Number,
        default:0
    },
    is_recommend:{
        type:Number,
        default:0
    },
    like_count:{
        type:Number,
        default:0
    },
    title:{
        type:String
    },
    user_collect_start:{
        type:Number,
        default:0
    },
    user_lick_start:{
        type:Number,
        default:0
    },
    //微信收款码
    wechat_image:{
        type:String,
    }



})

export default mongoose.model('Article',articleSchema)