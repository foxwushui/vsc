<template>
  <div class="contactsDetail">
    <div class="am-container top">
        <img v-bind:src="img_logo" width="45" />
        <p>{{msg.CorpName}}</p>
    </div>
    <div class="am-container cont am-g">
        <div class="am-u-sm-4">
          发消息
        </div>
        <div class="am-u-sm-4">
          电话
        </div>
        <div class="am-u-sm-4">
          写拜访记录
        </div>
    </div>
    <div class="am-container lists">
      <div class="list">
        <div class="title">标签</div>
        <div class="msg">
          <span :v-if="msg.CorpType">{{msg.CorpType | selectTypes('CorpType')}}</span>
          <span :v-if="msg.Grade">{{msg.Grade | selectTypes('Grade') }}</span>
          <span :v-if="msg.CorpNature">{{msg.CorpNature | selectTypes('CorpNature') }}</span>
          <span :v-if="msg.GetWay">{{msg.GetWay | selectTypes('GetWay') }}</span>
        </div>
      </div>
      <div class="list">
        <div class="title">姓名</div>
        <div class="msg">
          <p>{{msg.LinkMan}}</p>
        </div>
      </div>
      <div class="list" @click="call()">
        <div class="title">电话</div>
        <strong>+86-{{msg.Mobile}}</strong>
        <i>电话图标</i>
      </div>
    </div>
    <div class="am-container more">

    </div>
  </div>
</template>

<script>
export default {
  name: 'contactsDetail',
  data () {
    return {
      img_logo: require('../assets/imgs/logo.png'),
      msg: {}
    }
  },
  computed: {
    mode_id () {
      return this.$route.query.id
    }
  },
  methods: {
    getMsg () {
      this.$ajax.get('/api/Customers/GetModel', {
        params: {
          id: this.mode_id
        }
      }).then(res => {
        this.msg = res.data.Message
        this.$store.state.user.contacts = this.msg
      })
    },
    // 设置DD相关
    ddready () {
      this.dd.biz.navigation.setRight({
        show: true,
        control: true,
        text: '编辑',
        onSuccess: data => {
          this.upContacts()
        },
        onFail: function (err) {
          console.log(err)
        }
      })
      this.dd.biz.navigation.setTitle({
        title: '个人信息'
      })
    },
    // 编辑联系人
    upContacts () {
      this.$router.push({path: '/upContacts'})
    },
    call () {
      this.dd.biz.telephone.showCallMenu({
        phoneNumber: this.msg.Mobile,
        code: '+86',
        showDingCall: true,
        onSuccess: function () {},
        onFail: function () {}
      })
    }
  },
  created () {
    this.$store.state.tabbar.show = false
    this.ddready()
    this.getMsg()
  }
}
</script>

<style>
.contactsDetail{ position: absolute; left: 0;top:0;right: 0; bottom: 0;}
.contactsDetail .am-container{background: #fff;}
.contactsDetail .top{text-align: center; padding-top:10px;}
.contactsDetail .cont{text-align: center; padding-bottom: 20px; font-size: 1.4rem;}
.contactsDetail .lists{margin-top: 20px; border-top:1px solid #ddd;border-bottom: 1px solid #ddd;}
.contactsDetail .list{background: #fff; padding: 10px; border-bottom: 1px solid #ddd;}
.contactsDetail .list .title{color: #9a9a9a;}
.contactsDetail .list .msg{font-size: 1.2rem; padding-top: 5px;}
.contactsDetail .list span{color: #9a9a9a; background: #ebebeb; padding: 2px 5px; border-radius: 4px;}
.contactsDetail .list p{margin: 0; color: #333;font-size: 1.6rem;}
.contactsDetail .list strong{color: #ff5a09; font-size: 1.6rem;}
.contactsDetail .list:last-child{border:none;}
</style>
