<template>
  <v-app>
    <MyHeader/>
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
