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
export default {
  name: 'App',

  components: {
    MyHeader,
    SideNav
  },

  data: () => ({
    //
  }),
};
</script>
