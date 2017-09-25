<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div :title='msg2'>
      鼠标悬停几秒钟就可以了
    </div>
    <p v-if='seen' :class="{active:seen}" :style="styleObj">你看到我了吗</p>
    <ul>
      <li v-for='(todo,index) of todos' :key='todo.id'>{{index}},{{todo.text}}</li>
    </ul>
    <button @click='reversMsg'>翻转信息</button>
    <input type="text" v-model="msg">
    <p>{{reverseMsg2()}}</p>
    <template v-if="seen">
      <h1>你好</h1>
    </template>

    
    <input type="text" v-model="newTodoText" @keyup.enter="addNewTodo" placeholder="add a todo">
    <ul>
      <li v-for="(todo,index) of todos" :key="todo.id" :title="todo.text">
        {{todo.text}}
        <button @click="todos.splice(index,1)">X</button>
      </li>
    </ul>
    <router-link to="/Menu">菜单</router-link>
    <p @click="$store.dispatch('switch_child')">点击</p>
    <div> 


<child></child>


    </div>
  </div>
</template>

<script>
import Child from './Child1'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'asdasdasda',
      msg2: '页面加载与' + new Date().toLocaleString(),
      seen: true,
      todos: [
        { id: 0, text: '学习javascript' },
        { id: 1, text: '学习js' },
        { id: 2, text: '学习abc' }
      ],
      styleObj: {
        fontSize: '14px',
        transform: 'all 0.5 ease'
      },
      newTodoText: '',
      nextTodoOd: 3
    }
  },
  components: {
    Child
  },
  methods: {
    reversMsg () {
      this.msg = this.msg.split('').reverse().join('')
    },
    reverseMsg2 () {
      return this.msg.split('').reverse().join('')
    },
    addNewTodo (e) {
      console.log(e)
      this.todos.push({
        id: this.nextTodoOd++,
        text: this.newTodoText
      })
      this.newTodoText = ''
    }
  },
  created () {
    document.title = 'hello页面'
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
