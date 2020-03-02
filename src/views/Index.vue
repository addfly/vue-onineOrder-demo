<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar>
      <img name="gps" src="../../public/gpsicon.svg" slot="left" class="gps" />
      <div slot="left" class="address">黄淮学院 ></div>
      <img
        name="message"
        src="../../public/messageicon.svg"
        slot="right"
        class="messageicon"
      />
    </van-nav-bar>

    <!-- 搜索 -->
    <search></search>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <!-- grid 带swiper的10宫格 -->
    <van-swipe class="" :loop="false" indicator-color="white">
      <van-swipe-item>
        <van-grid :column-num="5">
          <van-grid-item
            v-for="value in 10"
            :key="value"
            icon="photo-o"
            text="文字"
          /> </van-grid
      ></van-swipe-item>
      <van-swipe-item>
        <van-grid :column-num="5">
          <van-grid-item
            v-for="value in 10"
            :key="value"
            icon="photo-o"
            text="文字"
          /> </van-grid
      ></van-swipe-item>
    </van-swipe>

    <!-- 内容 -->
    <div style="height:250px;background-color:grey"></div>

    <!-- DropdownMenu 下拉菜单-->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

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

    <!-- tabbar 底部导航 -->
    <tabbar :tabbarIndex="tabbarIndex"></tabbar>
    <!-- 底部安全区设置 -->
    <div class="bottomWhite"></div>
  </div>
</template>
<script>
import {
  NavBar,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  DropdownMenu,
  DropdownItem,
  List,
  PullRefresh,
  Cell
} from "vant";
import tabbar from "../components/Tabbar";
import search from "../components/Search";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    [Cell.name]: Cell,
    tabbar,
    search
  },
  data() {
    return {
      tabbarIndex: 0,
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
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
.van-nav-bar__left,
.van-nav-bar__right {
  height: 100%;
  display: flex;
  align-items: center;
  .gps {
    width: 16px;
  }
  .address {
    padding-left: 9px;
  }
  .messageicon {
    width: 19px;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.bottomWhite {
  height: 50px;
}
</style>
