<template>
    <div class="share-list-item">
        <item-template
            :create_time="item.create_time"
            :id="item.id"
            :title="item.title"
            :cate_name="item.cate_name"
            :browse_count="item.browse_count"
            :comment_count="item.comment_count"
            :link_count="item.link_count"
            :collect_count="item.collect_count">
            <template>
                <div class="article-content">
                    <p class="description">
                        {{item.description}}
                    </p>
                    <p class="img-container">
                        <img :src="item.image" alt="" class="maxW">
                    </p>
                </div>
                <div class="viewdetail">
                    <a class="tcolors-bg" :href="'#/DetailShare?aid='+item.id" target="_blank">
                        阅读全文>>
                    </a>
                </div>
            </template>
        </item-template>

    </div>
</template>

<script>
import ItemTemplate from './template/itemTemplate';
export default {
    data(){
        return {
        }
    },
    props:{
        item:{
            type:Object,
            defalut(){
                return {
                    create_time:'',
                    id:0,
                    class_id:0,
                    title:'',
                    cate_name:'',
                    browse_count:0,  //围观数
                    comment_count:0,  //评论数
                    link_count:0,     //点赞数
                    collect_count:0,  //收藏数
                    description:'',
                    image:''
                }
            }
        }

    },
    components:{
        ItemTemplate,

    }
    
}
</script>

<style lang="scss">
.share-list-item{
    .article-content{
        font-size:15px;
        white-space:normal;
        word-wrap:break-word;
        word-break:break-all;
        p{
            margin:10px 0;
            line-height:24px;
        }

        .description{
            text-indent:2em;
        }
        .img-container{
            max-height:300px;
            overflow:hidden;
            text-align:center;
        }
    }

    .viewdetail{
        margin:10px 0;
        line-height:24px;
        text-align:center;
        a{
            color:#fff;
            font-size:12px;
            padding:5px 10px;
            border-radius:5px;
        }
    }
}

</style>


