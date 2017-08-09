<template>
	<div class="p-catergry">
		<div class="p-catergry-left">
			<ul>
				<li v-for="(item,index) in leftlist" :key="index">
					{{item}}
				</li>
			</ul>
		</div>
		<div class="p-catergry-right">
			<div class="c-scroll-box">
				<div class="w-banner-right">
					<img :src="currentlist.bannerSrc">
				</div>
				<catergry-component :itemData="currentlist.list"></catergry-component>
			</div>
			<div class="c-loadfail-box"></div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import catergry from '~/catergry/item'
export default {
	name: 'Catergry',
	data() {
		return {
		};
	},
	computed: mapState({
		leftlist: state => state.Catergry.leftlist,
		rightlist: state => state.Catergry.rightlist,
		currentlist: state => state.Catergry.currentlist,
	}),
	components:{
		'catergry-component': catergry,
	},
	created(){
		this.$store.dispatch('CATERGRY_GETINITDATA_ACTION');
	}
};
</script>

<style lang="scss" scoped>
.p-catergry {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.p-catergry-left {
	float: left;
	width: 150px;
	height: auto;
	min-height: 100%;
	overflow-y: auto;
	background: #fff;
	ul{
		li{
			height: 80px;
			line-height: 80px;
			text-align: center;
			border-bottom: 1px solid #e5e5e5;
		}
	}
}
.p-catergry-right {
	width: 100%;
	height: 100%;
	padding-left: 150px;
	background: #f0f0f0;
	.w-banner-right {
		padding: 20px;
		img {
			display: block;
			width: 100%;
		}
	}
}
</style>
