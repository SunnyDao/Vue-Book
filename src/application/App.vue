<template>
	<div id="app">
		<div class="bottom-fixed-navbar">
			<div class="tab-item">
				<router-link :to="{name:'Home'}">首页</router-link>
			</div>
			<div class="tab-item">
				<router-link :to="{name:'Catergry'}">分类</router-link>
			</div>
			<div class="tab-item">
				<router-link :to="{name:'Find'}">发现</router-link>
			</div>
			<div class="tab-item">
				<router-link :to="{name:'Cart'}">购物车</router-link>
			</div>
			<div class="tab-item">
				<router-link :to="{name:'User',params:{id:'000001'}}">我的</router-link>
			</div>
		</div>
		<div class="content" ref="content" 
			@scroll="onScrollCon"
			@touchstart="onTouchStart"
			@touchmove="onScrollCon">
			<router-view></router-view>
		</div>
		<div class="testData">{{ startY }}======{{moveY}}====={{text}}</div>  
	</div>
</template>

<script>
export default {
	name: 'app',
	data(){
		return{
			startY:0,
			moveY:0,
			text:''
		}
	},
	methods: {
		onTouchStart(event){
			var startY = event.touches ? event.touches[0].clientY : event.clientY;
			this.startY = parseInt(startY)
		},
        onScrollCon:function(event){
			var nScroll = this.$refs.content.scrollTop,
				moveY = event.touches ? event.touches[0].clientY : event.clientY;
			this.moveY = moveY;
			var isTop = this.startY<=moveY && nScroll===0;//是否在顶部
			var isBottom = this.startY>=moveY; 
			this.text=isTop;
			if(isTop){
				event.preventDefault();
			}
            /* if(!isUp){
				console.log('向下滑动',nScroll)
				if(nScroll===0 || nScroll<0){
					console.log('阻止默认事件')
					event.preventDefault();
				}
			}else{
				//event.preventDefault();
			} */
        }
	}
};
</script>

<style lang="scss">
@import '../assets/scss/common/global';
@import '../assets/scss/common/layout';
@import '../assets/scss/common/navbar';
.testData{
	position: fixed;
	top: 0;
	width: 100%;
	height: 50px;
	background: #fff;
	border-bottom: 1px solid #ddd;/*no*/
}

</style>

