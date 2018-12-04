<template>
    <div id="app-home">
        <app-conmon class = "app-con"></app-conmon>
        <app-home-banner style = "margin-top:45px;"></app-home-banner>
        <div class="app-p">
            <p><i class="fa fa-check-circle-o"></i><span>骆驼自营爆品</span></p>
            <p><i class="fa fa-check-circle-o"></i><span>7天无忧退换货</span></p>
            <p><i class="fa fa-check-circle-o"></i><span>满59元包邮</span></p>
        </div>
        <app-home-nav></app-home-nav>
        <app-home-special></app-home-special>
        <app-bottom></app-bottom>
    </div>
</template>

<script>
import AppHomeBanner from './HomeBanner'
import AppHomeNav from './HomeNav'
import AppHomeSpecial from './HomeSpecial'
export default {
    name: 'AppHome',
    components: {
        AppHomeBanner,
        AppHomeNav,
        AppHomeSpecial
    },

}
</script>

<style scoped lang = "scss">
    #app-home{
        .app-con{
            position:fixed;
            top:0;
            z-index:100;
        }
        .app-p{
            width: 100%;
            height: 0.45rem;
            font-size: 0.138rem;
            color: #7f2400;
            display:flex;
            background: #fff;
            margin-bottom:0.15rem;
            p{
                flex: 1;
                line-height: 0.45rem;
                text-align:center;
            }
        }
    }
</style>
