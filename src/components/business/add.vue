<template>
  <div class="addBusiness addBusiness">
    <form class="am-form am-form-horizontal" @submit.prevent="add">
      <div class="am-form-group  am-container">
          <label for="tel" class="am-u-sm-4 am-form-label" v-if="!querys.id">选择贴现公司          
            <span>*</span>
          </label>
          <label for="tel" class="am-u-sm-4 am-form-label" v-else >选择出口公司 
             <span>*</span>
          </label>
          <div class="am-u-sm-8" @click="choseContact()">
            <input type="text" id="" placeholder="选择公司" v-model.trim="msg.CorpName" readonly>
          </div>

          <!-- <select name="" id="" v-model="msg.CorpId">
            <option value="0" disabled="true" selected="selected" class="dispaly-none">选择贴现公司</option>
            <option v-for="option in CorpList" :value="option.Id" v-bind:text="option.CorpName" :key="option.Id">
              {{ option.CorpName | trim }}
            </option>
          </select> -->
      </div>

      <div class="am-form-group am-container">
        <label for="tel" class="am-u-sm-3 am-form-label">账户详细
          <span>*</span>
        </label>
        <div class="am-u-sm-9" @click="chose()">

          <textarea v-html="msg.AccountBank" readonly rows="5" class="showtext" placeholder="选择账户"></textarea>

          <!-- <input type="text" id="" placeholder="选择账户" v-model.trim="msg.AccountBank" readonly> -->
        </div>
      </div>

      <!-- <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">账号</label>
        <div class="am-u-sm-9">
          <input type="text" id="" placeholder="账号" v-model="msg.BankAcount" readonly>
        </div>
      </div>

      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label">开户行</label>
        <div class="am-u-sm-9">
          <input type="text" id="" placeholder="开户行" v-model="msg.AccountBank" readonly>
        </div>
      </div> -->

      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label" v-if="!querys.id" >买断价格</label>
        <label for="" class="am-u-sm-3 am-form-label" v-else >卖断价格</label>
        <div class="am-u-sm-9">
          <div class="otype">
            <input type="number" step="0.01" id="" placeholder="每十万买断价格" v-if="!querys.id"  v-model.trim="msg.OfferAmount">
            <input type="number" step="0.01" id="" placeholder="每十万卖断价格" v-else v-model.trim="msg.OfferAmount">
            <!-- <span :class="msg.OfferType==1 ? 'active left' : 'noactive left' " @click="chooseotype(1)">利率</span>
            <span :class="msg.OfferType==2 ? 'active right' : 'noactive right' " @click="chooseotype(2)">十万</span> -->
          </div>
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="" class="am-u-sm-3 am-form-label" v-if="!querys.id" >买断金额</label>
        <label for="" class="am-u-sm-3 am-form-label"v-else>卖断金额</label>
        <div class="am-u-sm-9">
          <input type="number" step="0.01" id="" placeholder="买断金额" v-if="!querys.id" v-model.trim="msg.TotalAmount">
          <input type="number" step="0.01" id="" placeholder="卖断金额" v-else v-model.trim="msg.TotalAmount">
        </div>
      </div>
      <div class="pic_title">图片</div>
      <div class="pic_list">
        <div class="pic_list_img left" v-for="img in imgs" :key="img.Id">
          <img v-bind:src="img" width="80" height="80" />
        </div>
        <div class="up left" v-if="parseInt(querys.isOut)">
          <input class="file" type="file" accept="image/*" multiple @change="onFileChange"> +
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
      imgs: [],
      pics: []
    }
  },
  computed: {
    chose_msg () {
      return this.$store.state.user.chose
    },
    msg () {
      return {
        MainId: 0,
        TradeType: 1,
        CorpId: this.$store.state.user.chose.CorpId || 0,
        CorpName: this.$store.state.user.chose.CorpName || '选择公司',
        AccountBank: '',
        OfferType: 2,
        pic: [],
        CreateUserId: this.$store.state.user.data.Id
      }
    },
    querys () {
      return this.$route.query
    }
  },
  methods: {
    chose () {
      if (!this.msg.CorpId) {
        this.dd.device.notification.toast({
          icon: 'error',
          text: '请选择公司'
        })
        return
      }
      this.$router.push({path: '/other/choseBank', query: {id: this.msg.CorpId}})
    },
    getdetail () {
      if (!parseInt(this.querys.isOut)) {
        this.$ajax.get('/api/SalesOrder/GetModel', {
          params: {
            id: this.querys.id
          }
        }).then(res => {
          this.msg.pic = this.imgs = res.data.Message.BillPics ? res.data.Message.BillPics.split(',') : []
        })
      }
    },
    choseContact () {
      this.$router.push({path: '/other/choseContact'})
    },
    choseEd () {
      this.msg.AccountBank = this.chose_msg.AccountBank
      this.msg.CorpId = this.chose_msg.CorpId
      this.msg.CorpName = this.chose_msg.CorpName
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
      this.msg.MainId = this.querys.id || 0
      this.msg.TradeType = this.querys.model === '0' ? 2 : 1
      this.$ajax({
        url: '/api/SalesOrderCorp/add',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        transformRequest: data => {
          let obj = {}
          obj = window.JSON.parse(window.JSON.stringify(data))
          obj.pic = obj.pic && obj.pic.join(',')
          obj = window.JSON.stringify(obj)
          return obj
        },
        data: this.msg
      }).then(res => {
        alert(window.JSON.stringify(res.data))
        if (this.msg.MainId) {
          this.$router.go(-2)
        } else {
          this.$router.go(-1)
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
      this.getdetail()
    },
    // // 选择买断方式
    // chooseotype (n) {
    //   this.msg.OfferType = n
    // },
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
    },
    validate () {
      let json = {
        isValidata: false,
        msg: '输入错误'
      }
      if (!this.msg.CorpId) {
        json.msg = '请选择公司'
        return json
      }
      if (!this.msg.AccountBank) {
        json.msg = '请选择详细账户'
        return json
      }
      if (!this.msg.OfferAmount) {
        json.msg = '请填写买断价格'
        return json
      }
      if (!this.msg.TotalAmount) {
        json.msg = '请填写买断金额'
        return json
      }
      if (!this.msg.pic.length) {
        json.msg = '请上传图片'
        return json
      }
      json.isValidata = true
      return json
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

