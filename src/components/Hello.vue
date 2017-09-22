<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-bind:title='msg2'>
        鼠标悬停几秒钟就可以了
    </div>
    <p v-if='seen'>你看到我了吗</p>
    <ul>
      <li v-for='todo in todos' v-bind:key='todo.id'>{{todo.text}}</li>
    </ul>
    <button v-on:click='reversMsg'>翻转信息</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'asdasdasda',
      msg2: '页面加载与' + new Date().toLocaleString(),
      seen: true,
      todos: [
        {text: '学习javascript'},
        {text: '学习js'},
        {text: '学习abc'}
      ]
    }
  },
  methods: {
    reversMsg () {
      this.msg = this.msg.split('').reverse().join('')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
