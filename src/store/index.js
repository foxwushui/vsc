import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

import tabbaStore from './modules/tabbar_store.js'

export default new vuex.Store({
  modules: {
    tabbar: tabbaStore
  }
})
