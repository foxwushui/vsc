<template>
  <div class="addBusiness">
    <form class="am-form am-form-horizontal" @submit.prevent="add">
      <div class="am-form-group  am-container">
        <label for="name" class="am-u-sm-3 am-form-label">贴现公司<span>*</span></label>
        <div class="am-u-sm-9">
          <input type="text" id="name" placeholder="输入联系人姓名（必填）" v-model="msg.LinkMan">
        </div>
      </div>
      <div class="am-form-group am-container" @click="chose()">
        <label for="tel" class="am-u-sm-3 am-form-label">账户名称<span>*</span></label>
        <div class="am-u-sm-9">
          <p>{{msg.LinkMan}}</p>
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">公司<span>*</span></label>
        <div class="am-u-sm-9">
          <input type="text" id="" placeholder="必填" v-model="msg.CorpName">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">职位</label>
        <div class="am-u-sm-9">
          <input type="text" id="" placeholder="选填" v-model="msg.Position">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">地址</label>
        <div class="am-u-sm-9">
          <input type="text" id="" placeholder="选填" v-model="msg.Address">
        </div>
      </div>

      <br/>
      
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">企业性质</label>
        <div class="am-u-sm-9">
          <select name="" id="" v-model="msg.CorpNature">
            <option value="0" disabled="true" selected="selected" class="dispaly-none">选择性质</option>
            <option value="1">终端企业</option>
            <option value="2">中介</option>
            <option value="3">银行</option>
          </select>
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
  name: 'addBusiness',
  data () {
    return {
      msg: {
        LinkMan: ''
      }
    }
  },
  computed: {
    chose_msg () {
      return this.$store.state.user.chose
    }
  },
  methods: {
    chose () {
      this.$router.push({path: '/chose'})
    },
    choseEd () {
      this.msg.LinkMan = this.chose_msg
    },
    add () {
      this.msg.OwnUserId = this.$store.state.user.data.Id
      alert(window.JSON.stringify(this.msg))
      this.$ajax.post('/api/SalesOrderCorp/add', this.msg).then(res => {
        if (res.data.RetCode === '10000') {
          this.$router.push({path: '/'})
        }
      })
    },
    ddReady () {
      this.dd.biz.navigation.setRight({
        show: false
      })
      this.dd.biz.navigation.setTitle({
        title: '提交审批'
      })
      this.choseEd()
    }
  },
  created () {
    // 隐藏tabbar
    this.$store.state.tabbar.show = false
    // 设置钉钉相关内容
    this.ddReady()
  }
}
</script>

<style>
label{font-weight: normal;}
.dispaly-none{display: none;}
.addBusiness .am-form{overflow: auto; position: absolute; left: 0; right: 0; top:10px; bottom: 0;}
.addBusiness .am-form-group{background: #fff; line-height: 45px; margin-bottom: 0;border-bottom: 1px solid #f1f1f1;}
.addBusiness .am-form-group.noBg{background: none;}
.addBusiness .am-form-group input{border: none; margin-top: 5px; text-align: right;}
.addBusiness .am-form-group label{padding: 0;}
.addBusiness .am-form-group label span{color: #ff5a09;margin-left: 5px;}
.addBusiness .am-form-group select{width: 100px;float: right;margin-top: 5px;border: none; text-align: right;}
.addBusiness .am-form-group option{text-align: right;}
.addBusiness .am-form-group .sub{width: 60%;margin: 20px auto 30px;text-align: center; line-height: 45px;background: #ff5a09;color: #fff;border-radius: 4px;font-size: 20px;display: block;}
</style>
