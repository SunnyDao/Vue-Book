<template>
	<div class="p-goodslist">
		<div class="p-goodslist-box">
			<ul>
				<li v-for="(item,index) in list" :key="index">
					<div class="item-pic">
						<img :src="item.imageSrc">
					</div>
					<div class="item-con">
						<h3>{{item.title}}</h3>
						<div class="item-price">￥
							<span>{{item.bigPrice}}</span>
							<span>.{{item.smallPrice}}</span>
						</div>
						<div class="item-info">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'detail',
	data() {
		return {
			list: [{
				imageSrc:'https://m.360buyimg.com/mobilecms/s357x357_jfs/t5704/263/1755481718/255187/9e609cb8/5929684fNbc2d3f94.jpg!q50.jpg',
				title:'Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/128GB SSD闪存 MMGF2CH/A)',
				bigPrice:6800,
				smallPrice:50
			},{

			}],
		};
	},
};
</script>

<style scoped>

</style>
