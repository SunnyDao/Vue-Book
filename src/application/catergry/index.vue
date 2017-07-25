<template>
	<div class="p-catergry">
		<div class="p-catergry-left">
			
		</div>
		<div class="p-catergry-right">
			<div class="w-banner-right"></div>
			<div class="w-catergry-md">
				<h3></h3>
				<ul v-for="(item,index) in 4" :key="index" :class="'w-catergry-item'+index"><!-- 这里如果直接写index会不渲染，说明class必须是一个字符串 -->
					<li v-for="(item,index) in items" :key="index" :class="'item-'+index">{{item.name}}</li>
				</ul>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'Catergry',
	computed:{
		count(){
		}
	},
	data() {
		return {
			items:[{
				name:'1'
			},{
				name:'2'
			},{
				name:'2'
			},{
				name:'2'
			},{
				name:'2'
			},{
				name:'2'
			},{
				name:'2'
			},{
				name:'2'
			},{
				name:'2'
			},{
				name:'2'
			}]
		};
	}
};
</script>

<style lang="scss" scoped>

</style>

