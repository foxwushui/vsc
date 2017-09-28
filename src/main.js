// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 主体，扩展
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

// css
import './assets/css/amazeui.css'
import './assets/css/main.css'

// 配置
Vue.config.productionTip = true
Vue.prototype.$ajax = axios

// 全局挂载dd
Vue.prototype.dd = window.dd

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
