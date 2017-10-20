<template>  
  <div class="info wraper_b">
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
      <div class="con am-container" v-for="item of menu" :key="item.Id">
        <router-link :to="item.Url.trim()">
          <div class="info_list_l left">
            <i class="am-icon-folder-open"></i>{{item.MenuName}}</div>
          <div class="info_list_r right"><i class="am-icon-angle-right right"></i></div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      msg: {},
      menu: []
    }
  },
  computed: {
    userDate () {
      return this.$store.state.user.data
    }
  },
  methods: {
    getCont () {
      this.$ajax.get('/api/SalesOrderCorp/GetInAndOutCount', {
        params: {
          userid: this.userDate.Id
        }
      }).then(res => {
        this.msg = res.data.Message[0]
      })
    },
    getMenu () {
      this.$ajax.get('/api/user/GetMenus', {
        params: {
          userid: this.userDate.Id
        }
      }).then(res => {
        this.menu = res.data.Message
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
      this.getMenu()
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
