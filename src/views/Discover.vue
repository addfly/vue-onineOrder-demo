<template>
  <div>
    <!-- 吸顶搜索栏 -->
    <search></search>

    <!-- 四宫格 -->
    <van-grid :column-num="4">
      <van-grid-item
        v-for="value in 4"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <!-- card 卡片（自定义布局）-->
    <van-row>
      <van-col class="card_0"><h3>热门活动</h3></van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col class="card_1" span="11">1</van-col>
      <van-col span="11">
        <van-row class="card_2">2</van-row>
        <van-row class="card_3">3</van-row>
      </van-col>
    </van-row>

    <!-- 底部导航 -->
    <tabbar :tabbarIndex="tabbarIndex"></tabbar>
  </div>
</template>
<script>
import tabbar from "../components/Tabbar.vue";
import search from "../components/Search";
import { Grid, GridItem, Swipe, SwipeItem, Col, Row } from "vant";
export default {
  components: {
    tabbar,
    search,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Col.name]: Col,
    [Row.name]: Row
  },
  data() {
    return {
      tabbarIndex: 2
    };
  }
};
</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.card_0 {
  margin-left: 8px;
}
.card_1 {
  height: 154px;
  background-color: aquamarine;
}
.card_2 {
  height: 72px;
  background-color: darkorange;
}
.card_3 {
  height: 72px;
  background-color: lightblue;
  margin-top: 10px;
}
</style>
