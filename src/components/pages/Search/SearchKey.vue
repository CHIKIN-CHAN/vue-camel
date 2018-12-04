<template>
    <div class="search-key">
        <div class="key-top">
            <a @click="back" class="fa fa-angle-left"></a>
            <input type="text" placeholder="冲锋衣" v-model="new_title" @keyup.enter="confirm">
            <a class="fa fa-close clean" @click="del"></a>
        </div>
        <div class="key-content">
            <p>热门搜索</p> 
            <router-link tag="button" to="/search" v-for="btn in btns" :key="btn.id">{{btn.name}}</router-link>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'SearchKey',
        data () {
            return {
                btns: [
                    {id: 1, name: "冲锋衣"},
                    {id: 2, name: "冲锋裤"}
                ],
                new_title: ''
            }
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            del () {
                this.new_title = ''
            },
            confirm () {
                this.$router.push("/search")
            }
        }
    }
</script>


<style lang="scss" scoped>
    .search-key{
        .key-top{
            width: 100%;
            height: 0.43rem;
            background: #fff;
            padding: 0.1rem 0.15rem;
            overflow: hidden;
            a{
                font-size: 0.26rem;
            }
            input{
                font-size:14px;
                border: 0px;
                outline:none;
                margin-left: 0.1rem;
            }
            .clean{
                border:0px;
                background-color:transparent;
                font-size: 0.26rem;
                float: right;
            }
        }
        .key-content{
            padding: 0.15rem 0.2rem;
            p{
                color: rgb(189, 188, 188);
                margin-bottom: 0.1rem;
            }
            button{
                margin-right: 0.1rem;
                border:0px;
                background-color:#fff;
                border: 1px solid #ccc;
                width: 0.71rem;
                height: 0.36rem;
                color: rgb(153, 151, 151);                
            }
        }

    }
</style>
