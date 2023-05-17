import Vue from "vue";
import Vuex from "vuex";
import cookie from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: cookie.get("user_data") ? JSON.parse(cookie.get("user_data")) : {},
  },
  mutations: {
    SET_USER(state, user_data) {
      state.user = user_data;
    },
  },
  getters: {
    user: (state) => state.user,
  },
});
