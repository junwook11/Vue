import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:"SSAFY MART",
    list:"3"
  },
  getters: {
  },
  mutations: {
    SET_LIST_NUM(state,data){
      state.list = data
    }
  },
  actions: {
  },
  modules: {
  }
})
