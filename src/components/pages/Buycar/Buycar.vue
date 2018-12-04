<template>
    <div class="app-buy-car">
        <app-conmon></app-conmon>
        <div class="buy-p">
            <p>· 骆驼自营爆品</p>
            <p>· 7天无忧退换货</p>
            <p>· 免快递费</p>
        </div>
        <div class="buy-goods">
            <img :src="$route.params.img" alt="">
            <div class="buy-params">
                <p class="buy-name">{{$route.params.name}}</p>
                <p>{{$route.params.color}}</p>
                <div class="buy-button">
                    <button @click="num -= (num === 1 ? 0 : 1)">-</button>
                    <b>{{num}}</b>
                    <button @click="num++">+</button>
                </div>
                <span>￥ {{$route.params.price}}.00</span>
            </div>
        </div>
        <div class="buy-total">
            <a href="javascript:;">清空购物车</a>
            <div class="total">合计： ￥{{num * $route.params.price}}</div>
            <a href="javascript:;">去结算</a>
        </div>
        <app-bottom></app-bottom>
    </div>
</template>


<script>
    export default {
        name: 'AppBuyCar',
        data () {
            return {
                num: 1
            }
        }
    }
</script>


<style lang="scss" scoped>
    .app-buy-car{
        .buy-p{
            width: 100%;
            height: 0.45rem;
            p{
                display: inline-block;
                width: 32.5%;
                line-height: 0.45rem;
                text-align: center;
            }
        }
        .buy-goods{
            width: 100%;
            background: #fff;
            padding: 0.1rem;
            img{
                display: inline-block;
                width: 0.72rem;
                height: 0.72rem;
                margin-right: 0.2rem;
            }
            .buy-params{
                display: inline-block;                
                width: 2.48rem;
                p{
                    margin-bottom: 0.05rem;
                }
                .buy-name{
                    width: 2.35rem;
                }
                .buy-button{
                    display: inline-block;                
                    margin-right: 0.1rem;
                    b{
                        width: 0.3rem;
                        height: 0.25rem;
                        display: inline-block;
                        text-align: center;
                    }
                }
                span{
                    color: orangered;
                    font-size: 18px;
                }
            }
        }
        .buy-total{
            width: 100%;
            height: 0.5rem;
            background: #fff;
            padding-left: 0.1rem;
            .total{
                display: inline-block;
                color: orangered;
                font-size: 14px;
                width: 1.7rem;
                padding-left: 0.1rem;
            }
            a{
                width: 0.92rem;
                color: #fff;
                background: #D2AB44;
                display: inline-block;
                border-radius: 3px;
                font-size: 16px;
                text-align: center;
                line-height: 0.44rem;
                margin-top: 0.025rem;
            }
        }
    }
</style>
