<template>
    <div id="">
        {{ msg }}
		<ul v-for="(n,index) in 100" :key="index">
			<li>{{ n }}</li>
		</ul>
    </div>
</template>

<script>
export default {
  name: 'Catergry',
  data() {
    return {
      msg: '分类',
    };
  },
};
</script>

<style scoped>

</style>
