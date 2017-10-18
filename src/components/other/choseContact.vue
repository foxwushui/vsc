<template>
  <div class="choseContact wraper" ref="viewBox_cc">
    <!-- 选择银行账户 -->
    <div class="cells">
      <div class="am-container cell" v-for="(item,index) of CorpList" :key="item.Id"  @click="chose_click(item.Id)">
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
  </div>  
</template>

<script>
export default {
  name: 'choseContact',
  data () {
    return {
      CorpList: []
    }
  },
  computed: {
    userId () {
      return this.$store.state.user.data.Id
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
  methods: {
    chose_click (id) {
      this.$store.state.user.chose.CorpId = id
      for (let i = 0; i < this.CorpList.length; i++) {
        if (this.CorpList[i].Id === id) {
          this.$store.state.user.chose.CorpName = this.CorpList[i].CorpName
        }
      }
      this.$store.state.user.chose.AccountName = ''
      this.$store.state.user.chose.AccountNo = ''
      this.$store.state.user.chose.AccountBank = ''
      this.$router.go(-1)
    },
    getTradeCompany () {
      this.$ajax.get('/api/Customers/GetList', {
        params: this.msg
      }).then(res => {
        this.msg.maxpageIndex = Math.ceil(res.data.Message.Total / this.msg.PageSize)
        this.CorpList = this.CorpList.concat(res.data.Message.CustomersList)
      })
    },
    ddReady () {
      // dd相关
      this.dd.biz.navigation.setRight({
        show: false
      })
      this.dd.biz.navigation.setTitle({
        title: '选择贴现公司'
      })
      this.getTradeCompany()
    },
    handlescroll () {
      var maxHeight = this.box.scrollHeight - document.body.clientHeight
      if ((maxHeight - this.box.scrollTop) <= 10) {
        if (this.msg.PageIndex >= this.msg.maxpageIndex) {
          return
        }
        // 加载下一页
        this.msg.PageIndex++
        this.getTradeCompany()
      }
    }
  },
  mounted () {
    this.box = this.$refs.viewBox_cc
    this.box.addEventListener('scroll', this.handlescroll)
  },
  created () {
    this.ddReady()
  }
}
</script>
