<template>
  <v-app>
    <MyHeader
      pageTitle = "Hello Vuetify"
    />
    <SideNav/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import SideNav from './components/SideNav.vue'
import firebase from 'firebase'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setLoginUser(user)
        this.fetchTodos()
        if(this.$router.currentRoute.name === 'Login'){
          this.$router.push('/todo',()=>{})
        }
      }else{
        this.deleteLoginUser()
        this.$router.push('/login',()=>{})
      }
    })
  },
  components: {
    MyHeader,
    SideNav
  },

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['setLoginUser', 'deleteLoginUser', 'fetchTodos'])
  }
};
</script>
