<template>
	<div class="swiper-container" ref="slider">
		<div class="swiper-wrapper">
			<router-link class="swiper-slide"
				v-for="(item,index) in bannerslist"
				tag="div"
				:to="{name:'Detail',params:{id:item.id}}"
				:key="index" 
				:style="{backgroundImage: 'url(' + item.src + ')'}" >
				<!-- <img :src="item.src"> -->
			</router-link>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

export default {
	name: 'swiper-component',
	props:{
		bannerslist:{
			type:Array,
      		//required: true
		}
	},
	data() {
		return {
			
		}
	},
	methods:{
		initSwiper(){
			new Swiper(this.$refs.slider, {
				loop: true,
			})
		}
	},
	//不能写在create() 因为create里面dom还没有渲染完成
	mounted() {
		 /* new Swiper(this.$refs.slider, {
			loop: true,
		}) */ 
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.swiper-container{
	height: 300px;
	.swiper-slide{
		background-size: 100%;
		background-position: center;
	}
}
</style>
