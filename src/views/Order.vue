<template>
  <div>
    3
    <tabbar :tabbarIndex="tabbarIndex"></tabbar>
  </div>
</template>
<script>
import tabbar from "../components/Tabbar.vue";
export default {
  data() {
    return {
      tabbarIndex: 3
    };
  },
  components: { tabbar }
};
</script>
<style lang="scss" scoped></style>
