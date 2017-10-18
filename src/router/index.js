import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/components/Contacts'
import Business from '@/components/Business'
import Info from '@/components/info'
import Other from '@/components/other'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // 默认客户列表
      path: '/',
      name: 'Contacts',
      component: Contacts,
      children: [
          // 客户列表
        {
          path: '',
          name: 'contacts',
          component: resolve => require(['../components/contacts/index.vue'], resolve)
        }
      ]
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts,
      children: [
          // 客户列表
        {
          path: '',
          name: 'contacts',
          component: resolve => require(['../components/contacts/index.vue'], resolve)
        },
          // 添加客户
        {
          path: 'add',
          name: 'addContacts',
          component: resolve => require(['../components/contacts/add.vue'], resolve)
        },
        {
          // 客户详细
          path: 'detail',
          name: 'contactsDetail',
          component: resolve => require(['../components/contacts/detail.vue'], resolve)
        },
        {
          // 编辑客户
          path: 'up',
          name: 'upContacts',
          component: resolve => require(['../components/contacts/up.vue'], resolve)
        }
      ]
    },
    {
      // 业务
      path: '/Business',
      name: 'Business',
      component: Business,
      children: [
        {
          // 业务
          path: '',
          name: 'business',
          component: resolve => require(['../components/business/index.vue'], resolve)
        },
        {
          // 添加业务
          path: 'add',
          name: 'addBusiness',
          component: resolve => require(['../components/business/add.vue'], resolve)
        },
        {
          // 业务详细
          path: 'detail',
          name: 'businessDetail',
          component: resolve => require(['../components/business/detail.vue'], resolve)
        }
      ]
    },
    {
      // 个人信息
      path: '/info',
      name: 'info',
      component: Info,
      children: [
        {
          path: '',
          name: 'infoIndex',
          component: resolve => require(['../components/info/index.vue'], resolve)
        },
        {
          path: 'businessDraft',
          name: 'businessDraft',
          component: resolve => require(['../components/info/businessDraft.vue'], resolve)
        }
      ]
    },
    {
      // 其他页面
      path: '/other',
      name: 'other',
      component: Other,
      children: [
        // 选择银行
        {
          path: 'choseBank',
          name: 'choseBank',
          component: resolve => require(['../components/other/choseBank.vue'], resolve)
        },
        // 选择账号
        {
          path: 'choseContact',
          name: 'choseContact',
          component: resolve => require(['../components/other/choseContact.vue'], resolve)
        },
        // 添加账号
        {
          path: 'addAccount',
          name: 'addAccount',
          component: resolve => require(['../components/other/addAccount.vue'], resolve)
        }
      ]
    }
  ]
})
