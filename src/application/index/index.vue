<template>
	<div id="">
		<search-component></search-component>
		<swiper-conponent></swiper-conponent>
		<div class="p-index-nav">
			<div class="p-nav-item" v-for="(item,index) in navlist" :key="index">
				<div class="p-nav-icon"><img :src="item.icon"></div>
				<p>{{ item.text }}</p>
			</div>
		</div>
		<div class="p-index-hotgoods">
			<div class="p-hot-title">热卖商品</div>
			<ul class="p-hot-list">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
			</ul>
		</div>
		<div class="p-index-hotgoods">
			<div class="p-hot-title">热卖商品</div>
			<ul class="p-new-list">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Header from '../../components/search'
import Swiper from '../../components/swiper'
export default {
	name: 'Home',
	components: {
		'search-component': Header,
		'swiper-conponent': Swiper
	},
	data() {
		return {
			navlist: [{
				icon:'',
				text:'特价书籍'
			},{
				icon:'',
				text:'进口书籍'
			},{
				icon:'',
				text:'电子书'
			},{
				icon:'',
				text:'新书上架'
			},{
				icon:'',
				text:'优惠信息'
			},{
				icon:'',
				text:'会员中心'
			}],
		};
	},
};
</script>

<style lang="scss" scoped>
.p-index-nav{
	display: flex;
	flex-wrap: wrap;	
	.p-nav-item{
		width: 25%;
		height: 180px;
		padding: 20px 0;
		text-align: center;
		border-bottom: 1px solid #ddd;/*no*/
		border-right: 1px solid #ddd;/*no*/
		.p-nav-icon{
			height: 100px;
			text-align: center
		}
		>p{
			height: 40px;
			line-height: 40px;
			font-size: 28px;/*px*/
		}
		&:nth-child(4){
			border-right: none;
		}
	}
}
.p-index-hotgoods{
	.p-hot-title{
		height: 60px;
		padding: 10px 0;
		font-size: 28px;/*px*/
		line-height: 40px;
		text-align: center;
		background: #f0f0f0;
	}
}
</style>
