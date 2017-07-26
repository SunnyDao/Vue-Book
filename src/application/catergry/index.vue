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
				<div class="w-banner-right"></div>
				<div class="w-catergry-md">
					<h3></h3>
					<ul v-for="(item,index) in 4" :key="index" :class="'w-catergry-item'+index">
						<!-- 这里如果直接写index会不渲染，说明class必须是一个字符串 -->
						<li v-for="(item,index) in items" :key="index" :class="'item-'+index">{{item.name}}</li>
					</ul>
				</div>
			</div>
			<div class="c-loadfail-box"></div>
		</div>
	
	</div>
</template>

<style lang="scss" scoped>
.p-catergry{
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
	padding-left: 150px;
	background: #d0d0d0;
	.w-banner-right{

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
				name: '1'
			}, {
				name: '2'
			}, {
				name: '2'
			}, {
				name: '2'
			}, {
				name: '2'
			}, {
				name: '2'
			}, {
				name: '2'
			}, {
				name: '2'
			}, {
				name: '2'
			}, {
				name: '2'
			}]
		};
	}
};
</script>

