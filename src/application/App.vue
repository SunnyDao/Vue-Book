<template>
    <div id="app">
        <div class="bottom-fixed-navbar">
            <div class="tab-item">
                <router-link :to="{name:'Home'}">首页</router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{name:'Catergry'}">分类</router-link>
            </div> 
            <div class="tab-item">
                <router-link :to="{name:'Find'}">发现</router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{name:'Cart'}">购物车</router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{name:'User',params:{id:'000001'}}">我的</router-link>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/common/global';
@import '../assets/scss/common/navbar';
@import '../assets/scss/common/search';

</style>

