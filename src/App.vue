<template>
  <div id="app">
    <router-view></router-view>
    <!-- 底部安全区设置 -->
    <div class="bottomWhite"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.bottomWhite {
  height: 50px;
}
</style>
