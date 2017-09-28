export default {
  state: {
    show: true,
    tabIndex: 0
  },
  mutations: {
    switch_tabbar (state) {
      state.show = !state.show
    }
  },
  actions: {
    switch_tabbar (context) {
      context.commit('switch_tabbar')
    }
  }
}
