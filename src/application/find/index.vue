<template>
	<div class="find">
		<h1>{{ count }}</h1>
	</div>
</template>

<script>
export default {
	name: 'find',
	computed:{
		count(){
			return this.$store.state.count
		}
	},
	data() {
		return {
			msg: '这里是发现'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
