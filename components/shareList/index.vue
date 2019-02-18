<template>
    <el-row class="com-share-list">
        <el-col :span="24" v-for="(item,index) in articleList" :key="'article'+index">
            <share-list-item
                :item="item"
                />            
        </el-col>

        <el-col class="viewmore">
            <a v-show="hasMore" class="tcolors-bg" href="javascript:void(0);" @click="addMoreFun">点击加载更多</a>
            <a v-show="!hasMore" class="tcolors-bg" href="javascript:void(0);">暂无更多数据</a>
        </el-col>

    </el-row>
</template>

<script>
import ShareListItem from './shareListItem'
export default {
    data(){
        return {
            articleList:[{
                create_time:'2018-01-01',
                id:1,
                class_id:2,
                title:'如何创建nuxt项目',
                cate_name:'小程序',
                browse_count:100,  //围观数
                comment_count:10,  //评论数
                link_count:20,     //点赞数
                collect_count:15,  //收藏数
                description:'自行去百度',
                image:require('@/static/img/touxiang.jpg')
            }],
            hasMore:true,
        }
    },
    methods:{
        addMoreFun(){

        }
    },

    components:{
        ShareListItem,
    }
    
    
}
</script>

<style lang="scss">
//相同的标题副标题
 .viewmore{
    text-align: center;
    width:100%;
}
 .viewmore a{
    /*background:  #97dffd;*/
    /*padding:6px 0;*/
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    color:#fff;
    height:30px;
    line-height: 30px;
    display: block;
}

</style>


