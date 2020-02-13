<template>
  <v-card>
    <v-app-bar
    color="deep-purple accent-4"
    dense
    dark
    >
    <v-toolbar-title>{{ todoTitle }}</v-toolbar-title>
    <AddTodo/>
    </v-app-bar>
  <v-card-text>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">task</th>
          <th class="text-left">edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todoDatas" :key="todo.id">
          <td>{{ todo.name }}</td>
          <td :data-todo-id="todo.id">
            <v-btn @click="done(todo.id)" text icon color="pink">
              <v-icon>mdi-check</v-icon>
            </v-btn>
            <v-btn text icon color="pink">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn @click="deleteTodo(todo.id)" text icon color="pink">
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>                    
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-card-text>
  </v-card>
</template>
<script>
import AddTodo from '../components/AddTodo.vue'
import { mapActions } from 'vuex'
  export default {
    components: {
      AddTodo
    },
    props:{
      todoDatas: Array,
      todoTitle: String
    },
    methods: {
      done(id){
        this.updateTodo(id)
      },
      ...mapActions(['deleteTodo', 'updateTodo'])
    }    
  }
</script>