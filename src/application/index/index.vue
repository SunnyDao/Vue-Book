<template>
  <div id="">
    <search-component></search-component>
    <swiper-conponent></swiper-conponent>
    <div class="p-index-nav">
      <div class="p-nav-item">1</div>
      <div class="p-nav-item">2</div>
      <div class="p-nav-item">3</div>
      <div class="p-nav-item">4</div>
      <div class="p-nav-item">5</div>
      <div class="p-nav-item">6</div>
      <div class="p-nav-item">7</div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/search'
import Swiper from '../../components/swiper'
export default {
  name: 'Home',
  components:{
    'search-component':Header,
    'swiper-conponent':Swiper
  },
  data() {
    return {
      msg: '首页',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
