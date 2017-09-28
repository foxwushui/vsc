import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Index from '@/components/Index'
import Menu from '@/components/Menu'
import addContacts from '@/components/addContacts'
=======
import Contacts from '@/components/Contacts'
import addContacts from '@/components/addContacts'
import Business from '@/components/Business'
import addBusiness from '@/components/addBusiness'
import Info from '@/components/Info'
>>>>>>> c37b42436e774d3a76951c98cb7b56a131c7e0c1

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // 默认客户页面
      path: '/',
      name: 'Contacts',
      component: Contacts
    },
    {
<<<<<<< HEAD
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/addContacts',
      name: 'addContacts',
      component: addContacts
=======
      // 添加客户页面
      path: '/addContacts',
      name: 'addContacts',
      component: addContacts
    },
    {
      // 业务页面
      path: '/Business',
      name: 'Business',
      component: Business
    },
    {
      // 添加业务页面
      path: '/addBusiness',
      name: 'addBusiness',
      component: addBusiness
    },
    {
      // 个人信息
      path: '/Info',
      name: 'Info',
      component: Info
>>>>>>> c37b42436e774d3a76951c98cb7b56a131c7e0c1
    }
  ]
})
