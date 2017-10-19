<template>  
  <div class="info wraper_b">
    <h4>我的</h4>

    <div class="info_top am-container">
      <div class="info_tl left">
        <img src="../../assets/imgs/logo.png" width="45" />
        <span>{{userDate.RealName}}</span>
      </div>
      <div class="info_tr right"><i class="am-icon-angle-right right for_select"></i></div>
    </div>

    <div class="info_cont am-g">
      <div class="am-u-sm-6">
        <p>{{msg.incount}}<span>张</span></p>
        <span>今日进票</span>
      </div>
      <div class="am-u-sm-6">
        <p>{{msg.outcount}}<span>张</span></p>
        <span>本月进票</span>
      </div>
    </div>

    <div class="info_list">
      <div class="con am-container" @click="infoClick">
        <div class="info_list_l left">出票业务</div>
        <div class="info_list_r right"><i class="am-icon-angle-right right"></i></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      msg: {}
    }
  },
  computed: {
    userDate () {
      return this.$store.state.user.data
    }
  },
  methods: {
    infoClick () {
      this.$router.push({path: '/info/list'})
    },
    getCont () {
      this.$ajax.get('/api/SalesOrderCorp/GetInAndOutCount', {
        params: {
          userid: this.userDate.Id
        }
      }).then(res => {
        this.msg = res.data.Message[0]
      })
    },
    ddReady () {
      this.dd.biz.navigation.setRight({
        show: false
      })
      this.dd.biz.navigation.setTitle({
        title: '我的'
      })
      this.getCont()
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

<style>

</style>
