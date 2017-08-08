<template>
	<div class="c-page-status">
		<img :src="loadingSrc">
		<p>加载中...</p>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'status-component',
	data() {
		return {
			loadingSrc:require('@/assets/img/common/loading.gif')
		}
	},
	computed:{
		
	}
}
</script>

<style lang="scss" scoped>
.c-page-status{
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 99999;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background: #f0f0f0;
	text-align: center;
	line-height: 1;
	font-size: 32px;/*px*/
	color: #666;
	img{
		display: block;
		width: 140px;
		margin-bottom: 20px;
	}
}
</style>
