<template>
  <div class="addBusiness">
    添加业务
    </div>
</template>

<script>
export default {
  name: 'addBusiness',
  data () {
    return {}
  },
  methods: {
    ddReady () {
      this.dd.biz.navigation.setRight({
        show: false
      })
      this.dd.biz.navigation.setTitle({
        title: '业务相关'
      })
    }
  },
  created () {
    this.$store.state.tabbar.show = false
    this.ddReady()
  }
}
</script>

<style>

</style>
