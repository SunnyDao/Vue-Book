<template>
	<div class="c-page-status">
		<p>加载中...</p>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'status-component',
	data() {
		return {
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
	width: 100%;
	height: 100%;
	background: #ccc;
	text-align: center;
	line-height: 1;
	font-size: 40px;/*px*/
	color: #666;
}
</style>
