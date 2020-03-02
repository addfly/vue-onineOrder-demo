<template>
  <!-- 加入吸顶 -->
  <van-sticky>
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="龙湖餐厅 满25-5" />
  </van-sticky>
</template>

<script>
import { Search, Sticky } from "vant";
export default {
  components: { [Search.name]: Search, [Sticky.name]: Sticky },
  data() {
    return {
      value: ""
    };
  }
};
</script>
