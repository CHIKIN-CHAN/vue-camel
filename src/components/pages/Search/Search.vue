<template>
    <div class="app-search">
        <app-conmon></app-conmon>
        <div class="search-list">
            <ul>
                <router-link tag="li" :to="{name: 'detail', params: {id: search.id, name: search.name, img: search.img, price: search.price, color: search.color}}" v-for="search in searchs" :key="search.id">
                    <img :src="search.img" alt="">
                    <p>{{search.name}}</p>
                    <span>￥{{search.price}}.00</span>
                </router-link>
            </ul>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'AppSearch',
        data () {
            return {
                searchs: []
            }
        },
        methods: {
            getSearch () {
                this.$http.get('/static/json/search.json').then(res => {
                    // console.log(res.data)
                    this.searchs = res.data
                })
            }
        },
        mounted () {
            this.getSearch()
        } 
    }
</script>


<style lang="scss" scoped>
    .app-search{
        background: #fff;
        .search-list{
            ul{
                display: flex;
                flex-wrap: wrap;
                border: 1px solid rgb(236, 236, 236);
                li{
                    padding: 0.15rem;
                    display: inline-block;
                    width: 1.86rem;
                    height: 2.15rem;
                    text-align: center;
                    border-bottom: 1px solid rgb(236, 236, 236);
                    img{
                        width: 1.17rem;
                        height: 1.17rem;
                        margin: 0 auto;
                    }
                    p{
                        font-size: 12px;
                        width: 1.565rem;
                        white-space: nowrap;
                        overflow: hidden;
                        display: inline-block;
                        padding: 0.15rem 0;
                    }
                    span{
                        font-size: 20px;
                        color: orange;
                    }
                }
            }
        }
    }
</style>
