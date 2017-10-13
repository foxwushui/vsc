<template>
  <div class="business wraper_b" ref="viewBox">
     <div class="am-container" v-for="(item,index) of lists" :key="item.Id"  @click="cellClick(item.MainId)">
        <h6>{{item.CorpName}}<span><i></i>{{item.Status | selectTypes('Status')}}</span></h6>
        <!-- <p>打款名称：{{item.TradeCorp}}</p>
        <p>打款账号：{{item.BankAcount}}</p> -->
        <p>账号信息：{{item.AccountBank}}</p>

        <p>买断金额：{{item.TotalAmount}}</p>
     </div>
    <div class="noMsg" v-if="!lists.length">
      <img src="../assets/imgs/nosearch.png" alt="">
      还没有审批
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
  computed: {
    msg () {
      return {
        CreateUserId: this.$store.state.user.data.Id,
        PageIndex: 1,
        PageSize: 10,
        maxpageIndex: 1
      }
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
        params: this.msg
      }).then(res => {
        this.msg.maxpageIndex = Math.ceil(res.data.Message.Total / this.msg.PageSize)
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
    },
    handlescroll () {
      var maxHeight = this.box.scrollHeight - document.body.clientHeight + 58
      if ((maxHeight - this.box.scrollTop) <= 10) {
        console.log(this.msg.PageIndex, this.msg.maxpageIndex)
        if (this.msg.PageIndex >= this.msg.maxpageIndex) {
          return
        }
        // 加载下一页
        this.msg.PageIndex++
        this.getList()
      }
    }
  },
  mounted () {
    this.box = this.$refs.viewBox
    this.box.addEventListener('scroll', this.handlescroll)
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
