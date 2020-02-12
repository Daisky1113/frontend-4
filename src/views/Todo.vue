<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <TodoTable
          :todoDatas = "todos"
          todoTitle = "Todo"
        />
      </v-col>
      <v-col cols="12" md="6">
        <TodoDoneTable
          :doneDatas = "done"
          todoTitle = "Done"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoTable from '../components/TodoTable.vue'
import TodoDoneTable from '../components/TodoDoneTable.vue'
export default{
  components: {
    TodoTable,
    TodoDoneTable
  },
  data: function(){
    return {
      todos: [
        {
          name: 'lorem ipsum lorem ipsum',
          id: 1
        },
        {
          name: 'test2',
          id: 2
        },
        {
          name: 'test3',
          id: 3
        }
      ],
      done: [
        {
          name: 'foo',
          date: '2020-02-20'
        },
        {
          name: 'foobarhoge',
          date: '2020-02-21'
        }        
      ]
    }
  }
}
</script>