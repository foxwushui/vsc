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
  created () {
    // 隐藏tabbar
    this.$store.state.tabbar.show = false
    // 设置钉钉相关内容
    this.dd.ready(() => {
      this.dd.biz.navigation.setRight({
        show: false
      })
      this.dd.biz.navigation.setTitle({
        title: '业务相关'
      })
    })
  }
}
</script>

<style>

</style>
