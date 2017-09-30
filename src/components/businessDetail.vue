<template>
  <div class="businessDetail">
    <div class="am-container cont">
      <div class="title">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'businessDetail',
  data () {
    return {
      detail: {
        title: '上海赢大商家撒大苏打是'
      }
    }
  },
  computed: {
    id () {
      return this.$route.query.id
    }
  },
  methods: {
    getDetail () {
      // alert(this.id)
    },
    // 设置DD相关
    ddready () {
      this.dd.biz.navigation.setRight({
        show: false
      })
      this.dd.biz.navigation.setTitle({
        title: '审核详情'
      })
    }
  },
  created () {
    this.$store.state.tabbar.show = false
    this.getDetail()
    this.ddready()
  }
}
</script>

<style>

</style>
