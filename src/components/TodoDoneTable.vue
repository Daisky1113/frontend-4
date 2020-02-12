<template>
  <v-card>
    <v-app-bar
    color="deep-purple accent-4"
    dense
    dark
    >
    <v-toolbar-title>{{ todoTitle }}</v-toolbar-title>
    </v-app-bar>
  <v-card-text>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">task</th>
          <th class="text-left">date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="done in doneDatas" :key="done.id">
          <td>{{ done.name }}</td>
          <td>{{ done.date }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-card-text>
  </v-card>
</template>
<script>
  export default {
    props:{
      doneDatas: Array,
      todoTitle: String
    },
  }
</script>