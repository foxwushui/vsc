<template>
  <div id="app">
    <!-- 共用头部 -->
    <h1>这个是公共模板页面</h1>
    <!-- 主体部分，使用uirouter -->
    <router-view></router-view>
    <!-- 共用底部 -->
    <Footers></Footers>
  </div>
</template>
<script>
import Footers from './components/Footers.vue'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    Footers
  },
  created () {
    let _this = this
    this.dd.ready(function () {
      console.log(this)
      _this.dd.runtime.permission.requestAuthCode({
        corpId: 'dingf53c8d834194138b35c2f4657eb6378f',
        onSuccess: function (res) {
          console.log(res)
        }
      })
    })
    this.dd.error(function (err) {
      alert(window.JSON.stringify(err))
    })
  }
}
</script>
