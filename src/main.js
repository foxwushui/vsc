// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 主体，扩展
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import FastClick from 'fastclick'

// css
import './assets/css/amazeui.css'
import './assets/css/main.css'

// ajax拦截器  请求之前和请求错误
// axios.defaults.baseURL = 'http://ddingapi.91hpzj.com/'
axios.defaults.timeout = 2500
axios.interceptors.request.use(function (config) {
  // 显示加载中
  window.dd.device.notification.showPreloader()
  return config
}, function (error) {
  window.dd.device.notification.hidePreloader()
  return window.Promise.reject(error)
})
// 请求结束之后
axios.interceptors.response.use(function (response) {
  // 加载完成
  window.dd.device.notification.hidePreloader()
  const data = response.data
  if (data.RetCode && data.RetCode === '10000') {
    return response
  } else {
    const error = new Error(data.RetMsg)
    error.data = data
    error.response = response
    throw error
  }
}, function (error) {
  window.dd.device.notification.hidePreloader()
  return window.Promise.reject(error)
})

// 配置
Vue.config.productionTip = true
Vue.prototype.$ajax = axios
Vue.prototype.dd = window.dd
FastClick.attach(document.body)

// 全局filter
Vue.filter('selectTypes', function (val, name) {
  var json = {
    CorpType: ['客户', '渠道商'],
    Grade: ['一般', '重要', '核心'],
    CorpNature: ['终端企业', '中介', '银行'],
    GetWay: ['陌拜', '转介绍', '电销', '微信', 'QQ', '其他'],
    Status: ['审核中', '审核通过', '审核失败'],
    OfferType: ['利率', '十万']
  }
  return json[name][val - 1]
})
Vue.filter('trim', function (val) {
  return val.trim()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
