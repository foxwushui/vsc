export default {
  state: {
    show: false
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
