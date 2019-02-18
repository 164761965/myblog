<template>
    <div class="my-header">
        <div class="pc">
            <pc-header></pc-header>
        </div>
        <!-- <div class="mobile" style="margin-top:60px;">
            <home-mobile></home-mobile>
        </div> -->
        <sub-header/>
    </div>
</template>

<script>
import PcHeader from './pc/index.vue'
import HomeMobile from './header-mobile.vue'
import SubHeader from './subHeader.vue'
export default {
    mounted(){
    
    },
    components:{
        PcHeader,
        HomeMobile,
        SubHeader,
    }
}
</script>

<style lang="scss">

</style>