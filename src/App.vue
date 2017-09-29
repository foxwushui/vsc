<template>
  <div id="app">
    <!-- 主体部分，使用uirouter -->
    <!-- <transition name="component-fade" mode="out-in"> -->
      <router-view></router-view>
    <!-- </transition> -->
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
      selected: '',
      code: ''
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
  }
}
</script>
<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
