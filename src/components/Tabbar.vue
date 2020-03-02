<template>
  <!-- tabbar 标签栏 -->
  <van-tabbar v-model="active">
    <!-- 可以使用replace来设置是否在路由跳转时替换路由 -->
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/supermarket" icon="shop-collect-o" dot
      >超市</van-tabbar-item
    >
    <van-tabbar-item to="/discover" icon="diamond-o" info="5"
      >发现</van-tabbar-item
    >
    <van-tabbar-item to="/order" icon="orders-o" info="1">订单</van-tabbar-item>
    <van-tabbar-item to="/mine" icon="contact" dot>我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  props: {
    tabbarIndex: Number
  },
  data() {
    return {};
  },
  created() {
    this.$store.commit("pageChange", { tabbarIndex: this.tabbarIndex });
  },
  mounted() {
    // console.log(this.active);
  },
  methods: {},
  computed: {
    active: {
      // 数据双向绑定必须有set(),set()置空
      get() {
        return this.$store.state.page;
      },
      set() {}
    }
  }
};
</script>
<style lang="scss" scoped></style>
