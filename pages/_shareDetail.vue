<template>
    <div class="page-share-detail">
        <el-row :gutter="30">
            <el-col :sm="24" :md="16" style="transition:all .5s ease-out; margin-bottom:30px;">
                <share-detail/>
            </el-col>
            <el-col :sm="24" :md="8">
                <right-list/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ShareDetail from '@/components/shareDetail'
import RightList from '@/components/rightList/index'
export default {
    mounted(){
        console.log(this.$route.query.aid)
    },
    components:{
        ShareDetail,
        RightList
    },
    
}
</script>

<style lang="scss">

</style>


