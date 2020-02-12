<template>
  <div id="app">
    <div id="wrapper">
    <MyHeader/>
    <MyNavigation/>
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
  </div>
</template>
<script>
  import MyHeader from './components/MyHeader.vue'
  import MyNavigation from './components/MyNavigation.vue'

  export default{
    name: 'App',
    components: {
      MyHeader,
      MyNavigation
    }
  }
  
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.v-enter{
  opacity: 0;
}

.v-enter-to{
  opacity: 1;
}

.v-leave{
  opacity: 1;
}

.v-leave-to{
  opacity: 0;
}

.v-enter-active,
.v-leave-active{
  transition: .2s;
}
</style>
