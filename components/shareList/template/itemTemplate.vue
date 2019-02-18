<!-- 列表项模板 -->
<template>
    <div class="list-item-template">
        <span class="date-round-bar">
            <span class="month" v-html="showInitDate(create_time,'month')+'月'"></span>
            <span class="day" v-html="showInitDate(create_time,'date')"></span>
        </span>
        <header>
            <h1>
                <a :href="'#/DetailShare?aid='+id" target="_blank">
                    {{title}}
                </a>
            </h1>
            <h2>
                <i class="fa fa-fw fa-user"></i>发表于
                <i class="fa fa-fw fa-clock-o"></i><span> {{showInitDate(create_time,'all')}}</span> •
                <i class="fa fa-fw fa-eye"></i>{{browse_count}}次围观 •
                <i class="fa fa-fw fa-comments"></i>活捉 {{comment_count}}条 •
                <span class="rareBox">
                    <i class="fa fa-fw fa-heart"></i>{{link_count?link_count:0}}点赞 •
                    <i class="fa fa-fw fa-star"></i>{{collect_count?collect_count:0}}点赞 •
                </span>
            </h2>
            <div class="label-bar">
                <a :href="'#Share?classId='+class_id">{{cate_name}}</a>
            </div>
        </header>
        <slot></slot>
    </div>
</template>

<script>
import {initDate} from '@/utils/date'
export default {
    name:'ShareListItem',
    data(){
        return {
        }
    },
    mounted(){
        console.log(this.create_time)

    },
    methods:{
        showInitDate(date,type){
            return initDate(date,type)
        }
    },
    props:{
        create_time:{
            type:String,
            defalut:''
        },
        id:{
            type:Number,
            defalut:0
        },
        class_id:{
            type:Number,
            defalut:0
        },
        title:{
            type:String,
            defalut:''
        },
        cate_name:{
            type:String,
            defalut:''
        },
        //围观数
        browse_count:{
            type:Number,
            defalut:0
        },  
        //评论数
        comment_count:{
            type:Number,
            defalut:0
        }, 
        //点赞数
        link_count:{
            type:Number,
            defalut:0
        },   
        //收藏数 
        collect_count:{
            type:Number,
            defalut:0
        }, 
    }
    
}
</script>

<style lang="scss">
@import '@/assets/css/theme.scss';

//相同的标题副标题
.list-item-template{
    max-width: 100%;
    margin:0 auto;

    white-space:normal;
    word-wrap:break-word;
    word-break:break-all;
    position:relative;
    background:#fff;   //设置标签背景色
    padding:15px;
    border-radius:5px;
    margin-bottom:40px;
    font-size:15px;

    //时间和标题
    .date-round-bar{
        position:absolute;
        top:-20px;
        left:-35px;
        height:60px;
        width:70px;
        padding-top:10px;
        border-radius:100px;
        color:#fff;
        background:$tcolors;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);

        span{
            text-align:center;
            display:block;
        }
        .day{
            font-size:30px;
            font-weight:700;
        }
    }


    header{
        white-space:normal;
        word-wrap:break-word;
        word-break:break-all;
        h1{
            margin:10px 0;
            font-size:25px;
            font-weight:700;
            text-align:center;
            line-height:30px;
        }
        h2{
            margin:10px 0;
            line-height:24px;
            text-align:center;
            color:#555;
            font-size:14px;
        }

        //公共标签
        .label-bar{
            border-color:$tcolors;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
            background-color:#97dffd;
            margin:5px 0 15px 2px;
            font-size:14px;
            position:relative;
            left:-32px;
            border-radius:0 4px 4px 0;
            padding:7px 11.2px 7px 32px;
            display:inline-block;
            color:#fff;

            &:after{
                position:absolute;
                content:'';
                top:100%;
                left:0;
                border-top:0 solid transparent;
                border-right-width:1em;
                border-right-color:$tcolord;
                border-right-style:solid;
                border-bottom:1em solid transparent;
                border-left:0 solid transparent;
                width:0;
                height:0;
                
            }
            a{
                color:#fff;
                line-height:100%;
            }
        }
    }    
}
</style>


