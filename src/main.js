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
Vue.prototype.dd = window.dd

// 全局filter
Vue.filter('selectTypes', function (val, name) {
  var json = {
    CorpType: ['客户', '渠道商'],
    Grade: ['一般', '重要', '核心'],
    CorpNature: ['终端企业', '中介', '银行'],
    GetWay: ['陌拜', '转介绍', '电销', '微信', 'QQ', '其他']
  }
  return json[name][val - 1]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
