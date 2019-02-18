<!-- pc端的头部 -->
<template>
    <div class="pc-header">
        <el-row>
            <el-col :span="24">
                <el-menu :default-active="activeIndex"
                         :router='true'
                         class="el-menu-demo"
                         mode="horizontal"
                         @select="handleSelect"
                         background-color="#545c64"
                         text-color="#fff"
                         active-text-color="#ffd04b">
                    <el-menu-item index="/">
                        <i class="fa fa-wa fa-home"></i>首页</el-menu-item>
                    <el-submenu index="category">
                        <template slot="title">
                            <i class="fa fa-wa fa-archive"></i>分类</template>
                        <el-menu-item v-for="(item,index) in categoryList"
                                      :key="index"
                                      index="2-1">{{item}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="message">
                        <i class="fa fa-wa fa-pencil"></i>留言板</el-menu-item>
                    <el-menu-item index="about">
                        <i class="fa fa-wa fa-vcard"></i>关于</a>
                    </el-menu-item>
                    <!-- <div index=""
                         class="pc-search-bar">
                        <i class="el-icon-search pc-search-icon"></i>
                        <div class="pc-search-input"
                             :class="searchInput?'hasSearched':''">
                            <el-input placeholder="搜索"
                                      suffix-icon="search"
                                      v-model="searchInput"
                                      @keyup.enter.native="handleSearchEnter"
                                      @change="handleSearchChange" />
                        </div>
                    </div> -->

                    <div class="pc-header-searchbar">
                        <pc-search-bar/>
                    </div>

                    <div class="pc-header-user">
                        <pc-user/>
                    </div>


                </el-menu>
            </el-col>

        </el-row>
    </div>
</template>

<script>
import PcUser from './user.vue'
import PcSearchBar from './searchBar.vue'
export default {
  data() {
    return {
      activeIndex: "/",
      categoryList: ["html", "js", "css"],
      searchInput: ""
    };
  },
  methods: {
    handleSelect() {},
    handleSearchEnter(e) {
      //点击搜索或回车后调用
    },
    handleSearchChange() {}
  },
  components:{
      PcUser,
      PcSearchBar,
  }
};
</script>

<style lang="scss">
.pc-header {
    position:fixed;
    top:0px;
    width:100%;
    z-index:100;

    .el-menu.el-menu--horizontal{
        border:none;
    }

    .el-menu-demo{
        box-sizing: border-box;
        padding:0 50px;
        .el-menu-item ,.el-submenu .el-submenu__title {
            height: 38px;
            line-height: 38px;
        }
    }

    //搜索框
    .pc-header-searchbar{
        padding:0 10px;
        max-width:250px;
        line-height:38px;
        position: absolute;;
        top:0px;
        right:300px;

    }

    //用户   或  注册登录
    .pc-header-user{
        padding:0 10px;
        max-width:150px;
        height: 100%;
        line-height: 38px;
        position:absolute;
        top:0px;
        right:100px;

        a{
            color:white;
        }
    }
    


}

/* pc搜索框 */
</style>
