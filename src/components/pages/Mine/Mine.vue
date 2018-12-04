<template>
    <div class="app-mine">
        <div class="app-mine-top">
            <img src="https://img02.camel.com.cn/image/headportrait345.png" alt="">
            <router-link to="/login-register">登录/注册</router-link>
        </div>
        <app-bottom></app-bottom>
    </div>
</template>


<script>
    export default {
        name: 'AppMine'
    }
</script>


<style lang="scss" scoped>
    .app-mine{
        .app-mine-top{
            width: 100%;
            height: 1.35rem;
            background: rgb(204, 204, 36);
            img{
                display: inline-block;    
                line-height: 1.35rem;     
                margin: 0.2rem 0.1rem 0 0.3rem;                        
            }
            a{
                display: inline-block;
                line-height: 1.35rem;
                color: #fff;
                font-size: 0.18rem;
            }
        }
    }
</style>
