<template>
  <div class="business">
     <div class="am-container" v-for="(item,index) of lists" :key="item.Id"  @click="cellClick(item.Id)">
        <h6>{{item.CorpName}}<span><i></i>{{item.Status | selectTypes('Status')}}</span></h6>
        <p>打款名称：{{item.TradeCorp}}</p>
        <p>打款账号：{{item.BankAcount}}</p>
        <p>打款开户行：{{item.AccountBank}}</p>
        <p>买断金额：{{item.TotalAmount}}</p>
     </div>
  </div>
</template>

<script>
export default {
  name: 'business',
  data () {
    return {
      lists: []
    }
  },
  methods: {
    addContacts () {
      // 添加审批
      this.$router.push({path: '/addBusiness'})
    },
    cellClick (id) {
      // 审批详细
      this.$router.push({path: '/businessDetail', query: {id: id}})
    },
    getList () {
      this.$ajax.get('/api/SalesOrderCorp/GetList', {
        params: {
          CreateUserId: this.$store.state.user.data.Id,
          PageIndex: 1
        }
      }).then(res => {
        this.lists = this.lists.concat(res.data.Message.SalesOrderCorpList)
      })
    },
    ddReady () {
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
          this.addContacts()
        },
        onFail: function (err) {
          console.log(err)
        }
      })
      this.dd.biz.navigation.setTitle({
        title: '审核管理'
      })
      this.getList()
    }
  },
  created () {
    // 显示tabbar
    this.$store.state.tabbar = {
      show: true,
      tabIndex: 1
    }
    this.ddReady()
  }
}
</script>

<style>
.business{position:absolute;left: 0; right: 0;top: 0;bottom: 77px; overflow: auto;}
.business .am-container{margin-top: 10px; background: #fff; padding-top: 10px;padding-bottom: 10px;}
.business h6{font-weight: normal;font-size: 2rem; line-height: 1.6;}
.business h6 span{font-size: 1.2rem; vertical-align: middle; border:1px solid #999; border-radius: 4px; padding: 2px 8px; margin-left: 10px; color: #999;}
.business p{margin: .3rem 0;font-size: 1.4rem; color: #666}
</style>
