<template>
  <div>
    <!-- 用户信息 -->
    <van-row class="personalMessage">
      <van-col span="4" offset="1"
        ><img src="../../public/200logo.png" class="headImg"
      /></van-col>
      <van-col span="15"
        ><span>用户ID0151654</span> <van-icon name="gem-o"
      /></van-col>
      <van-col>
        <van-button icon="setting-o" type="default" class="setting" />
      </van-col>
    </van-row>
    <div style="position:relative">
      <div class="aboutMoney">
        <van-grid :column-num="4" :gutter="10" :border="false">
          <van-grid-item
            v-for="value in 4"
            :key="value"
            icon="photo-o"
            text="文字"
          />
        </van-grid>
      </div>
    </div>
    <!--优惠相关  -->
    <!-- grid 带swiper的4宫格 -->
    <div class="otherOptions">
      <div class="myOptions">
        <!-- 我的功能 -->
        <van-row>
          <van-col offset="1">
            <h1>我的功能</h1>
          </van-col>
        </van-row>
        <van-grid :gutter="10" :column-num="4" :border="false">
          <van-grid-item
            v-for="value in 8"
            :key="value"
            icon="photo-o"
            text="文字"
          />
        </van-grid>
        <!-- 其它，（暂无） -->
      </div>
    </div>

    <!-- tabbar -->
    <tabbar :tabbarIndex="tabbarIndex"></tabbar>
  </div>
</template>
<script>
import { Col, Row, Icon, Button, Grid, GridItem } from "vant";
import tabbar from "../components/Tabbar.vue";
export default {
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    tabbar
  },
  data() {
    return {
      tabbarIndex: 4
    };
  }
};
</script>
<style lang="scss" scoped>
.personalMessage {
  padding-top: 22px;
  padding-bottom: 40px;
  line-height: 55px;
  background-color: #ff7c14;
  color: white;
  font-size: 15px;
}
.headImg {
  border-radius: 50%;
  border: 1px #fff solid;
  background-color: #fff;
  width: 50px;
  height: 50px;
}
.setting {
  color: #fff;
  background-color: #ff7c14;
  border: 0px;
}

.aboutMoney {
  height: 95px;
  width: 355px;
  border-radius: 10px;
  margin: 0 11px;
  position: absolute;
  top: -47px;
  left: 0px;
  background-color: #fff;
  z-index: 10;
}
.otherOptions {
  height: 700px;
  padding-top: 47.5px;
  background-color: #f4f4f4;
  .myOptions {
    background-color: #fff;
    margin: 20px 10px 0px 10px;
    border-radius: 10px;
  }
  h1 {
    font-size: 20px;
  }
}
</style>
