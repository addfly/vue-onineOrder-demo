<template>
  <div>
    <!-- 吸顶搜索栏 -->
    <search></search>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <!-- 十宫格 -->
    <van-grid :column-num="5">
      <van-grid-item
        v-for="value in 10"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>

    <!-- card 卡片（自定义布局）-->
    <van-row>
      <van-col class="card_0"><h3>推荐优选</h3></van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col class="card_1" span="11">1</van-col>
      <van-col class="card_2" span="11">2</van-col>
    </van-row>

    <!-- card 2卡片（自定义布局）-->
    <van-row>
      <van-col class="card_0"><h3>超值热卖</h3></van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col class="card_1" span="7">1</van-col>
      <van-col class="card_2" span="7">2</van-col>
      <van-col class="card_3" span="7">3</van-col>
    </van-row>

    <!-- 底部导航 -->
    <tabbar :tabbarIndex="tabbarIndex"></tabbar>
  </div>
</template>
<script>
import tabbar from "../components/Tabbar";
import search from "../components/Search";
import { Grid, GridItem, Swipe, SwipeItem, Col, Row } from "vant";
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Col.name]: Col,
    [Row.name]: Row,
    tabbar,
    search
  },
  data() {
    return { tabbarIndex: 1 };
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
  height: 96px;
  background-color: aquamarine;
}
.card_2 {
  height: 96px;
  background-color: darkorange;
}
.card_3 {
  height: 96px;
  background-color: lightblue;
}
</style>
