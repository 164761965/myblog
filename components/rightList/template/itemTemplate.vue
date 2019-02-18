<template>
    <section class="right-item-template" >
            <h2 class="label-bar" v-if="title">
                {{title}}
            </h2>
            <slot></slot>
    </section>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default(){
                return ''
            }
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/css/theme.scss';

.right-item-template{
    transition:all 0.2s linear;
    position:relative;
    background:#fff;
    padding:15px;
    margin-bottom:20px;
    border-radius:5px;

    &:hover{
        transform:translate(0,-2px);
        box-shadow:0 15px 30px rgba(0,0,0,.1);
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

</style>


