<template>
	<div class="w-catergry-md">
		<div v-for="(modules,num) in itemData" :key="num">
			<h3>{{modules.name}}</h3>
			<ul class="w-catergry-group">
				<!-- 这里如果直接写index会不渲染，说明class必须是一个字符串 -->
				<li v-for="(item,index) in modules.goodsList" :key="index" :class="'item-'+index">
					<router-link :to="{name:'Goodslist',params:{goodslist_id:item.id}}">
						<img :src="item.imgSrc">
						<p class="item-text">{{item.name}}</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	props: ['itemData']
}
</script>

<style lang="scss" scoped>
.w-catergry-md {
	padding: 20px;
	>div{
		margin-bottom: 20px;
	}
	h3 {
		font-size: 28px;/*px*/
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
			a {
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
					font-size: 20px;/*px*/
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
</style>
