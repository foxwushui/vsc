<template>
  <div class="businessDetail wraper">
    <div class="am-container top" v-if="detail">
      <div class="corpName am-g">
        <div class="am-u-sm-2">
          <img v-bind:src="img_logo" />
        </div>
        <div class="am-u-sm-10">
          {{detail.CorpName}}
          <p>{{detail.Status | selectTypes('Status')}}</p>
        </div>
      </div>
      <div class="item">
        <!-- <div class="am-g">
          <div class="am-u-sm-3">账户名称</div>
          <div class="am-u-sm-9">{{detail.TradeCorp}}</div>
        </div>
        <div class="am-g">
          <div class="am-u-sm-3">打款账号</div>
          <div class="am-u-sm-9">{{detail.BankAcount}}</div>
        </div> -->
        <div class="am-g">
          <div class="am-u-sm-3">账号信息</div>
           
          <div class="am-u-sm-9">
            <textarea v-html="detail.AccountBank" readonly rows="5" class="showtext"></textarea>
            <!-- {{detail.AccountBank}} -->
            </div>
        </div>
        <div class="am-g">
          <div class="am-u-sm-3" v-if="!parseInt(querys.model)">买断价格</div>
          <div class="am-u-sm-3" v-else>卖断价格</div>
      
          <div class="am-u-sm-4">{{detail.OfferAmount}}</div>
          <div class="am-u-sm-5">
            <span v-for="(otype, index) in offertype" class="am-u-sm-6" v-bind:class="{active:index===(detail.OfferType-1)}" :key="otype.id">{{otype}}</span>
          </div>
        </div>
        <div class="am-g">

          <div class="am-u-sm-3" v-if="!parseInt(querys.model)">买断金额</div>
          <div class="am-u-sm-3" v-else>卖断金额</div>
          <div class="am-u-sm-9">{{detail.TotalAmount}}</div>
        </div>

        <div class="spimg"><img  v-bind:src="spimg[detail.Status-1]" width="100"></div>

      </div>
    </div>
    <div class="am-container piclist">
      <div class="title">查看图片</div>
      <div class="am-g">
        <div  :key="pic.id" v-for="pic in pics" class="am-radius am-u-sm-4" @click="showImg(pic)" >
          <img v-bind:src="pic" width="100" />
        </div>
      </div>
    </div>

    <input type="button" value="我来出票" class="sub" v-if="!parseInt(querys.isOut)" @click="add" />

  </div>
</template>

<script>
export default {
  name: 'businessDetail',
  data () {
    return {
      img_logo: require('../../assets/imgs/logo.png'),
      detail: {},
      pics: [],
      offertype: ['利率', '十万'],
      spimg: [
        '',
        require('../../assets/imgs/sp_succ.png'),
        require('../../assets/imgs/sp_err.png')
      ],
      models: ['InSalesOrderCorp', 'OutSalesOrderCorp']
    }
  },
  computed: {
    querys () {
      return this.$route.query
    }
  },
  methods: {
    add () {
      this.$router.push({path: '/business/add', query: this.querys})
    },
    getDetail () {
      this.$ajax.get('/api/SalesOrder/GetModel', {
        params: {
          id: this.querys.id
        }
      }).then(res => {
        this.detail = res.data.Message[this.models[this.querys.model]]
        this.pics = res.data.Message.BillPics.split(',')
      })
    },
    showImg (src) {
      this.dd.biz.util.previewImage({
        urls: this.pics,
        current: src,
        onSuccess: res => {
        }
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
      this.getDetail()
    }
  },
  created () {
    console.log(this.querys)
    this.$store.state.tabbar.show = false
    this.ddready()
  }
}
</script>
