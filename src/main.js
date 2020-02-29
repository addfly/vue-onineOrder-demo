import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FastClick from "fastclick";
import vuescroll from "vuescroll";

Vue.config.productionTip = false;

FastClick.attach(document.body);
Vue.use(vuescroll);
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: "#00FF00"
  }
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
