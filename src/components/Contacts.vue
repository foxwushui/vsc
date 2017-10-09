<template>
  <div class='contacts'>
    <div class="am-g tabs">
      <div class="am-u-sm-6 tab" v-for="(item,index) of tab" :key="item.id" @click="tabClick(index)" :class="{active: index==tabIndex}">{{item.text}}</div>
    </div>
    <div class="cells">
      <div class="am-container cell" v-for="(item,index) of lists" :key="item.Id"  @click="cellClick(item.Id)">
        <div class="cell-icon am-fl"><img src="../assets/imgs/logo.png" width="45" /></div>
        <div class="cell-cont am-fl">
          <div class="cell-title">{{item.CorpName}}</div>
          <div class="cell-tips">
            <span>姓名：{{item.LinkMan}}</span>
            <span>电话：{{item.Mobile}}</span>
          </div>
        </div>
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
      tabIndex: 0,
      lists: []
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
    // 查看详细
    cellClick (id) {
      this.$router.push({path: '/contactsDetail', query: {id: id}})
    },
    getList () {
      this.$ajax.get('/api/Customers/GetList', {
        params: {
          OwnUserId: this.$store.state.user.data.Id,
          PageIndex: 1,
          PageSize: 10
        }
      }).then(res => {
        this.lists = this.lists.concat(res.data.Message.CustomersList)
        // 加载完成
        this.dd.device.notification.hidePreloader()
      })
    },
    ddReady () {
      // dd相关
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
      this.getList()
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
        params: {
          url: 'http://192.168.1.210:8080/'
        }
      }).then(res => {
        var data = {
          agentId: res.data.AgentId,
          corpId: res.data.CorpId,
          timeStamp: res.data.TimeStamp,
          nonceStr: res.data.NonceStr,
          signature: res.data.Signature,
          type: 0,
          jsApiList: ['runtime.info', 'biz.telephone.showCallMenu']
        }
        this.dd.config(data)
      }).then(() => {
        // 入口页 免登陆
        this.dd.ready(() => {
          this.$store.state.user.isReady = true
          // 显示加载中
          this.dd.device.notification.showPreloader()
          this.dd.runtime.permission.requestAuthCode({
            corpId: 'dingf53c8d834194138b35c2f4657eb6378f',
            onSuccess: res => {
              this.$ajax.get('/api/User/GetUserInfo', {
                params: {
                  code: res.code
                }
              }).then(res => {
                // 保存用户信息
                this.$store.state.user.data = res.data.Message
                this.ddReady()
              })
            }
          })
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
.contacts .tabs{background: #fff;height: 60px;text-align: center;color: #999;border-bottom:1px solid #d8d8d8;}
.contacts .tab{line-height: 58px; cursor: pointer;}
.contacts .tab.active{border-bottom:2px solid #ff5a09; color: #ff5a09;}
.contacts .cells{ border-top: 1px solid #f6f6f6; position: absolute; left: 0; right: 0; top: 60px; bottom: 64px; overflow: auto;}
.contacts .cell{background: #fff;padding: 10px; border-bottom: 1px solid #f6f6f6;}
.contacts .cell-icon{border-radius: 50%; color: #fff;width: 50px;height: 50px; line-height:50px; text-align: center;}
.contacts .cell-cont{padding-left: 10px;}
.contacts .cell-tips{font-size: 12px;}
.contacts .cell-tips span{padding:2px 5px;margin-right: 2px;}
.contacts .cell-more{font-size: 12px;color: #d2d2d2;}
</style>
