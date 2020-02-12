<template>
  <v-app>
    <MyHeader
      pageTitle = "Hello Vuetify"
    />
    <SideNav/>
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
