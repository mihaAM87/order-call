import Vue from 'vue';
import { createStore, createLogger } from 'vuex';
import result from './modules/result';
import state from './state';
import getters from './getters';
import mutations from './mutations';

export default createStore({
  plugins: [createLogger()],
  state,
  getters,
  mutations,
  modules: {
    result,
  },
});
