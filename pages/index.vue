<template>
    <div class="page-home">
        <el-row :gutter="30">
            <el-col :sm="24" :md="16" style="transition:all .5s ease-out; margin-bottom:30px;">
                <share-list/>
            </el-col>
            <el-col :sm="24" :md="8">
                <right-list/>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import ShareList from '@/components/shareList/index'
import RightList from '@/components/rightList/index'
export default{
    data(){
        return {

        }

    },
    components:{
        ShareList,
        RightList
    }
}


</script>

<style lang="scss">

</style>
