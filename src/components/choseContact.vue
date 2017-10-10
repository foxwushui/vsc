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
      for (let i = 0;i < this.CorpList.length ; i++ ){
        if (this.CorpList[i].Id == id) {
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

<style>
.choseContact .tabs{background: #fff;height: 60px;text-align: center;color: #999;border-bottom:1px solid #d8d8d8;}
.choseContact .tab{line-height: 58px; cursor: pointer;}
.choseContact .tab.active{border-bottom:2px solid #ff5a09; color: #ff5a09;}
.choseContact .cells{ border-top: 1px solid #f6f6f6; position: absolute; left: 0; right: 0; top: 10px; bottom: 0px; overflow: auto;}
.choseContact .cell{background: #fff;padding: 10px; border-bottom: 1px solid #f6f6f6;}
.choseContact .cell-icon{border-radius: 50%; color: #fff;width: 50px;height: 50px; line-height:50px; text-align: center;}
.choseContact .cell-cont{padding-left: 10px;}
.choseContact .cell-tips{font-size: 12px;}
.choseContact .cell-tips span{padding:2px 5px;margin-right: 2px;}
.choseContact .cell-more{font-size: 12px;color: #d2d2d2;}
</style>
