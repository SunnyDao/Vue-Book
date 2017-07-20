<template>
	<div class="p-catergry">
		<ul>
			<li v-for="(n,index) in 100" :key="index">{{ n }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Catergry',
	computed:{
		count(){
			return this.$store.state.count
		}
	},
	data() {
		return {
			msg: '分类',
			startY: 0
		};
	}
};
</script>

<style scoped>

</style>
