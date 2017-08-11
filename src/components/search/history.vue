<template>
  <div class="c-search-history" v-if="historylist">
	  <p class="w-title">历史搜索</p>
	  <div class="w-history-list">
		  <div class="item" v-for="(item,index) in historylist" :key="index">
			  {{item.name}}
		  </div>
	  </div>
  </div>
</template>

<script>
const storage = window.localStorage;
export default {
  name: 'history-component',
	data() {
		return {

		}
	},
	computed:{
		historylist(){
			return storage.getItem('_history_');
		}
	},
	created(){
		const historyData = storage.getItem('_history_');
	}
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
		.item{
			padding: 6px 10px;
			font-size: 28px;/*px*/
			margin: 10px 20px 10px 0;
			background: #f2f2f2;
		}
	}
}
</style>
