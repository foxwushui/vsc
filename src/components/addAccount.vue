<template>
  <div class="addAccount">
    <form class="am-form am-form-horizontal" @submit.prevent="add">
       <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">开户行</label>
        <div class="am-u-sm-9">
          <input type="text" id="" placeholder="开户行" v-model="msg.AccountBank">
        </div>
      </div>
       <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">开户名</label>
        <div class="am-u-sm-9">
          <input type="text" id="" placeholder="开户名" v-model="msg.AccountName">
        </div>
      </div>
       <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">账号</label>
        <div class="am-u-sm-9">
          <input type="text" id="" placeholder="账号" v-model="msg.AccountNo">
        </div>
      </div>  
      <div class="am-form-group am-container noBg">
        <div class="am-u-sm-12 ">
          <input type="submit" value="确定" class="sub" >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addAccount',
  data () {
    return {
      msg: {}
    }
  },
  methods: {
    ddReady () {
      // dd相关
      this.dd.biz.navigation.setRight({
        show: false
      })
      this.dd.biz.navigation.setTitle({
        title: '添加账户'
      })
    },
    add () {
      this.$ajax.post('/api/TradeCompany/add', {
        cid: this.$route.query.id
      }).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    this.ddReady()
  }
}
</script>
