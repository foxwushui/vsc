export default {
  state: {
    show: true,
    _config: {
      name: '1'
    }
  },
  mutations: {
    switch_child (state) {
      state.show = !state.show
    }
  },
  actions: {
    switch_child (context) {
      context.commit('switch_child')
    }
  }
}
