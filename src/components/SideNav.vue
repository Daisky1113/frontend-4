<template>
    <v-navigation-drawer
      absolute
      temporary
      v-model="$store.state.drawer"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard', link: { name: 'Home' } },
          { title: 'Todo', icon: 'mdi-clipboard-list-outline', link: { name: 'Todo' } },
          { title: 'Login', icon: 'mdi-login', link: { name: 'Login' } },
        ],
      }
    },
  }
</script>