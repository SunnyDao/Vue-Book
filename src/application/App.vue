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
		<div class="content" ref="mainPage" v-on:touchmove="onMove($event)" v-on:touchstart="onStart($event)">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	methods: {
		onStart: function (event) {
			this.startY = event.touches ? event.touches[0].screenY : event.screenY;
		},
		onMove: function (event) {
			var el = this.$refs.mainPage;
			this.startY = event.touches ? event.touches[0].screenY : event.screenY;
			while (el !== document.body) {
				var style = window.getComputedStyle(el);

				if (!style) {
					break;
				}
				if (el.nodeName === 'INPUT' && el.getAttribute('type') === 'range') {
					return;
				}

				var scrolling = style.getPropertyValue('-webkit-overflow-scrolling');
				var overflowY = style.getPropertyValue('overflow-y');
				var height = parseInt(style.getPropertyValue('height'), 10);

				var isScrollable = scrolling === 'touch' && (overflowY === 'auto' || overflowY === 'scroll');
				var canScroll = el.scrollHeight > el.offsetHeight;
				

				if (isScrollable && canScroll) {
					var curY = event.touches ? event.touches[0].screenY : event.screenY;

					var isAtTop = (this.startY <= curY && el.scrollTop === 0);
					var isAtBottom = (this.startY >= curY && el.scrollHeight - el.scrollTop === height);

					if (isAtTop || isAtBottom) {
						event.preventDefault();
					}
					return;
				}
				el = el.parentNode;
			}
			//event.preventDefault();
		}
	}
};
</script>

<style lang="scss">
@import '../assets/scss/common/global';
@import '../assets/scss/common/layout';
@import '../assets/scss/common/navbar';


</style>

