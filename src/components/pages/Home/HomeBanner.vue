<template>
    <div ref = "el" class="app-home-banner swiper-container" >
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src='https://topic.camel.com.cn/module/wap_home_banner_main/d05e405f-2a89-49dc-bf77-c84a25125019.jpg!/fw/540' alt="">
            </div>
            <div class="swiper-slide">
                <img src='https://topic.camel.com.cn/module/wap_home_banner_main/fb811dbb-d958-4e71-932d-5dcca2c469a0.jpg!/fw/540' alt="">
            </div>
            <div class="swiper-slide">
                <img src='https://topic.camel.com.cn/module/wap_home_banner_main/ea9da341-88ee-4b0f-acc8-84789a678780.jpg!/fw/540' alt="">
            </div>
            <div class="swiper-slide">
                <img src='https://topic.camel.com.cn/module/wap_home_banner_main/5bbcbebe-e021-44be-80ad-cd727ef9aa12.jpg!/fw/540' alt="">
            </div>
            <div class="swiper-slide">
                <img src='https://topic.camel.com.cn/module/wap_home_banner_main/22921f9b-c091-4024-827a-3e0878494489.jpg!/fw/540' alt="">
            </div>
            <div class="swiper-slide">
                <img src='https://topic.camel.com.cn/module/wap_home_banner_main/dd394471-72b3-4d83-87a5-815fcb79826d.jpg!/fw/540' alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Swiper from 'swiper' 
    export default {
        name: 'AppHomeBanner',
        methods: {
           getBanners () {
               Vue.nextTick (() => {
                   //this.refs.el指的是标记ref=el的元素，这里是放轮播图的大容器'.swiper-container'
                   new Swiper(this.$refs.el, {
                       //下面这段代码是swiper提供的,指轮播图下面的小点
                       pagination: {
                           el: '.swiper-pagination'
                       }
                   })
               })
           }
            
        },
        created () {
            this.getBanners()
        }
        
    }
</script>

<style lang="scss">
    .app-home-banner {
        .swiper-wrapper {
            width: 100%;
            height: 1.875rem;
        }
        .swiper-slide {
            img {width: 100%; 
            }
        }
        .swiper-pagination  {
            .swiper-pagination-bullet {
                width: 5px; height: 5px;
            }
            .swiper-pagination-bullet-active {
                background: #fff;
            }
        }
    }
</style>
