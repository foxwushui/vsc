<template>
  <div class="wraper my_list">
    <div class="my_list_t am-g">
      <div class="am-u-sm-6 active">进票列表</div>
      <div class="am-u-sm-6">我的出票</div>
    </div>
    <div class="my_list_c">
      <div class="list am-container">
        <h6>上海某实打实大苏打扩大</h6>
        <dl>
          <dt>打款信息：</dt>
          <dd>啊是多久哦欸是几代基带送大神解答四代机阿斯顿啊实打实地阿斯顿叫阿三 </dd>
        </dl>
        <dl>
          <dt>买断金额：</dt>
          <dd>20000元 </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
    }
  },
  computed: {
    userData () {
      return this.$store.state.user.data
    }
  },
  methods: {
    ddReady () {
      this.dd.biz.navigation.setRight({
        show: false
      })
      this.dd.biz.navigation.setTitle({
        title: '出票业务'
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
.my_list_t{ line-height: 45px; text-align: center; background: #e1e1e1; margin-top: 10px; color: #666;}
.my_list_t .active{background: #fff; color: #ff5a09;}
.my_list_c{background: #fff;}
.my_list_c .list{ border-bottom: 1px solid #f1f1f1;}
.my_list_c h6{line-height: 60px; font-weight: normal; border-bottom: 1px dashed #f2f2f2;}
.my_list_c dt{float: left;}
</style>
