<template>
	<div class="main-page">
		<transition :name='transitionName'>
			<router-view class="w-wrapper-content" v-if="!isShowSearch" v-loading></router-view>
		</transition>
		<div class="w-navbar-bottom" v-if="!isShowSearch">
			<div class="tab-item item_0">
				<router-link :to="{name:'Home'}" replace>首页</router-link>
			</div>
			<div class="tab-item item_1">
				<router-link :to="{name:'Catergry'}" replace>分类</router-link>
			</div>
			<div class="tab-item item_2">
				<router-link :to="{name:'Find'}" replace>发现</router-link>
			</div>
			<div class="tab-item item_3">
				<router-link :to="{name:'Cart'}">购物车</router-link>
			</div>
			<div class="tab-item item_4">
				<router-link :to="{name:'User',params:{id:'000001'}}" replace>我的</router-link>
			</div>
		</div>
	
		<page-component v-if="isShowLoading"></page-component>
		<search-component v-if="isShowSearch"></search-component>
	</div>
</template>

<script>
import pagestatus from '~/common/pagestatus'
import search from '~/search'
export default {
	name: 'main',
	data() {
		return {
			transitionName: 'slide-left',
			map:{},
			show: false
		}
	},
	methods: {

	},
	components: {
		'page-component': pagestatus,
		'search-component': search
	},
	computed: {
		isShowLoading() {
			return this.$store.state.Page.isShowLoading
		},
		isShowSearch() {
			return this.$store.state.Search.isShowSearchPage;
		}
	},
	watch: {
		'$route'(to, from) {
			//根据进入时间的先后顺序来判断是前进还是后退
			if (!this.map[to.name]) {
				this.map[to.name] = +new Date() + 1;
			}
			if (!this.map[from.name]) {
				this.map[from.name] = +new Date();
			}
			this.transitionName = this.map[to.name] > this.map[from.name]?'slide-left':'slide-right';
		}
	}
};
</script>

<style lang="scss" scoped>
.slide-right-enter,
.slide-left-leave-active{
	transform: translate3d(-100%, 0, 0);
}

.slide-left-enter,
.slide-right-leave-active{
	transform: translate3d(100%, 0, 0);
}


$height:100px;
.main-page {
	position: relative;
	height: 100%;
	.w-wrapper-content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding-bottom: $height;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		transition: all .3s;
	}
	.w-navbar-bottom {
		position: fixed;
		z-index: 9999;
		display: flex;
		display: -webkit-flex;
		left: 0;
		bottom: 0;
		width: 100%;
		height: $height;
		background: #fff;
		border-top: 1px solid #ddd;
		/*no*/
		.tab-item {
			flex: 1;
			line-height: 100px;
			text-align: center;
			background: url('../../assets/svg/home.svg') no-repeat center 5px;
			background-size: 35%;
			a {
				display: block;
				padding-top: 70px;
				line-height: 20px;
				text-decoration: none;
			}
		}
	}
}
</style>

