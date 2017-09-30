import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/components/Contacts'
import addContacts from '@/components/addContacts'
import upContacts from '@/components/upContacts'
import contactsDetail from '@/components/contactsDetail'
import Business from '@/components/Business'
import addBusiness from '@/components/addBusiness'
import businessDetail from '@/components/businessDetail'
import Info from '@/components/Info'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // 默认客户列表
      path: '/',
      name: 'Contacts',
      component: Contacts
    },
    {
      // 添加客户
      path: '/addContacts',
      name: 'addContacts',
      component: addContacts
    },
    {
      // 客户详细
      path: '/contactsDetail',
      name: 'contactsDetail',
      component: contactsDetail
    },
    {
      // 编辑客户
      path: '/upContacts',
      name: 'upContacts',
      component: upContacts
    },
    {
      // 业务
      path: '/Business',
      name: 'Business',
      component: Business
    },
    {
      // 添加业务
      path: '/addBusiness',
      name: 'addBusiness',
      component: addBusiness
    },
    {
      // 业务详细
      path: '/businessDetail',
      name: 'businessDetail',
      component: businessDetail
    },
    {
      // 个人信息
      path: '/Info',
      name: 'Info',
      component: Info
    }
  ]
})
