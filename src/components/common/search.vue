<template>
	<header class="p-search-header">
		<div class="p-header-left p-header-sidebar">导</div>
		<div class="p-header-center p-search-input">
			<input type="search">
		</div>
		<div class="p-header-right p-search-btn">搜索</div>
	</header>
</template>

<script>
export default {
	name: 'search-component',
	data() {
		return {

		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.p-search-header{
    display: flex;
    width: 100%;
    height: 88px;
    background: #ff0036;
    .p-header-left,
    .p-header-right{
        width: 88px;
        height: 88px;
        line-height: 88px;
        text-align: center;
        color: #fff;
    }
    .p-header-center{
        flex: 1;
        height: 88px;
        padding: 10px 0;
        >input{
            height: 100%;
            width: 100%;
            border-radius: 6px;
            border: none;
            background: #fff;
            text-indent: 16px;
        }
    }
}
</style>
