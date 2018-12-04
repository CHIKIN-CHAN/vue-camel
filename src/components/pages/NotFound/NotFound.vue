<template>
    <div class="app-not-found">
        <div class="not-found">
            <a @click="back" class="fa fa-angle-left"></a>
        </div>
        <div class="not-found-content">
            <h2>访问的页面不存在 <router-link to="/">回到首页</router-link></h2>
           
        </div>
    </div>
</template>


<script>
    export default {
        name: 'AppNotFound',
        methods: {
            back () {
                //编程式导航,返回上一个页面
                this.$router.go(-1)
            }
        }
    }
</script>


<style lang="scss" scoped>
    .app-not-found{
        .not-found{
            width: 100%;
            height: 0.43rem;
            background: #fff;
            padding: 0.1rem 0.2rem;
            a{
                font-size: 0.26rem;
            }
        }
        .not-found-content{
            padding: 0.1rem 0.2rem;
            a{
                font-size: 0.18rem;
                color: rgb(185, 185, 9);
            }
        }
    }
</style>
