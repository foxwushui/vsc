import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Menu from '@/components/Menu'
import addContacts from '@/components/addContacts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/addContacts',
      name: 'addContacts',
      component: addContacts
    }
  ]
})
