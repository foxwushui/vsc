<template>
  <div id="app">
    <!-- 主体部分，使用uirouter -->
    <router-view></router-view>
    <!-- 底部tabbar -->
    <Tabbar v-show="tabbarShow"></Tabbar>
  </div>
</template>
<script>
import Tabbar from './components/Tabbar'

export default {
  name: 'app',
  data () {
    return {
      selected: ''
    }
  },
  computed: {
    tabbarShow () {
      return this.$store.state.tabbar.show
    }
  },
  components: {
    Tabbar
  },
  created () {
    // 入口页 免登陆
    this.dd.ready(() => {
      this.dd.runtime.permission.requestAuthCode({
        corpId: 'dingf53c8d834194138b35c2f4657eb6378f',
        onSuccess: res => {
          console.log(res)
        }
      })
    })
    this.$ajax.get('/api/home/test').then(function (res) {
      console.log(res)
    })
  }
}
</script>
