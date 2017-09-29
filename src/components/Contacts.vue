<template>
  <div class='contacts'>
    <div class="am-g tabs">
      <div class="am-u-sm-6 tab" v-for="(item,index) of tab" :key="item.id" @click="tabClick(index)" :class="{active: index==tabIndex}">{{item.text}}</div>
    </div>
    <div class="cells">
      <div class="am-container cell">
        <div class="cell-icon am-fl">小妹</div>
        <div class="cell-cont am-fl">
          <div class="cell-title">樊小妹</div>
          <div class="cell-tips">
            <span>一般</span>
            <span>潜在</span>
            <span>其他类型</span>
          </div>
        </div>
          <div class="cell-more am-fr">张大大负责</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contacts',
  data () {
    return {
      tab: [{
        text: '我负责的'
      },
      {
        text: '我下属的'
      }],
      tabIndex: 0
    }
  },
  methods: {
    addContact () {
      // 添加联系人
      this.$router.push({path: '/addContacts'})
    },
    tabClick (index) {
      // 切换列表
      this.tabIndex = index
    },
    ddReady () {
      // 默认添加联系人页面相关
      this.dd.biz.navigation.setMenu({
        backgroundColor: '#ADD8E6',
        textColor: '#ADD8E611',
        items: [
          {
            'id': '1',
            'iconId': 'add',
            'text': '添加'
          }
        ],
        onSuccess: data => {
          this.addContact()
        },
        onFail: function (err) {
          console.log(err)
        }
      })
      this.dd.biz.navigation.setTitle({
        title: '外部联系人'
      })
    }
  },
  computed: {
    isReady () {
      return this.$store.state.user.isReady
    }
  },
  created () {
    // 显示tabbar
    this.$store.state.tabbar = {
      show: true,
      tabIndex: 0
    }
    if (this.isReady) {
      this.ddReady()
    } else {
      // 首次进入应用
      this.$ajax.get('/api/user/GetDDingConfig', {
        url: 'http://192.168.1.210:8080/'
      }).then(res => {
        // var data = {
        //   agentId: res.data.AgentId,
        //   corpId: res.data.CorpId,
        //   timeStamp: res.data.TimeStamp,
        //   nonceStr: res.data.NonceStr,
        //   signature: res.data.Signature,
        //   type: 0,
        //   jsApiList: ['runtime.info']
        // }
        // this.dd.config(data)
      }).then(() => {
        // 入口页 免登陆
        this.dd.ready(() => {
          this.$store.state.user.isReady = true
          this.dd.runtime.permission.requestAuthCode({
            corpId: 'dingf53c8d834194138b35c2f4657eb6378f',
            onSuccess: res => {
              this.$ajax.get('/api/User/GetUserInfo', {
                code: res.code
              }).then(res => {
                // 保存用户信息
                this.$store.state.user.data = res.data.Message
              })
            }
          })
          this.ddReady()
        })
        this.dd.error(err => {
          alert(window.JSON.stringify(err))
        })
      })
    }
  }
}
</script>
<style>
.tabs{background: #fff;height: 60px;text-align: center;color: #999;border-bottom:1px solid #d8d8d8;}
.tab{line-height: 58px;}
.tab.active{border-bottom:2px solid #ff5a09; color: #ff5a09;}
.cells{margin-top: 10px;}
.cell{background: #fff;padding: 10px;}
.cell-icon{background: #ff5a09;border-radius: 50%; color: #fff;width: 50px;height: 50px; line-height:50px; text-align: center;}
.cell-cont{padding-left: 10px;}
.cell-tips{font-size: 12px;}
.cell-tips span{padding:2px 5px;background: #d8d8d8;margin-right: 2px;color: #6f6f6f;}
.cell-more{font-size: 12px;color: #d2d2d2;}
</style>

