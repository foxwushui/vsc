<template>
  <div class="businessDetail">
    <div class="am-container top">
      <div class="corpName am-g">
        <div class="am-u-sm-2">
          <img v-bind:src="img_logo"/>
        </div>
        <div class="am-u-sm-10">
          {{detail.InSalesOrderCorp.CorpName}}
          <p>{{detail.Status | selectTypes('Status')}}</p>
        </div>
      </div>
      <div class="item">
        <div class="am-g">
          <div class="am-u-sm-3">账户名称</div>
          <div class="am-u-sm-9">{{detail.InSalesOrderCorp.TradeCorp}}</div>
        </div>
        <div class="am-g">
          <div class="am-u-sm-3">打款账号</div>
          <div class="am-u-sm-9">{{detail.InSalesOrderCorp.BankAcount}}</div>
        </div>
        <div class="am-g">
          <div class="am-u-sm-3">开户行</div>
          <div class="am-u-sm-9">{{detail.InSalesOrderCorp.AccountBank}}</div>
        </div>
        <div class="am-g">
          <div class="am-u-sm-3">买断价格</div>
          <div class="am-u-sm-4">{{detail.InSalesOrderCorp.OfferAmount}}</div>
          <div class="am-u-sm-5"><span v-for="(otype, index) in offertype" v-bind:class="{active:index==(detail.InSalesOrderCorp.OfferType-1)}">{{otype}}</span></div>
        </div>
        <div class="am-g">
          <div class="am-u-sm-3">买断金额</div>
          <div class="am-u-sm-9">{{detail.InSalesOrderCorp.TotalAmount}}</div>
        </div>
      </div>
    </div>
    <div class="am-container piclist">
      <div class="title">查看图片</div>
      <div v-for="pic in pics" class="am-g" :key="pic.id">
        <img v-bind:src="pic" class="am-radius am-u-sm-4"/>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'businessDetail',
  data () {
    return {
      img_logo: require('../assets/imgs/logo.png'),
      detail: {},
      pics: [],
      offertype: ['利率', '十万']
    }
  },
  computed: {
    id () {
      return this.$route.query.id
    }
  },
  methods: {
    getDetail () {
      this.$ajax.get('/api/SalesOrder/GetModel', {
        params: {
          id: this.id
        }
      }).then(res => {
        this.detail = res.data.Message
        this.pics = res.data.Message.BillPics.split(',')
      })
    },
    // 设置DD相关
    ddready () {
      this.dd.biz.navigation.setRight({
        show: false
      })
      this.dd.biz.navigation.setTitle({
        title: '审核详情'
      })
      this.dd.biz.util.previewImage({
        urls: this.pics,
        current: this.pics[0]
      })
    }
  },
  created () {
    this.$store.state.tabbar.show = false
    this.ddready()
    this.getDetail()
  }
}
</script>

<style>
  .businessDetail{overflow: hidden;}
  .businessDetail .am-container{background: #fff;}
  .businessDetail .top{padding-top:1rem; border-top: solid 1px #EEE;border-bottom: solid 1px #EEE;}
  .businessDetail .am-container .corpName{ border-bottom: solid 1px #EEE; padding-bottom: 1rem;}
  .businessDetail .am-container .am-g{margin: 0;}
  .businessDetail .am-container .corpName .am-u-sm-2{padding: 0;margin: 0; text-align: center;}
  .businessDetail .am-container .corpName .am-u-sm-2 img{width: 85%}
  .businessDetail .am-container .corpName .am-u-sm-10{font-size: 18px;}
  .businessDetail .am-container .corpName .am-u-sm-10 p{font-size: 14px; color: #AAA; padding: 0; margin: 0;}
  .businessDetail .am-container .am-u-sm-3,.am-u-sm-9,.am-u-sm-5,.am-u-sm-4{padding: 0; line-height: 2.5rem;}
  .businessDetail .am-container .am-u-sm-3{color: #AAA;}
  .businessDetail .am-container .item{margin:1rem 0;}
  .businessDetail .am-container .item .am-u-sm-5 span{ height: 22px; line-height: 22px; background-color: #d8d8d8; display: inline-block; width: 60px; text-align: center;margin-right: 5px; font-size: 14px;}
  .businessDetail .am-container .item .am-u-sm-5 .active{background-color: #ff5a09; color: #FFF;}
  .businessDetail .piclist{overflow: hidden; background-color: #FFF;}
  .businessDetail .piclist .title{line-height: 2.5rem; margin: 0.5rem 0 1rem;}
  .businessDetail .piclist .am-u-sm-4{padding:0 10px 10px 0;}

</style>
