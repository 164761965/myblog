<template>
    <item-template
        class="recommend-list"
        title="推荐">
        <ul class="ul-list">
            <li v-for="(item,index) in browseList" :key="'browseList'+index">
                <a :href="'#/DetailShare?aid='+item.id" target="_blank">{{item.title}}</a> —— {{item.browse_count}} 次围观
            </li>
        </ul>
    </item-template>
</template>

<script>
import ItemTemplate from './template/itemTemplate'
export default {
    data(){
        return {
            browseList:[{
                id:1,
                title:'如何成长',
                browse_count:300
            },{
                id:1,
                title:'如何成长',
                browse_count:300
            },{
                id:1,
                title:'如何成长',
                browse_count:300
            },{
                id:1,
                title:'如何成长',
                browse_count:300
            }]
        }
    },
    components:{
        ItemTemplate
    }
    
}
</script>

<style lang="scss">
.recommend-list{
    .ul-list{
        li{
            padding:8px 0;
            text-align:justify;
            list-style-type :none;
            a{
                color:black;
                font-weight:600;
                &:hover{
                    color:#64609E;
                }
            }
        }
    }
}

</style>


