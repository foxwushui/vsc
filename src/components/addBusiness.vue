<template>
  <div class="addBusiness">
    <form class="am-form am-form-horizontal" @submit.prevent="add">
      <div class="am-form-group  am-container">
        <label for="name" class="am-u-sm-3 am-form-label">贴现公司<span>*</span></label>
        <div class="am-u-sm-9">
           <select name="" id="" v-model="msg.CorpId">
            <option value="0" disabled="true" selected="selected" class="dispaly-none">选择贴现公司</option>
            <option v-for="option in CorpList" v-bind:value="option.Id">  
                {{ option.CorpName }}  
             </option> 
          </select>
        </div>
      </div>
      <div class="am-form-group am-container" @click="chose()">
        <label for="tel" class="am-u-sm-3 am-form-label">账户名称<span>*</span></label>
        <div class="am-u-sm-9">
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
            <span  :class="msg.OfferType==1 ? 'active left' : 'noactive left' "  @click="chooseotype(1)">利率</span>
            <span  :class="msg.OfferType==2 ? 'active right' : 'noactive right' "  @click="chooseotype(2)" >十万</span></div>
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
       
        <div class="up">
        <input class="file" type="file" multiple @change="onFileChange">
           +
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
        AccountName: '',
        AccountNo: '',
        AccountBank: '',
        OfferType: 1
      },
      CorpList: []
    }
  },
  computed: {
    chose_msg () {
      return this.$store.state.user.chose
    }
  },
  methods: {
    getCorps () {
      this.$ajax.get('/api/Customers/GetList', {
        params: {
          OwnUserId: 4,
          PageIndex: 1
        }
      }).then(res => {
        this.CorpList = res.data.Message.CustomersList
      })
    },
    chose () {
      this.$router.push({path: '/chose', query: {id: this.msg.CorpId}})
    },
    choseEd () {
      this.msg.AccountName = this.chose_msg.AccountName
      this.msg.AccountNo = this.chose_msg.AccountNo
      this.msg.AccountBank = this.chose_msg.AccountBank
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
    },
    // 选择买断方式
    chooseotype (n) {
      this.msg.OfferType = n
    },
    onFileChange (e) {
      var that = this
      var files = e.target.files || e.dataTransfer.files
      var image = new Image()
      var leng = files.length
      for (var i = 0; i < leng; i++) {
        var reader = new FileReader()
        reader.readAsDataURL(files[i])
        reader.onload = function (e) {
          var file = e.target.result
          that.$ajax.post('/api/SalesOrderCorp/UploadFile', {'flie': file}).then(res => { alert(res) })
        }
      }
    }
  },
  created () {
    // 隐藏tabbar
    this.$store.state.tabbar.show = false
    // 设置钉钉相关内容
    this.ddReady()
    this.getCorps()
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
.otype{float: right;}
.otype  span{display:inline-block;width: 60px; text-align: center; line-height: 35px; height: 35px;margin-top:5px; float: left;}
.otype .left{border-radius: 20px 0px 0px 20px;}
.otype .right{border-radius: 0px 20px 20px 0px;}
.otype .active{background:#ff5a09;color:#ffffff; }
.otype .noactive{background:#efefef;color:#9c9c9c; }
.pic_title{height: 40px; background-color:#f5f4f9; text-indent: 20px; line-height: 40px; }
.pic_list{height: 100px; background: #FFFFFF; overflow:hidden;}
.pic_list .up{ height: 80px; width: 80px; border:1px solid #9c9c9c; margin-top: 10px; margin-left: 20px; font-size: 60px; line-height: 60px; text-align: center;position: relative;}
.file{width:80px; height:80px; opacity: 0; filter:Alpha(opacity=0); position: absolute; top: 0; left: 0 }
</style>
