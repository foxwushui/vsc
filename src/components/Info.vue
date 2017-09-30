<template>
  <div class="info">
      信息页
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {}
  },
  methods: {
    ddReady () {
      this.dd.biz.navigation.setTitle({
        title: '我的'
      })
    }
  },
  created () {
    this.$store.state.tabbar = {
      show: true,
      tabIndex: 2
    }
    this.ddReady()
  }
}
</script>

<style scoped>
h1{color: red;}
</style>
