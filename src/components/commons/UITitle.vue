<template>
    <div class="app-uititle">
        <div class="title">
            <div class="title-span" v-for="(title, i) in titles" :key="i">{{title}}</div>
        </div>
        <slot></slot>
    </div>
</template>


<script>
    export default {
        name: 'AppUITitle',
        data () {
            return {
                titles: ['大牌制造商', '预售', '户外系列', '男鞋系列', '专题', '女鞋系列', ' 运动瑜伽']
            }
        }
    }
</script>


<style lang="scss" scoped>
    .app-uititle {
        .title {
            padding-left:0.2rem;
            .title-span {
                font-size: 0.19rem;
                color: #444;
                letter-spacing: 3px;
                width: 100%;
                line-height: 0.64rem;
            }
        }
    }
</style>
