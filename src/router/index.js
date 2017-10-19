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
      component: Contacts,
      children: [
          // 客户列表
        {
          path: '',
          component: resolve => require(['../components/contacts/index.vue'], resolve)
        }
      ]
    },
    {
      path: '/Contacts',
      component: Contacts,
      children: [
          // 客户列表
        {
          path: '',
          component: resolve => require(['../components/contacts/index.vue'], resolve)
        },
          // 添加客户
        {
          path: 'add',
          component: resolve => require(['../components/contacts/add.vue'], resolve)
        },
        {
          // 客户详细
          path: 'detail',
          component: resolve => require(['../components/contacts/detail.vue'], resolve)
        },
        {
          // 编辑客户
          path: 'up',
          component: resolve => require(['../components/contacts/up.vue'], resolve)
        }
      ]
    },
    {
      // 业务
      path: '/Business',
      component: Business,
      children: [
        {
          // 业务
          path: '',
          component: resolve => require(['../components/business/index.vue'], resolve)
        },
        {
          // 添加业务
          path: 'add',
          component: resolve => require(['../components/business/add.vue'], resolve)
        },
        {
          // 业务详细
          path: 'detail',
          component: resolve => require(['../components/business/detail.vue'], resolve)
        }
      ]
    },
    {
      // 个人信息
      path: '/info',
      component: Info,
      children: [
        {
          path: '',
          component: resolve => require(['../components/info/index.vue'], resolve)
        },
        {
          path: 'list',
          component: resolve => require(['../components/info/list.vue'], resolve)
        }
      ]
    },
    {
      // 其他页面
      path: '/other',
      component: Other,
      children: [
        // 选择银行
        {
          path: 'choseBank',
          component: resolve => require(['../components/other/choseBank.vue'], resolve)
        },
        // 选择账号
        {
          path: 'choseContact',
          component: resolve => require(['../components/other/choseContact.vue'], resolve)
        },
        // 添加账号
        {
          path: 'addAccount',
          component: resolve => require(['../components/other/addAccount.vue'], resolve)
        }
      ]
    }
  ]
})
