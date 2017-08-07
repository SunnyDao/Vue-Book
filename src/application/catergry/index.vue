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
import catergry from '~/catergry/item'
export default {
	name: 'Catergry',
	data() {
		return {
			leftlist:[],
			rightlist:[],
			currentlist:{}
		};
	},
	computed: {
		count() {
		}
	},
	components:{
		'catergry-component': catergry,
	},
	created(){
		this.$http.get('/mock/catergry.json')
		.then((res)=>{
			this.leftlist = res.body.categrylist.map((item)=>{
				return item.name;
			});
			this.rightlist = res.body.categrylist;
			this.currentlist = res.body.categrylist.filter((item)=>{
				return item.id === 1000000;
			})[0]
			console.log('get分类数据')
		})
		.then(()=>{
			
		})
		.catch((err)=>{
			console.log(err)
		})
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
	.w-catergry-md {
		padding: 20px;
		h3 {
			font-size: 28px; /*px*/
			line-height: 40px;
			margin-bottom: 20px;
		}
		ul.w-catergry-group {
			display: flex;
			flex-wrap: wrap;
			padding: 10px 10px;
			background: #fff;
			li {
				position: relative;
				width: 33.33%;
				vertical-align: middle;
				text-align: center;
				&:before {
					content: "";
					display: inline-block;
					padding-bottom: 100%;
					width: 0.1px;
					vertical-align: middle;
				}
				a{
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					img {
						display: block;
						width: 100px;
						height: 100px;
						margin: 0 auto;
					}
					>p {
						width: 100%;
						height: 60px;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: 20px; /*px*/
						color: #686868;
						display: box;
						line-clamp: 2;
						box-orient: vertical;
						box-align: center;
						word-break: break-all;
					}
				}
			}
		}
	}
}
</style>
