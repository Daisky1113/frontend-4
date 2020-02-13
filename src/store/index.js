import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    todos: [
      {
        name: 'lorem ipsum lorem ipsum',
        id: 1,
        state: false,
      },
      {
        name: 'test2',
        id: 2,
        state: false,
      },
      {
        name: 'test3',
        id: 3,
        state: false,
      },
    ]
  },
  mutations: {
    toggleSideNav(state){
      state.drawer = !state.drawer
    },
    addTodo(state,todo){
      state.todos.push(todo)
    },
    doneTodo(state,id){
      state.todos.find(todo => todo.id === id).state = true
    }
  },
  actions: {
  },
  getters: {
    doneTodos(state){
      return state.todos.filter(todo => todo.state === true)
    },
    proceedTodos(state){
      return state.todos.filter(todo => todo.state === false)
    }
  },
  modules: {
  }
})
