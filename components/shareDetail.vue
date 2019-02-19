<template>
<item-template class="com-share-detail"
            :create_time="detailObj.create_time"
            :aid="detailObj.aid"
            :title="detailObj.title"
            :cate_name="detailObj.cate_name"
            :browse_count="detailObj.browse_count"
            :comment_count="detailObj.comment_count"
            :link_count="detailObj.link_count"
            :collect_count="detailObj.collect_count">

    <template>
        <div class="article-content" v-html="detailObj.content"></div>
    </template>

    


</item-template>
</template>

<script>
import ItemTemplate from './shareList/template/itemTemplate'
export default {
    data(){
        return {
            detailObj:{
            }
        }
    },
    async created(){
        console.log(this.$route.query.aid)
        let {status,data} = await this.$axios.get('/article/getArticleInfo',{
            params:{
                aid:this.$route.query.aid
            }
        })
        if(status===200){
            this.detailObj=data.data
        }else{
            alert('服务器出错')
        }
    },
    components:{
        ItemTemplate
    }
    
}
</script>

<style lang="scss">
.com-share-detail{

}

</style>


