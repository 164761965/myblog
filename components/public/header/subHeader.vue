<template>
    <div class="subHeader" :style="{backgroundImage:'url('+(this.$store.state.themeObj.top_image?this.$store.state.themeObj.top_image:require('static/img/header-bg.jpg'))+')'}">
        <div class="scene">
            <div><span id="title">Hi,BOSS</span></div>
        </div>  
        <div class="h-information1">
            <a href="#/Aboutme">
                <img :src="this.$store.state.themeObj.head_portait?this.$store.state.themeObj.head_portait:require('static/img/touxiang.jpg')" alt="">
            </a>
            <h2 class="h-description">
                <a href="#/Aboutme">
                    {{this.$store.state.themeObj.autograph?this.$store.state.themeObj.autograph:"一花一世界，一叶一菩提"}}
                </a>
            </h2>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    }
    
}
</script>

<style lang="scss">
.subHeader{
    height:350px;
    position:relative;
    width:100%;
    background-size:cover;
    background-position:center 50%;
    background-repeat:no-repeat;
    margin-bottom:90px;
    
    .scene{
        width:100%;
        text-align:center;
        font-size:80px;
        font-weight:200;
        color:#fff;
        position:absolute;
        left:0;
        top:80px;
        font-family:'Sigmar One',Arial;
        text-shadow:0 2px 2px #47456d;
        span{
            transform:matrix(1,0,0,1,0,0);
            -webkit-transform:matrix(1,0,0,1,0,0);
            text-shadow: 1px 1px 0 grey,-1px -1px 0 black;
        }
    }

    .h-information1 {
        text-align:center;
        width:70%;
        margin:auto;
        position: relative;
        top:200px;
        padding:40px 0;
        font-size:16px;
        opacity:0.9;
        background:rgba(230, 244, 249, 0.8);
        border-radius:5px;
        z-index:1;
        animation: b 1s ease-out;
        -webkit-animation:b 1s ease-out;


        img{
            width:100px;
            height:100px;
            border-radius:100%;
            transition: all .4s ease-in-out;
            -webkit-transform: all .4s ease-in-out;
            object-fit:cover;

        }

        img:hover{
            transform:rotate(360deg);
            -webkit-transform:rotate(360deg);
        }

        h2{
            margin-top:20px;
            font-size:18px;
            font-weight:700;

            a{
                background: linear-gradient(to right,gray,black);
                -webkit-background-clip:text;
                color:transparent;
            }
        }
    }
}

@-webkit-keyframes b{
    0%{
        -webkit-transform:translateY(90px);
        transform:translateY(90px);
    }
    80%{
        -webkit-transform:translateY(5px);
        transform:translateY(5px);
    }
    90%{
        -webkit-transform:translateY(-5px);
        transform:translateY(-5px);
    }
    to{
        -webkit-transform:translateY(0);
        transform:translateY(0);
    }
}
@keyframes b{
    0%{
        -webkit-transform:translateY(90px);
        transform:translateY(90px);
    }
    80%{
        -webkit-transform:translateY(5px);
        transform:translateY(5px);
    }
    90%{
        -webkit-transform:translateY(-5px);
        transform:translateY(-5px);
    }
    to{
        -webkit-transform:translateY(0);
        transform:translateY(0);
    }
}

</style>


