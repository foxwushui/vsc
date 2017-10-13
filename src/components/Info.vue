<template>
  <div class="info wraper_b">      
    <div class="noMsg">
      <img src="../assets/imgs/my_kf.png" alt="">
    </div>
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
      this.dd.biz.navigation.setRight({
        show: false
      })
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

