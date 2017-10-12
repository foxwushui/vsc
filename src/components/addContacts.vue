<template>
  <div class="addContacts">
    <form class="am-form am-form-horizontal" @submit.prevent="add">
      <div class="am-form-group  am-container">
        <label for="name" class="am-u-sm-2 am-form-label">姓名<span>*</span></label>
        <div class="am-u-sm-10">
          <input type="text" id="name" placeholder="输入联系人姓名（必填）" v-model.trim="msg.LinkMan">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="tel" class="am-u-sm-2 am-form-label">电话<span>*</span></label>
        <div class="am-u-sm-10">
          <input type="tel" id="tel" placeholder="请输入手机号或固定号码（必填）" v-model.trim="msg.Mobile">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-2 am-form-label">公司<span>*</span></label>
        <div class="am-u-sm-10">
          <input type="text" id="" placeholder="必填" v-model.trim="msg.CorpName">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-2 am-form-label">职位</label>
        <div class="am-u-sm-10">
          <input type="text" id="" placeholder="选填" v-model.trim="msg.Position">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-2 am-form-label">地址</label>
        <div class="am-u-sm-10">
          <input type="text" id="" placeholder="选填" v-model.trim="msg.Address">
        </div>
      </div>

      <br/>
      
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">企业性质</label>
        <div class="am-u-sm-9">
          <span class="right" @click="selectClick('CorpNature')">{{choseMsg.CorpNature}}</span>
          <!-- <select name="" id="" v-model="msg.CorpNature">
            <option value="0" disabled="true" selected="selected" class="dispaly-none">选择性质</option>
            <option value="1">终端企业</option>
            <option value="2">中介</option>
            <option value="3">银行</option>
          </select> -->
        </div>
      </div>
      
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">类型</label>
        <div class="am-u-sm-9">

          <span class="right" @click="selectClick('CorpType')">{{choseMsg.CorpType}}</span>
          <!-- <select name="" id="" v-model="msg.CorpType">
            <option value="0" disabled="true" selected="selected" class="dispaly-none">选择类型</option>
            <option value="1">客户</option>
            <option value="2">渠道商</option>
          </select> -->
        </div>
      </div>

      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">获取方式</label>
        <div class="am-u-sm-9">

          <span class="right" @click="selectClick('GetWay')">{{choseMsg.GetWay}}</span>
          <!-- <select name="" id="" v-model="msg.GetWay">
            <option value="0" disabled="true" selected="selected" class="dispaly-none">选择方式</option>
            <option value="1">陌拜</option>
            <option value="2">转介绍</option>
            <option value="3">电销</option>
            <option value="4">微信</option>
            <option value="5">QQ</option>
            <option value="6">其他</option>
          </select> -->
        </div>
      </div>

      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">级别</label>
        <div class="am-u-sm-9">

          <span class="right" @click="selectClick('Grade')">{{choseMsg.Grade}}</span>
          <!-- <select name="" id="" v-model="msg.Grade">
            <option value="0" disabled="true" selected="selected" class="dispaly-none">选择级别</option>
            <option value="1">一般</option>
            <option value="2">重要</option>
            <option value="3">核心</option>
          </select> -->
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
    return {
      msg: {
        CorpNature: '0',
        CorpType: '0',
        GetWay: '0',
        Grade: '0'
      },
      selectarr: {
        CorpNature: [{
          key: '终端企业',
          value: '1'
        },
        {
          key: '中介',
          value: '2'
        },
        {
          key: '银行',
          value: '3'
        }],
        CorpType: [{
          key: '客户',
          value: '1'
        },
        {
          key: '渠道',
          value: '2'
        }],
        GetWay: [{
          key: '陌拜',
          value: '1'
        },
        {
          key: '转介绍',
          value: '2'
        },
        {
          key: '电销',
          value: '3'
        },
        {
          key: '微信',
          value: '4'
        },
        {
          key: 'QQ',
          value: '5'
        },
        {
          key: '其他',
          value: '6'
        }],
        Grade: [{
          key: '一般',
          value: '1'
        },
        {
          key: '重要',
          value: '2'
        },
        {
          key: '核心',
          value: '3'
        }]
      },
      confim: false
    }
  },
  computed: {
    choseMsg () {
      let json = {}
      json.CorpNature = this.selectarr.CorpNature[this.msg.CorpNature - 1] ? this.selectarr.CorpNature[this.msg.CorpNature - 1].key : '选择性质'
      json.CorpType = this.selectarr.CorpType[this.msg.CorpType - 1] ? this.selectarr.CorpType[this.msg.CorpType - 1].key : '选择类型'
      json.GetWay = this.selectarr.GetWay[this.msg.GetWay - 1] ? this.selectarr.GetWay[this.msg.GetWay - 1].key : '选择方式'
      json.Grade = this.selectarr.Grade[this.msg.Grade - 1] ? this.selectarr.Grade[this.msg.Grade - 1].key : '选择级别'
      return json
    }
  },
  methods: {
    selectClick (str) {
      this.dd.biz.util.chosen({
        source: this.selectarr[str],
        selectedKey: this.choseMsg[str],
        onSuccess: res => {
          this.msg[str] = res.value
        }
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
      alert(window.JSON.stringify(this.msg))
      this.msg.OwnUserId = this.$store.state.user.data.Id
      this.$ajax.post('/api/Customers/add', this.msg).then(res => {
        if (res.data.RetCode === '10000') {
          this.$router.push({path: '/'})
        }
      })
    },
    validate () {
      let json = {
        isValidata: false,
        msg: '输入错误'
      }
      if (!this.msg.LinkMan) {
        json.msg = '请填写联系人姓名'
        return json
      }
      if (!this.msg.Mobile) {
        json.msg = '请填写电话'
        return json
      }
      if (!this.msg.CorpName) {
        json.msg = '请填写公司'
        return json
      }
      json.isValidata = true
      return json
    },
    ddReady () {
      this.dd.biz.navigation.setRight({
        show: false
      })
      this.dd.biz.navigation.setTitle({
        title: '添加客户'
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

