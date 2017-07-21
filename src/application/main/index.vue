<template>
    <div class="main">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'main',
	methods: {
        onScroll:function(){
            console.log(this.$refs.mainPage.scrollTop)
        },
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

<style lang="scss" scoped>
.main{
	//height: 100%;
	//overflow-y: auto;
}
</style>

