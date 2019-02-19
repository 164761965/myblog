import Router from 'koa-router'
import Article from '../dbs/models/articles'
import axios from './utils/axios'

let router = new Router({prefix:'/article'})

router.get('/getArticleInfo',async (ctx)=>{
    let aid=ctx.query.aid
    let articleInfo= await Article.find({aid})
    if(articleInfo.length){
        ctx.body = {
            code:1001,
            data:articleInfo[0],
            msg:'查询成功'
        }
        return
    }else{
        ctx.body = {
            code:2001,
            data:{},
            msg:'没有相关文章'
        }
        return
    }

})

router.post('/add',async (ctx)=>{
    let alipay_image=ctx.request.body.alipay_image
    let cate_name = ctx.request.body.cate_name
    let class_id = ctx.request.body.class_id
    let content = ctx.request.body.content
    let create_time = ctx.request.body.create_time
    let description = ctx.request.body.description
    let aid = ctx.request.body.aid
    let image = ctx.request.body.image
    let title = ctx.request.body.title
    let wechat_image = ctx.request.body.wechat_image

    //插入数据
    let result= await Article.create({alipay_image,cate_name,class_id,content,create_time,description,aid,image,title,wechat_image})
    if(result){
        ctx.body={
            code:1001,
            data:{},
            msg:'插入成功'
        }
    }else{
        ctx.body={
            code:2001,
            data:{},
            msg:'插入失败'
        }
        
    }

})


export default router


