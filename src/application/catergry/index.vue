<template>
	<div class="p-catergry">
		{{ startY }}
		<ul>
			<li v-for="(n,index) in 100" :key="index">{{ n }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Catergry',
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
