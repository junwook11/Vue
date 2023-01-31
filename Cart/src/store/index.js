import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:"SSAFY MART",
  },
  getters: {
  },
  mutations: {
    GO_TO_MAIN(){
      this.$router.push('/main')
    }
  },
  actions: {
  },
  modules: {
  }
})
