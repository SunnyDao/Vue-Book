<template>
	<div class="c-search-page">
		<header class="c-search-header">
			<div class="c-header-left c-header-sidebar" @click="goBack">退</div>
			<div class="c-header-center c-search-input">
				<input type="search">
			</div>
			<div class="c-header-right c-search-btn">搜索</div>
		</header>
		<hot-component :hotData="hotData"></hot-component>
		<history-component></history-component>
		<!-- <list-component></list-component> -->
	</div>
</template>

<script>
import hot from './hot'
import history from './history'

export default {
	name: 'search-component',
	data() {
		return {
			
		}
	},
	components: {
		'hot-component': hot,
		'history-component':history
	},
	created(){
		this.$store.dispatch('SEARCH_GET_HOTDATA')
	},
	computed:{
		hotData(){
			return this.$store.state.Search.hotData;
		}
	},
	methods:{
		goBack(){
			this.$store.commit('SEARCH_HIDE_PAGE')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.c-search-page {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	background: #f0f0f0;
	.c-search-header {
		display: flex;
		width: 100%;
		height: 88px;
		background: #ffffff;
		border-bottom: 1px solid #ddd;
		.c-header-left,
		.c-header-right {
			width: 88px;
			height: 88px;
			line-height: 88px;
			text-align: center;
			color: #666;
		}
		.c-header-center {
			flex: 1;
			height: 88px;
			padding: 10px 0;
			>input {
				height: 100%;
				width: 100%;
				border-radius: 6px;
				border: 1px solid #ddd;/*no*/
				background: #fff;
				text-indent: 16px;
			}
		}
	}
}
</style>
