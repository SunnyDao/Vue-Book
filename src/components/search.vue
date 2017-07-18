<template>
  <header class="c-search-header">
    <div class="c-header-left c-header-sidebar">导</div>
    <div class="c-header-center c-search-input"><input type="search"></div>
    <div class="c-header-right c-search-btn">搜索</div>
  </header>
</template>

<script>
export default {
  name: 'search-component',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/common/search.scss';
</style>
