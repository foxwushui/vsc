// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 主体，扩展
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'

// css
import './css/style.css'
import './css/main.css'

// 配置
Vue.config.productionTip = true
Vue.prototype.$ajax = axios
Vue.use(MintUI)

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
