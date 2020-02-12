<template>
  <v-app>
    <MyHeader
      pageTitle = "Hello Vuetify"
    />
  </v-app>
</template>

<script>
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'App',

  components: {
    MyHeader
  },

  data: () => ({
    //
  }),
};
</script>
