<template>
	<div class="p-catergry">
		<div class="p-catergry-left">
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<div class="p-catergry-right">
			<div class="c-scroll-box">
				<div class="w-banner-right">
					<img src="https://m.360buyimg.com/mobilecms/s528x180_jfs/t1099/96/294528099/21413/1cb6c44f/55137bdbNfdce143e.jpg">
				</div>
				<div class="w-catergry-md">
					<h3>电脑整机</h3>
					<ul class="w-catergry-group">
						<!-- 这里如果直接写index会不渲染，说明class必须是一个字符串 -->
						<li v-for="(item,index) in items" :key="index" :class="'item-'+index">
							<router-link :to="{name:'Goodslist',params:{goodslist_id:index}}">
								<img src="https://m.360buyimg.com/mobile/s100x100_jfs/t340/186/1520019972/4535/fc9624f9/543c8f8aN9eab4fa0.jpg">
								<p class="item-text">{{item.name}}</p>
							</router-link>
						</li>
					</ul>
					<h3>电脑配件</h3>
				</div>
			</div>
			<div class="c-loadfail-box"></div>
		</div>
	</div>
</template>

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

<script>
export default {
	name: 'Catergry',
	computed: {
		count() {
		}
	},
	data() {
		return {
			items: [{
				name: '笔记本'
			}, {
				name: '游戏本'
			}, {
				name: '台式机'
			}, {
				name: '一体机'
			}, {
				name: '轻薄本'
			}, {
				name: '商用台式机'
			}, {
				name: '游戏台式机'
			}, {
				name: '平板电脑'
			}, {
				name: '二合一平板'
			}, {
				name: '服务器/工作站'
			}]
		};
	}
};
</script>

