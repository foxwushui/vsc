<template>
  <div class="contactsDetail">
    <div class="am-container top">
        <img v-bind:src="imgs.logo" width="80" />
        <p>{{msg.CorpName}}</p>
    </div>
    <div class="am-container cont am-g">
        <div class="am-u-sm-4" @click="my_msg()">
        <img v-bind:src="imgs.msg" width="40" />
          发消息
        </div>
        <a :href="'tel:'+msg.Mobile">
          <div class="am-u-sm-4" @click="my_call()">
          <img v-bind:src="imgs.tel" width="40" />
            电话
          </div>
        </a>
        <div class="am-u-sm-4">
        <img v-bind:src="imgs.bf" width="40" />
          写拜访记录
        </div>
    </div>
    <div class="am-container lists">
      <div class="list">
        <div class="title">标签</div>
        <div class="msg">
          <span v-if="msg.CorpType">{{msg.CorpType | selectTypes('CorpType')}}</span>
          <span v-if="msg.Grade">{{msg.Grade | selectTypes('Grade') }}</span>
          <span v-if="msg.CorpNature">{{msg.CorpNature | selectTypes('CorpNature') }}</span>
          <span v-if="msg.GetWay">{{msg.GetWay | selectTypes('GetWay') }}</span>
        </div>
      </div>
      <div class="list">
        <div class="title">姓名</div>
        <div class="msg">
          <p>{{msg.LinkMan}}</p>
        </div>
      </div>

        <a :href="'tel:'+msg.Mobile">
      <div class="list" @click="my_call()">
        <div class="title">电话</div>
        <strong>+86-{{msg.Mobile}}</strong>
        <img v-bind:src="imgs.tel_l" width="10" />
      </div>
        </a>


    </div>
    <div class="am-container more">
        <div class="more_t">
          <div class="title left">账户列表</div>
          <div class="msg right" @click="getAccountlist()"><span>查看</span><i class="am-icon-chevron-down"></i></div>
        </div>
          <div v-show="Accountlist.length && isAccountlist">
            <div v-for="(item,index) of Accountlist" :key="item.Id" class="am-g more_list" @click="accountClick(index,item.Id)">
              <div class="am-u-sm-12">
                <div class="title">账户信息：</div>
                <div class="msg">
                  <textarea v-html="item.AccountBank" readonly rows="5" class="showtext"></textarea>
                </div>
              </div>
              

            </div>
          </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'contactsDetail',
  data () {
    return {
      imgs: {
        logo: require('../../assets/imgs/logo_b.png'),
        msg: require('../../assets/imgs/msg.png'),
        tel: require('../../assets/imgs/tel.png'),
        bf: require('../../assets/imgs/bf.png'),
        tel_l: require('../../assets/imgs/tel_l.png')
      },
      msg: {
        CorpType: '',
        Grade: '',
        CorpNature: '',
        GetWay: ''
      },
      Accountlist: [],
      isAccountlist: false
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
        title: '详细信息'
      })
      this.getMsg()
    },
    // 编辑联系人
    upContacts () {
      this.$router.push({path: '/contacts/up'})
    },
    my_call () {
      this.dd.biz.telephone.showCallMenu({
        phoneNumber: this.msg.Mobile,
        code: '+86',
        showDingCall: true,
        onSuccess: function () {},
        onFail: function () {}
      })
    },
    my_msg () {
      console.log('发送消息')
    },
    getAccountlist () {
      if (this.isAccountlist) {
        this.isAccountlist = false
      } else {
        if (!this.Accountlist.length) {
          this.$ajax.get('/api/TradeCompany/GetListByCId', {
            params: {
              cid: this.mode_id
            }
          }).then(res => {
            this.isAccountlist = true
            this.Accountlist = res.data.Message
          })
        } else {
          this.isAccountlist = true
        }
      }
    },
    accountClick (index, id) {
      // 删除账户
      this.dd.device.notification.confirm({
        message: '确认删除？',
        title: '提示',
        buttonLabels: ['删除', '取消'],
        onSuccess: res => {
          if (!res.buttonIndex) {
            this.$ajax.get('/api/TradeCompany/delete', {
              params: {
                id: id
              }
            }).then(res => {
              this.Accountlist.splice(index, 1)
            })
          }
        }
      })
    }
  },
  created () {
    this.$store.state.tabbar.show = false
    this.ddready()
  }
}
</script>