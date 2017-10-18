<template>
  <div class="addAccount">
    <form class="am-form am-form-horizontal" @submit.prevent="add">
       <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">账户信息</label>
        <div class="am-u-sm-9">
          <textarea name="AccountBank" id="" cols="30" rows="10" placeholder="账户信息"  v-model.trim="msg.AccountBank">

          </textarea>
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
      msg: {
        AccountBank: ''
      }
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
      let json = this.validate()
      if (!json.isValidata) {
        this.dd.device.notification.toast({
          icon: 'error',
          text: json.msg
        })
        return
      }
      this.$ajax.post('/api/TradeCompany/add', {
        cid: this.$route.query.id,
        AccountBank: this.msg.AccountBank
      }).then(res => {
        this.$router.go(-1)
      })
    },
    validate () {
      let json = {
        isValidata: false,
        msg: '输入错误'
      }
      if (!this.msg.AccountBank) {
        json.msg = '请输入账户信息'
        return json
      }
      json.isValidata = true
      return json
    }
  },
  created () {
    this.ddReady()
  }
}
</script>




