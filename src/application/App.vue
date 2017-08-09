<template>
	<div id="app">
		<router-view></router-view>
		<page-component v-if="isShowLoading"></page-component>
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
			return false
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
//@import '../assets/scss/common/navbar';
</style>

