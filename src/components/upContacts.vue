<template>
  <div class="addContacts">
    <form class="am-form am-form-horizontal" @submit.prevent="update">
      <div class="am-form-group  am-container">
        <label for="name" class="am-u-sm-2 am-form-label">姓名<span>*</span></label>
        <div class="am-u-sm-10">
          <input type="text" id="name" placeholder="输入联系人姓名（必填）" v-model="msg.LinkMan" required>
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="tel" class="am-u-sm-2 am-form-label">电话<span>*</span></label>
        <div class="am-u-sm-10">
          <input type="tel" id="tel" placeholder="请输入手机号或固定号码（必填）" v-model="msg.Mobile" required>
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-2 am-form-label">公司<span>*</span></label>
        <div class="am-u-sm-10">
          <input type="text" id="" placeholder="必填" v-model="msg.CorpName" required>
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-2 am-form-label">职位</label>
        <div class="am-u-sm-10">
          <input type="text" id="" placeholder="选填" v-model="msg.Position">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-2 am-form-label">地址</label>
        <div class="am-u-sm-10">
          <input type="text" id="" placeholder="选填" v-model="msg.Address">
        </div>
      </div>

      <br/>
      
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">企业性质</label>
        <div class="am-u-sm-9">
          <select name="" id="" v-model="msg.CorpNature" required>
            <option value="0" disabled="true" selected="selected" class="dispaly-none">选择性质</option>
            <option value="1">终端企业</option>
            <option value="2">中介</option>
            <option value="3">银行</option>
          </select>
        </div>
      </div>
      
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">类型</label>
        <div class="am-u-sm-9">
          <select name="" id="" v-model="msg.CorpType" required>
            <option value="0" disabled="true" selected="selected" class="dispaly-none">选择类型</option>
            <option value="1">客户</option>
            <option value="2">渠道商</option>
          </select>
        </div>
      </div>

      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">获取方式</label>
        <div class="am-u-sm-9">
          <select name="" id="" v-model="msg.GetWay" required>
            <option value="0" disabled="true" selected="selected" class="dispaly-none">选择方式</option>
            <option value="1">陌拜</option>
            <option value="2">转介绍</option>
            <option value="3">电销</option>
            <option value="4">微信</option>
            <option value="5">QQ</option>
            <option value="6">其他</option>
          </select>
        </div>
      </div>

      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">级别</label>
        <div class="am-u-sm-9">
          <select name="" id="" v-model="msg.Grade" required>
            <option value="0" disabled="true" selected="selected" class="dispaly-none">选择级别</option>
            <option value="1">一般</option>
            <option value="2">重要</option>
            <option value="3">核心</option>
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
  name: 'addContacts',
  data () {
    return {}
  },
  computed: {
    msg () {
      return this.$store.state.user.contacts
    }
  },
  methods: {
    update () {
      this.msg.OwnUserId = this.$store.state.user.data.Id
      this.$ajax.post('/api/Customers/Update', this.msg).then(res => {
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
        title: '编辑客户'
      })
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
.addContacts .am-form{overflow: auto; position: absolute; left: 0; right: 0; top:10px; bottom: 0;}
.addContacts .am-form-group{background: #fff; line-height: 45px; margin-bottom: 0;border-bottom: 1px solid #f1f1f1;}
.addContacts .am-form-group.noBg{background: none;}
.addContacts .am-form-group input{border: none; margin-top: 5px; text-align: right;}
.addContacts .am-form-group label{padding: 0;}
.addContacts .am-form-group label span{color: #ff5a09;margin-left: 5px;}
.addContacts .am-form-group select{width: 100px;float: right;margin-top: 5px;border: none; text-align: right;}
.addContacts .am-form-group option{text-align: right;}
.addContacts .am-form-group .sub{width: 60%;margin: 20px auto 30px;text-align: center; line-height: 45px;background: #ff5a09;color: #fff;border-radius: 4px;font-size: 20px;display: block;}
</style>
