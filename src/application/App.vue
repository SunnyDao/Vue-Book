<template>
	<div id="app" v-on:touchmove.self.prevent>
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
		<div class="content" v-on:touchmove.stop>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	methods: {
		test:function(){
			console.log('阻止app滑动')
		},
		test2(event){
			event && event.stopPropagation()
			console.log('阻止main滑动')
		}
	}
};
</script>

<style lang="scss">
@import '../assets/scss/common/global';
@import '../assets/scss/common/navbar';

body,
#app {
	width: 100%;
	height: 100%;
}

.content {
	height: 100%;
	padding-bottom: 80px;
	overflow-y: auto;
	height: 100%;
	-webkit-overflow-scrolling: touch;
}
</style>

