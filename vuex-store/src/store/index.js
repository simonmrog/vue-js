import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getCount(state) {
      return state.count;
    }
  },
  actions: {
    changeCount(context, payload) {
      context.commit("updateCount", payload);
    }
  },
  mutations: {
    updateCount(state, payload) {
      state.count = state.count + payload;
    }
  }
});

export default store;

// state => getters
// actions => dispatch
// mutations => commit