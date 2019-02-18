<template>
    <div class="pc-searchbar">
        <el-input placeholder="搜索"
                  v-model="searchValue"
                  class="input-with-select">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>

    </div>
</template>

<script>
export default {
    data(){
        return{
            searchValue:''

        }
    }
};
</script>

<style lang="scss">
.pc-searchbar{
    .input-with-select{
        .el-input__inner{
            height: 30px;
            border: none;
            background: #fff;
            /*border: 1px solid #333;*/
            border-radius: 2px;
            padding-right: 10px;
        }
        .el-input-group__append{
            background:white;
            width:auto
        }
        
    }
}
</style>


