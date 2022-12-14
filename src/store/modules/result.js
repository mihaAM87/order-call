import axios from 'axios';

export default {
  actions: {
    async fetchResult(ctx, params) {
      const res = await axios
        .post('http://hh.autodrive-agency.ru/test-tasks/front/task-7/', params)
        .then((response) => response);
      const result = await res;

      ctx.commit('getResult', result.data);
      ctx.commit('showResult');
    },
  },
  mutations: {
    getResult(state, result) {
      state.result = result;
    },
    showResult(state, result) {
      state.isResultVisible = true;
    },
    closeResult(state, result) {
      state.isResultVisible = false;
    },
  },
  getters: {
    result(state) {
      return state.result;
    },
    isResultVisible(state) {
      return state.isResultVisible;
    },
  },
};
