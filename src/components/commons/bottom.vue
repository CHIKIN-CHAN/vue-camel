<template>
    <div class="app-bottom">
        <div class="bottom-div">
            <router-link :to="nav.path" v-for="nav in navs" :key="nav.id" active-class="active" exact>
                <i :class="['fa', 'fa-' + nav.icon]"></i>
                <span>{{nav.title}}</span>
            </router-link>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'AppBottom',
        data () {
            return {
                navs: [
                    {id: 1, title: '首页', icon: 'home', path: '/'},
                    {id: 2, title: '专题', icon: 'building-o', path: '/special'},
                    {id: 3, title: '分类', icon: 'server', path: '/classify'},
                    {id: 4, title: '购物车', icon: 'shopping-bag', path: '/buycar/:id/:name/:img/:price/:color'},
                    {id: 5, title: '我的', icon: 'smile-o', path: '/mine'}
                ]
            }
        }
    }
</script>


<style lang="scss" scoped>
    .app-bottom{
        width: 100%;
        height: 0.56rem;
        background: #fff;
        color: rgb(184, 183, 183);
        text-align:center;
        position:fixed;
        left:0;
        right:0;
        bottom:0;
        .bottom-div{
            a{
                display:inline-block;
                width: 19%;
                height: 0.56rem;  
                i{
                    display:block;
                    font-size:24px;
                    margin-top:10px;
                }              
            }
        }
    }
    .active{
        color: rgb(163, 163, 32);
    }
</style>
