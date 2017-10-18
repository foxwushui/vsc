<template>
  <div class="chose wraper">
    <!-- 选择银行账户 -->
    <div v-for="(item,index) of TradeCompanyList" :key="item.Id" @click="chose_click(item.AccountBank)" class="am-container cell">
      <div class="cell-icon am-fl"><img src="../../assets/imgs/logo.png" width="45" /></div>
      <div class="cell-cont am-fl">
        <div class="cell-title">账户信息</div>
        <div class="cell-tips">
          <textarea v-html="item.AccountBank" readonly rows="5" class="showtext"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'choseBank',
  data () {
    return {
      TradeCompanyList: {}
    }
  },
  computed: {
    cid () {
      return this.$route.query.id
    }
  },
  methods: {
    chose_click (str) {
      this.$store.state.user.chose.CorpId = this.cid
      this.$store.state.user.chose.AccountBank = str
      this.$router.go(-1)
    },
    getTradeCompany () {
      // 获取交易公司详细信息
      this.$ajax.get('/api/TradeCompany/GetListByCId', {
        params: {
          cid: this.cid
        }
      }).then(res => {
        this.TradeCompanyList = res.data.Message
      })
    },
    addAccount () {
      this.$router.push({path: '/other/addAccount', query: {id: this.cid}})
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
          this.addAccount()
        },
        onFail: function (err) {
          console.log(err)
        }
      })
      this.dd.biz.navigation.setTitle({
        title: '选择账户'
      })
      this.getTradeCompany()
    }
  },
  created () {
    this.ddReady()
  }
}
</script>
