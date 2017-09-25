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
    <button @click='reversMsg'>翻转信asdas息</button>
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
  <div v-if="message.length" class="message">

    <ul>
      <li v-for="item of message" :key="item.Id" :title="item.Title">
              <h6 class="text-overflow" style="width:220px;">{{ item.Title}}</h6>
              <div class="f-l f-16 text-l">
                  <span>{{ item.SmallTypeName}}</span>
                  <p>票据类型</p>
              </div>
              <div class="f-r f-16 text-r">
                  <span class="je">{{item.Amount}}</span>
                  <p>票据金额</p>
              </div>
              <div class="cl line"></div>
              <div class="f-l f-16 text-l">
                  <span>{{ item.SurplusDays}}天</span>
                  <p>剩余天数</p>
              </div>
              <div class="f-r f-16 text-r">
                  <span>{{ item.DueDate}}</span>
                  <p>汇票到期日1</p>
              </div>
              <div class="cl line"></div>
              <div class="f-l f-16 text-l">
                  <span class="offerNum">{{ item.OfferCount}}</span>
                  <p>报价数</p>
              </div>
              <div class="f-r f-16 text-r">
                  <span>{{ item.ViewCount}}</span>
                  <p>浏览量</p>
              </div>
              <div class="cl line"></div>
              <router-link :to="{path:'/Menu?BillNo='+item.BillNo}">查看详细</router-link>
          </li>
      </ul>
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
      nextTodoOd: 3,
      message: []
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
    this.$ajax({
      method: 'Post',
      url: '/api/billinfo/GetIndexBillList',
      data: {
        SmallType: '1',
        PageSize: '3'
      }
    }).then(res => {
      this.message = res.data.Message
    })
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
