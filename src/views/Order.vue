<template>
  <div>
    <!-- 吸顶 -->
    <van-sticky>
      <!-- 导航栏 -->
      <van-nav-bar title="订单">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </van-sticky>

    <!-- 标签页 -->
    <van-tabs v-model="active" sticky="">
      <van-tab title="全部订单">
        <!-- list -->
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell v-for="item in list" :key="item" :title="item" />
          </van-list>
        </van-pull-refresh>
        <!-- 底部安全区设置 -->
        <div class="bottomWhite"></div>
      </van-tab>
      <van-tab title="待评价">待评价</van-tab>
      <van-tab title="退款">退款</van-tab>
    </van-tabs>

    <!-- tabbar -->
    <tabbar :tabbarIndex="tabbarIndex"> </tabbar>
  </div>
</template>
<script>
import { NavBar, Icon, Sticky, Tab, Tabs, List, PullRefresh, Cell } from "vant";
import tabbar from "../components/Tabbar.vue";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Sticky.name]: Sticky,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    [Cell.name]: Cell,
    tabbar
  },
  data() {
    return {
      active: 0,
      tabbarIndex: 3,
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>
<style lang="scss" scoped>
.bottomWhite {
  height: 50px;
}
</style>
