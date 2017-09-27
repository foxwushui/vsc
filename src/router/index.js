import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/components/Contacts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // 默认客户页面
      path: '/',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
