<template>
    <div class="main-page">
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
    name: 'main',
	methods: {
        
	}
};
</script>

<style lang="scss" scoped>
.main-page{
	height: 100%;
}
</style>

