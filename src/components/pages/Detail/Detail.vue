<template>
    <div class="detail">
        <div class="detail-top">
            <a @click="back" class="fa fa-angle-left"></a>
            <router-link to="/" class="fa fa-home"></router-link>
            <h2>商品详情</h2>
            <router-link to="/buycar/:id/:name/:img/:price/:color" class="fa fa-shopping-bag"></router-link>
            <a href="javascript:;" class="fa fa-code-fork"></a>
        </div>
        <div class="detail-content">
            <img :src="$route.params.img" alt="">
            <div class="detail-title">
                <h3>{{$route.params.name}}</h3>
                <span>￥ {{$route.params.price}}</span>
            </div>
            <div class="detail-icon">
                <a href="javascript:;" class="fa fa-heart-o"></a>
                <span>收藏</span>
            </div>
        </div>
        <div class="detail-p">
            <p>· 骆驼自营爆品</p>
            <p>· 7天无忧退换货</p>
            <p>· 免快递费</p>
        </div>
        <div class="detail-select">
            <p>请选择款式、数量</p>
            <i class="fa fa-angle-right"></i>
        </div>
        <div class="detail-nav">
            ...
        </div>
        <div class="detail-buycar" v-if="show">
            <div class="datail-cartop">
                <a class="fa fa-close" @click="show = !show"></a>
                <img :src="$route.params.img" alt="">
                <span>￥ {{$route.params.price}}</span>
            </div>
            <p>颜色 <span>{{$route.params.color}}</span></p>
            <p>尺码</p>
            <button v-for="(item, i) in items" :key="i">{{item.size}}</button>
            <p>数量</p>
            <div class="detail-button">
                <button @click="num -= (num === 1 ? 0 : 1)">-</button>
                <span>{{num}}</span>
                <button @click="num++">+</button>
            </div>
        </div>
        <div class="datail-bottom">
            <a class="fa fa-commenting-o detail-btn" href="javascript:;"></a>
            <router-link :to="{name: 'buycar', params: {id: $route.params.id, name: $route.params.name, img: $route.params.img, price: $route.params.price, color: $route.params.color}}" class="detail-buy"><span>立即购买</span></router-link>
            <a class="detail-collect" @click="show = !show"><span>加入购物袋</span></a>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Detail',
        data () {
            return {
                num: 1,
                show: false,
                items: [
                    {size: 'XXL'}, {size: 'XL'}, {size: 'L'}, {size: 'M'}
                ]
            }
        },
        methods: {
            back () {
                this.$router.go(-1)
            }
        }
    }
</script>


<style lang="scss" scoped>
    .active{
        background: rgb(223, 136, 22);
    }
    .detail{
        .detail-top{
            width: 100%;
            height: 0.45rem;
            background: #fff;
            border-bottom: 1px solid #ddd;
            padding: 0 0.15rem;
            position: fixed;
            top: 0;
            h2{
                display: inline-block;
                width: 2rem;
                line-height: 0.45rem;
                font-size: 18px;
                text-align: center;
                margin-left: 0.06rem;
            }
            a{
                font-size: 26px;
                margin: 0 0.06rem;
            }
        }
        .detail-content{
            margin-top: 0.45rem;
            border-bottom: 1px solid #ddd;
            overflow: hidden;
            background: #fff;
            img{
                width: 100%;
                height: 3.75rem;
            }
            .detail-title{
                border-top: 1px solid #ddd;                
                padding: 0 0.15rem;
                width: 2.7rem;
                height: 1.4rem;
                display: inline-block;
                border-right: 1px solid #ddd;
                h3{
                    font-size: 18px;
                    margin-top: 0.3rem;
                }
                span{
                color: rgb(231, 153, 26);
                font-size: 18px;
                }
            }
            .detail-icon{
                border-top: 1px solid #ddd;                                
                float: right;
                width: 1.05rem;
                height: 1.4rem;
                text-align: center;
                padding-top: 0.32rem;
                a{
                    display: block;
                    font-size: 24px;
                }
                span{
                    color: #ddd;
                }
            }
        }
        .detail-p{
            width: 100%;
            height: 0.45rem;
            p{
                display: inline-block;
                width: 32.5%;
                line-height: 0.45rem;
                text-align: center;
            }
        }
        .detail-select{
            width: 100%;
            height: 0.45rem;
            background: #fff;
            padding: 0 0.15rem;
            overflow: hidden;
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            p{
                display: inline-block;
                font-size: 14px;
                line-height: 0.45rem;
            }
            i{
                display: inline-block;                
                font-size: 24px;
                float: right;
                line-height: 0.45rem;                
            }
        }
        .detail-nav{
            height: 15rem;
            width: 100%;
            font-size: 0.3rem;

            
        }
        .detail-buycar{
            height: 4rem;
            width: 100%;
            background: #fff;
            padding: 0.15rem;
            position: fixed;
            bottom: 0px;
            .datail-cartop{
                a{
                    font-size: 0.26rem;
                    margin-right: 0.3rem;
                }
                img{
                    height: 0.975rem;
                    width: 0.975rem;
                    display: inline-block;
                    margin-right: 0.3rem;                    
                }
                span{                    
                    font-size: 0.2rem;
                    color: orangered;
                }
            }
            p{
                margin: 0.1rem 0;
            }
            button{
                margin: 0 0.1rem;
            }
            .detail-button{
                span{
                    width: 0.3rem;
                    height: 0.25rem;
                    text-align: center;
                    display: inline-block;                    
                }
            }
        }
        .datail-bottom{
            width: 100%;
            height: 0.5rem;
            background: #fff;
            position: fixed;
            bottom: 0;
            .detail-btn{
                display: inline-block;
                width: 0.5rem;
                line-height: 0.5rem;
                text-align: center;
                font-size: 26px;                
            }
            .detail-buy, .detail-collect{
                display: inline-block;
                width: 1.56rem;
                vertical-align: top;
                color: #fff;
                border-radius: 3px;
                font-size: 14px;
                line-height: 0.45rem;
                text-align: center;
            }
            .detail-buy{
                background: #9C937A;
            }
            .detail-collect{
                background: #D2AB44;
            }
        }
    }
</style>
