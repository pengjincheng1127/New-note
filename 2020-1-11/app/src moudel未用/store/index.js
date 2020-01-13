import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:0
  },
  //修改同步的数据
  mutations: {
    increment(state){
      state.num ++;
      
    }
  },

  //异步代码
  actions: {
    asyncIncrement({commit}){
      setTimeout(() => {
        commit('increment');
      }, 2000);
    }
  },
  modules: {
  }
})
