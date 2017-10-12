<template>
  <div class="choseContact">
    <!-- 选择银行账户 -->
    <div class="cells">
      <div class="am-container cell" v-for="(item,index) of CorpList" :key="item.Id"  @click="chose_click(item.Id)">
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
  name: 'choseContact',
  data () {
    return {
      CorpList: []
    }
  },
  computed: {
    userId () {
      return this.$store.state.user.data.Id
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
        params: {
          OwnUserId: this.userId,
          PageIndex: 1,
          PageSize: 100
        }
      }).then(res => {
        this.CorpList = res.data.Message.CustomersList
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
    }
  },
  created () {
    this.ddReady()
  }
}
</script>
