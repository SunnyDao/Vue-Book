<template>
  <div class="c-search-hot">
	  <p class="w-title">热门搜索</p>
	  <div class="w-hot-mark">
		  <div class="item" v-for="(item,index) in hotData" :key="index">
			  {{item.name}}
		  </div>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'hot-component',
	data() {
		return {
		}
	},
	props:['hotData']
}
</script>

<style lang="scss" scoped>
.c-search-hot{
	padding: 20px;
	background: #fff;
	.w-title{
		font-size: 28px;/*px*/
		height: 40px;
		margin-bottom: 20px;
	}
	.w-hot-mark{
		display: flex;
		flex-wrap: wrap;
		align-content:flex-start;
		justify-content: flex-start;
		.item{
			padding: 6px 10px;
			font-size: 28px;/*px*/
			margin: 10px 10px 10px 0;
			background: #f2f2f2;
		}
	}
}
</style>
