import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

import childStore from './modules/child_store.js'
import tabbaStore from './modules/tabbar_store.js'

export default new vuex.Store({
  modules: {
    child: childStore,
    tabbar: tabbaStore
  }
})
