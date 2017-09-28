<<template>
  <div class="business">
      业务页23dsadas
  </div>
</template>

<script>
export default {
  name: 'business',
  data () {
    return {}
  },
  created () {
    // 显示tabbar
    this.$store.state.tabbar = {
      show: true,
      tabIndex: 1
    }
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
