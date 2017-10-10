<template>
  <div class="addBusiness">
    <form class="am-form am-form-horizontal" @submit.prevent="add">
      <div class="am-form-group  am-container">
          <label for="tel" class="am-u-sm-4 am-form-label">选择贴现公司
            <span>*</span>
          </label>
          <div class="am-u-sm-8" @click="choseContact()">
            <input type="text" id="" placeholder="选择贴现公司" v-model="msg.CorpName">
          </div>

          <!-- <select name="" id="" v-model="msg.CorpId">
            <option value="0" disabled="true" selected="selected" class="dispaly-none">选择贴现公司</option>
            <option v-for="option in CorpList" :value="option.Id" v-bind:text="option.CorpName" :key="option.Id">
              {{ option.CorpName | trim }}
            </option>
          </select> -->
      </div>
      <div class="am-form-group am-container">
        <label for="tel" class="am-u-sm-3 am-form-label">账户名称
          <span>*</span>
        </label>
        <div class="am-u-sm-9" @click="chose()">
          <input type="text" id="" placeholder="选择账户" v-model="msg.AccountName">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">账号</label>
        <div class="am-u-sm-9">
          <input type="text" id="" placeholder="账号" v-model="msg.AccountNo">
        </div>
      </div>

      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">开户行</label>
        <div class="am-u-sm-9">
          <input type="text" id="" placeholder="开户行" v-model="msg.AccountBank">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">买断价格</label>
        <div class="am-u-sm-9">
          <div class="otype">
            <input type="text" style="float:left;width:100px;" id="" placeholder="买断价格" v-model="msg.OfferAmount">
            <span :class="msg.OfferType==1 ? 'active left' : 'noactive left' " @click="chooseotype(1)">利率</span>
            <span :class="msg.OfferType==2 ? 'active right' : 'noactive right' " @click="chooseotype(2)">十万</span>
          </div>
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">买断金额</label>
        <div class="am-u-sm-9">
          <input type="text" id="" placeholder="买断金额" v-model="msg.TotalAmount">
        </div>
      </div>
      <div class="pic_title">图片</div>
      <div class="pic_list">
        <div class="pic_list_img left" v-for="img in imgs" :key="img.Id">
          <img v-bind:src="img" width="80" height="80" />
        </div>
        <div class="up left">
          <input class="file" type="file" multiple @change="onFileChange"> +
        </div>
      </div>
      <div class="am-form-group am-container noBg">
        <div class="am-u-sm-12 ">
          <input type="submit" value="确定" class="sub">
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
        CorpId: this.$store.state.user.chose.CorpId || 0,
        CorpName: this.$store.state.user.chose.CorpName || '选择贴现公司',
        AccountName: '',
        AccountNo: '',
        AccountBank: '',
        OfferType: 1,
        pic: [],
        CreateUserId: this.$store.state.user.data.Id
      },
      imgs: []
    }
  },
  computed: {
    chose_msg () {
      return this.$store.state.user.chose
    }
  },
  methods: {
    chose () {
      this.$router.push({path: '/chose', query: {id: this.msg.CorpId}})
    },
    choseContact () {
      this.$router.push({path: '/choseContact'})
    },
    choseEd () {
      this.msg.AccountName = this.chose_msg.AccountName
      this.msg.AccountNo = this.chose_msg.AccountNo
      this.msg.AccountBank = this.chose_msg.AccountBank
      this.msg.CorpId = this.chose_msg.CorpId
      this.msg.CorpName = this.chose_msg.CorpName
    },
    add () {
      if (this.msg.CorpId === '0') {
        return
      }
      this.$ajax({
        url: '/api/SalesOrderCorp/add',
        method: 'POST',
        transformRequest: data => {
          let obj = {}
          obj = window.JSON.parse(window.JSON.stringify(data))
          obj.pic = obj.pic && obj.pic.join(',')
          obj = window.JSON.stringify(obj)
          return obj
        },
        data: this.msg
      }).then(res => {
        console.log(res)
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
    },
    // 选择买断方式
    chooseotype (n) {
      this.msg.OfferType = n
    },
    onFileChange (e) {
      let file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = e => {
        this.$ajax({
          url: '/api/SalesOrderCorp/UploadFile',
          method: 'POST',
          transformRequest: data => {
            var formData = new FormData()
            formData.append('file', data.file)
            return formData
          },
          data: {
            file: file
          }
        }).then(res => {
          if (res.data.RetCode === '10000') {
            this.imgs.push(e.currentTarget.result)
            this.msg.pic.push(res.data.Message)
          }
        })
      }
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
.otype{float: right;}
.otype  span{display:inline-block;width: 60px; text-align: center; line-height: 35px; height: 35px;margin-top:5px; float: left; cursor: pointer;}
.otype .left{border-radius: 20px 0px 0px 20px;}
.otype .right{border-radius: 0px 20px 20px 0px;}
.otype .active{background:#ff5a09;color:#ffffff; }
.otype .noactive{background:#efefef;color:#9c9c9c; }
.pic_title{height: 40px; background-color:#f5f4f9; text-indent: 20px; line-height: 40px; }
.pic_list{height: 100px; background: #FFFFFF; overflow:hidden;}
.pic_list .up{ height: 80px; width: 80px; border:1px solid #9c9c9c; margin-top: 10px; margin-left: 20px; font-size: 60px; line-height: 60px; text-align: center;position: relative;}
.file{width:80px; height:80px; opacity: 0; filter:Alpha(opacity=0); position: absolute; top: 0; left: 0 }
.pic_list_img{margin: 10px 0 0 20px;}
</style>
