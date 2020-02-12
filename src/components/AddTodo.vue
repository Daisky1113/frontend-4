<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
          <v-btn color="pink" small  dark v-on="on">Add Todo</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="name" label="task name" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="regist">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapMutations } from 'vuex'
  export default {
    data: () => ({
      dialog: false,
      name: ''
    }),
    methods: {
      regist(){
        this.addTodo({
          name: this.name,
          state: false,
          id: Math.floor(Math.random() * 1000)
        })
        this.dialog = false
        this.name = ''
      },
      ...mapMutations(['addTodo'])
    }
  }
</script>