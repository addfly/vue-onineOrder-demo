import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: 0
  },
  mutations: {
    pageChange(state, payload) {
      state.page = payload.tabbarIndex;
    }
  },
  actions: {},
  modules: {}
});
