<template>
  <div class="chose">
    <!-- 选择银行账户 -->
   <div v-for="(item,index) of TradeCompanyList" :key="item.Id"  @click="chose_click(item.AccountBank)">
     <div class="item">
       <div class="top">
             <p>
                <span class="content">{{item.AccountBank}}</span>
                <span class="title">账户详情</span>
             </p>
        </div>
     </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'chose',
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
        alert(window.JSON.stringify(res.data.Message))
        this.TradeCompanyList = res.data.Message
      })
    },
    addAccount () {
      this.$router.push({path: '/addAccount', query: {id: this.cid}})
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

<style>
.chose{background: #f5f4f9;padding:10px;}
.chose .item {background-color: #FFFFFF; padding:10px; border-radius: 10px;}
.chose .top{background: url(../assets/imgs/logo.png) no-repeat 10px 0px;border-bottom: 1px dashed #9e9e9e;}
.chose .item .top p{margin:0;padding-left: 60px;}
.chose .item .top span{display:block;}
.chose .item .top .content{font-size: 18px; font-weight: bold; color:#696969;}
.chose .item .top .title{color:#9e9e9e;font-size:14px;}
.chose .bottom .title{color:#9e9e9e;font-size:14px;}
.chose .bottom .content{color:#696969;font-size:14px;padding-left: 20px;}
</style>
