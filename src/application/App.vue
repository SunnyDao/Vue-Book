<template>
	<div id="app">
		<router-view></router-view>
		<div class="deBug">
			<p class="p1">触摸Y坐标： {{ startY | parseint }}</p>
			<p class="p2">滑动Y坐标： {{ moveY | parseint}}</p>
			<p class="p2">动态Y坐标： {{ startMoveY | parseint}}</p>
			<p class="p4">可滚动高度：{{scrollHeight}}</p>
			<p class="p5">滚动高度：{{ scrollTop }}</p>
			<p class="p3">提示文字： {{ text}}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			startY: 0,
			startMoveY:0,
			moveY: 0,
			text: 'default',
			scrollHeight: 0,
			scrollTop:0
		}
	},
	filters: {
		parseint: function (value) {
			return parseInt(value)
		}
	},
	methods: {
		
	}
};
</script>

<style lang="scss">
@import '../assets/scss/common/global';
@import '../assets/scss/common/layout';
@import '../assets/scss/common/navbar';
.deBug {
	position: fixed;
	top: 0;
	right: 0;
	width: 250px;
	height: 250px;
	background: rgba(211, 211, 211, 0.5);
	/*no*/
	span {
		float: right;
	}
}
</style>

