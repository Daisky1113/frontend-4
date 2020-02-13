import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    drawer: false,
    todos: []
  },
  mutations: {
    toggleSideNav(state){
      state.drawer = !state.drawer
    },
    addTodo(state, { id, todo }){
      todo.id = id
      state.todos.push(todo)
    },
    doneTodo(state,id){
      const finishTodo = state.todos.find(todo => todo.id === id)
      finishTodo.state = true
      finishTodo.date = moment().format("YYYY-MM-DD HH:mm:SS")
    },
    deleteTodo(state,id){
      const index = state.todos.findIndex(todo => todo.id === id)
      state.todos.splice(index, 1)
    },
    setLoginUser(state, user){
      state.user = user
    },
    updateTodo( state, id){
      const index = state.todos.findIndex(todo => todo.id === id)
      state.todos[index].state = true
      state.todos[index].date = moment().format("YYYY-MM-DD HH:mm:SS")
    },
    deleteLoginUser(state){
      state.user = null
    }

  },
  actions: {
    login({ commit },{ email, password }){
      firebase.auth().signInWithEmailAndPassword(email, password).then( data =>{
        commit('setLoginUser',data.user)
      })
    },
    logout({ commit }){
      firebase.auth().signOut().then(()=>{
        commit('deleteLoginUser')
      })
    },
    setLoginUser({ commit }, user){
      commit('setLoginUser', user)
    },

    deleteLoginUser({ commit }){
      commit('deleteLoginUser')
    },
    
    addTodo({ getters, commit }, todo){
      if(getters.uid){
        firebase.firestore().collection(`users/${getters.uid}/todo`).add(todo).then(doc=>{
          commit('addTodo',{id: doc.id, todo })
        })

      }else{
        console.log()
      }
    },
    updateTodo({ getters, commit }, id){
      if(getters.uid){
        firebase.firestore().collection(`users/${getters.uid}/todo`).doc(id).update({
          state: true,
          date: moment().format("YYYY-MM-DD HH:mm:SS")
        }).then( () => {
          commit('updateTodo', id )
        })
      }
    },
    deleteTodo({ getters, commit }, id){
      firebase.firestore().collection(`users/${getters.uid}/todo`).doc(id).delete().then(()=>{
        commit('deleteTodo',id)
      })
    },
    fetchTodos({ getters, commit }){
      firebase.firestore().collection(`users/${getters.uid}/todo`).get().then(snapshot=>{
        snapshot.forEach(doc => commit('addTodo',{ id: doc.id, todo: doc.data() }))
      })
    }
  },
  getters: {
    doneTodos(state){
      return state.todos.filter(todo => todo.state === true)
    },
    proceedTodos(state){
      return state.todos.filter(todo => todo.state === false)
    },
    uid(state){
      return state.user ? state.user.uid : null
    },
  },
  modules: {
  }
})
