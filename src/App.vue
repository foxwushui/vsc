<template>
  <div id="app">
    <h1>这个是公共模板页面</h1>
    <router-view></router-view>
    <footer>
      
    </footer>
    <div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {}
  },
  comments: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
}
</style>