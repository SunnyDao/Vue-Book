<template>
	<div id="app">
		<router-view></router-view>
		<page-component v-if="isShowLoading">
			<div>{{isShowLoading}}</div>
		</page-component>
		<!-- <div class="deBug">
				<p class="p1">触摸Y坐标： {{ startY | parseint }}</p>
				<p class="p2">滑动Y坐标： {{ moveY | parseint}}</p>
				<p class="p2">动态Y坐标： {{ startMoveY | parseint}}</p>
				<p class="p4">可滚动高度：{{scrollHeight}}</p>
				<p class="p5">滚动高度：{{ scrollTop }}</p>
				<p class="p3">提示文字： {{ text}}</p>
			</div> -->
	</div>
</template>

<script>
import pagestatus from '~/common/pagestatus'
export default {
	name: 'app',
	data() {
		return {
		}
	},
	components: {
		'page-component': pagestatus
	},
	computed: {
		isShowLoading() {
			return this.$store.state.isShowLoading
		}
	},
	filters: {
		parseint: function (value) {
			return parseInt(value)
		}
	},
	methods: {

	},
};
</script>

<style lang="scss">
@import '../assets/scss/common/global';
@import '../assets/scss/common/layout';
@import '../assets/scss/common/navbar';
</style>

