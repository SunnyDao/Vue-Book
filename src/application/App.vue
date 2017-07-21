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
		<div class="content" ref="content" @scroll="onScrollCon" @touchstart="onTouchStart" @touchmove="onScrollCon">
			<router-view></router-view>
		</div>
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
		onTouchStart(event) {
			var startY = event.touches ? event.touches[0].clientY : event.clientY;
			this.startY = this.startMoveY = startY
		},
		onScrollCon (event) {
			var nScroll = this.$refs.content.scrollTop,
				scrollHeight = this.$refs.content.scrollHeight,
				moveY = event.touches ? event.touches[0].clientY : event.clientY;
			setTimeout(function(){
				this.startMoveY = moveY;
			}.bind(this),100)

			var isTop = nScroll === 0;//是否在顶部
			var isBottom = this.startY >= moveY;

			this.moveY = moveY;
			this.scrollHeight = scrollHeight;
			this.scrollTop = nScroll;

			if(nScroll<0){
				this.text = '不允许滚动'
				event.preventDefault();
			}else if(nScroll === 0) {
				if(this.startMoveY>moveY){
					this.text = '允许滚动'
				}else{
					this.text = '不允许滚动'
					event.preventDefault();
				}
			}
		}
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

