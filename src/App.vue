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
  }
}
</script>
