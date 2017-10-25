<template>
  <div class='contacts wraper_b' ref="viewBox_c">
    <!-- <div class="am-g tabs">
      <div class="am-u-sm-6 tab" v-for="(item,index) of tab" :key="item.id" @click="tabClick(index)" :class="{active: index==tabIndex}">{{item.text}}</div>
    </div> -->
    <div class="cells" v-if="lists.length">
      <div class="am-container cell" v-for="(item,index) of lists" :key="item.Id"  @click="cellClick(item.Id)">
        <div class="cell-icon am-fl"><img src="../../assets/imgs/logo.png" width="45" /></div>
        <div class="cell-cont am-fl">
          <div class="cell-title">{{item.CorpName}}</div>
          <div class="cell-tips">
            <span>姓名：{{item.LinkMan}}</span>
            <span>电话：{{item.Mobile}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="noMsg" v-if="!lists.length">
      <img src="../../assets/imgs/nosearch.png" alt="">
      还没有外部联系人
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
      this.$router.push({path: '/contacts/add'})
    },
    tabClick (index) {
    // 切换列表
      this.tabIndex = index
    },
    // 查看详细
    cellClick (id) {
      this.$router.push({path: '/contacts/detail', query: {id: id}})
    },
    getList () {
      this.$ajax.get('/api/Customers/GetList', {
        params: this.msg
      }).then(res => {
        this.msg.maxpageIndex = Math.ceil(res.data.Message.Total / this.msg.PageSize)
        this.lists = this.lists.concat(res.data.Message.CustomersList)
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
      // 加载完成
    },
    handlescroll () {
      var maxHeight = this.box.scrollHeight - document.body.clientHeight + 58
      if ((maxHeight - this.box.scrollTop) <= 10) {
        if (this.msg.PageIndex >= this.msg.maxpageIndex) {
          return
        }
        // 加载下一页
        this.msg.PageIndex++
        this.getList()
      }
    }
  },
  computed: {
    isReady () {
      return this.$store.state.user.isReady
    },
    msg () {
      return {
        OwnUserId: this.$store.state.user.data.Id,
        PageIndex: 1,
        PageSize: 10,
        maxpageIndex: 1
      }
    }
  },
  mounted () {
    this.box = this.$refs.viewBox_c
    this.box.addEventListener('scroll', this.handlescroll)
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
      // this.$ajax.get('/api/user/GetDDingConfig', {
      //   params: {
      //     url: location.href
      //   }
      // }).then(res => {
      //   let dataCfg = res.data.Message
      //   var data = {
      //     agentId: dataCfg.AgentId,
      //     corpId: dataCfg.CorpId,
      //     timeStamp: dataCfg.TimeStamp,
      //     nonceStr: dataCfg.NonceStr,
      //     signature: dataCfg.Signature,
      //     type: 0,
      //     jsApiList: ['runtime.info', 'biz.telephone.showCallMenu']
      //   }
      //   this.dd.config(data)
      // }).then(() => {
        // 入口页 免登陆
      this.dd.ready(() => {
        this.$store.state.user.isReady = true
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
            }).catch(err => {
              console.log(err)
              this.dd.device.notification.alert({
                message: '用户不存在',
                title: '提示',
                buttonName: '收到',
                onSuccess: res => {
                  this.dd.biz.navigation.close()
                },
                onFail: function (err) {
                  console.log(err)
                }
              })
            })
          }
        })
      })
      this.dd.error(err => {
        alert(window.JSON.stringify(err))
      })
      // })
    }
  }
}
</script>