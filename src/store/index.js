import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    todos: [
      {
        name: 'lorem ipsum lorem ipsum',
        id: 1
      },
      {
        name: 'test2',
        id: 2
      },
      {
        name: 'test3',
        id: 3
      },
    ]
  },
  mutations: {
    toggleSideNav(state){
      state.drawer = !state.drawer
    }
  },
  actions: {
  },
  modules: {
  }
})
