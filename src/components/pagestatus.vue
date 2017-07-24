<template>
	<div :class="switchStatus">
	</div>
</template>

<script>
export default {
	name: 'status-component',
	data() {
		return {
		}
	},
	props: [
		"status",
	],
	computed:{
		switchStatus(){
			return 'pagestatus_00'+this.status.num
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
