<template>
    <div class="app-home-nav">
        <ul class="nav-list">
            <li class="nav-item" v-for="(nav, i) in navs" :key="i">
                <img :src="nav.icon" alt="">
                <span>{{decodeURI(nav.name)}}</span>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        name: 'AppHomeNav',
        data () {
            return {
                navs: []
            }
        },
        methods: {
            getNavs () {
                this.$http.get('https://appyou.camel.com.cn/category.aspx').then(res => {
                    res.data.list.splice(6, 1)
                    this.navs = res.data.list.slice(0, 8)
                })
            }
        },
        mounted () {
            this.getNavs()
        }
    }
</script>


<style lang="scss" scoped>
    .app-home-nav{
        width: 100%;
        height: 1.9rem;
        background: #fff;
        .nav-list{
            .nav-item{
                display: inline-block;
                width: 0.9375rem;
                height: 0.9375rem;
                text-align:center;
                padding-top: 0.1rem;
                img{
                    width: 0.6rem;
                    height: 0.6rem;
                    margin:0 auto;                    
                }
            }
        }
    }
</style>
