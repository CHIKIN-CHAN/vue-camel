<template>
    <div class="conmon">
        <router-link tag="i" to="/search-key" class="fa fa-search search" v-if="show == 'home' || show == 'classify' || show == 'special'"></router-link>
        <a @click="backTop"  class="fa fa-angle-left search" v-else></a>
        <router-link to="/" class="homeimg"><img src="https://img02.camel.com.cn/image/you_logo_20171109.jpg" alt=""></router-link>
        <a class="fa fa-commenting-o message" href="javascript:;"></a>
    </div>
</template>


<script>

    export default {
        name:'conmon',
        data () {
            return {
                show: this.$route.name
            }
        },
        methods: {
            backTop (){
                this.$router.go(-1)
            }
        }
    }
</script>


<style scoped lang = "scss">
    .conmon {
        width: 100%;
        height: 0.45rem;
        display: flex;
        align-items: center;
        background: #fff;
        .search{
            font-size: 26px;
            margin: 0 0 0 0.1rem;
        }
        .homeimg{
            margin: 0 auto;
            img {
            width: 0.825rem;
            height: 0.23rem;
            }
        }
        .message{
            font-size: 26px;
            margin-right: 0.1rem;
        }
    }
</style>
