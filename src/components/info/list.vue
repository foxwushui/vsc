<template>
  <div class="wraper my_list"  ref="viewBox">
    <div class="my_list_t am-g">
      <div class="am-u-sm-6" :class="{active: index==tabIndex}" v-for="(item, index) of tabs" :key="item.id" @click="tabClick(index)">{{item.text}}</div>
    </div>
    <div class="my_list_c">
      <div class="list am-container" v-for="item of lists" :key="item.Id" @click="listClick(item.Id)">
        <h6>{{item.CorpName}}<span v-if="tabIndex">{{item.Status | selectTypes('Status')}}</span></h6>
        <dl>
          <dt>打款信息：</dt>
          <dd>{{item.AccountBank}} </dd>
        </dl>
        <dl>
          <dt v-if="!tabIndex">买断金额：</dt>
          <dt v-else>卖断金额：</dt>
          <dd>{{item.TotalAmount}}元 </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      tabs: [
        {
          text: '进票列表',
          api: 'GetInList'
        },
        {
          text: '我的出票',
          api: 'GetOutList'
        }
      ],
      lists: [],
      tabIndex: 0
    }
  },
  computed: {
    userData () {
      return this.$store.state.user.data
    },
    msg () {
      return {
        pageIndex: 1,
        pageSize: 10,
        maxpageIndex: 1,
        CreateUserId: this.userData.Id
      }
    }
  },
  methods: {
    tabClick (index) {
      this.tabIndex = index
      this.lists = []
      this.msg.pageIndex = 1
      this.getList()
    },
    listClick (id) {
      this.$router.push({path: '/business/detail', query: {id: id, model: this.tabIndex, isOut: this.tabIndex}})
    },
    getList () {
      this.$ajax.get('/api/SalesOrderCorp/' + this.tabs[this.tabIndex].api, {
        params: this.msg
      }).then(res => {
        this.msg.maxpageIndex = Math.ceil(res.data.Message.Total / this.msg.pageSize)
        this.lists = this.lists.concat(res.data.Message.SalesOrderCorpList)
      })
    },
    handlescroll () {
      var maxHeight = this.box.scrollHeight - document.body.clientHeight + 58
      if ((maxHeight - this.box.scrollTop) <= 10) {
        if (this.msg.PageIndex >= this.msg.maxpageIndex) {
          return
        }
        // 加载下一页
        this.msg.pageIndex++
        this.getList()
      }
    },
    ddReady () {
      this.dd.biz.navigation.setRight({
        show: false
      })
      this.dd.biz.navigation.setTitle({
        title: '出票业务'
      })
      this.getList()
    }
  },
  mounted () {
    this.box = this.$refs.viewBox
    this.box.addEventListener('scroll', this.handlescroll)
  },
  created () {
    this.$store.state.tabbar.show = false
    this.ddReady()
  }
}
</script>

<style>
.my_list_t{ line-height: 45px; text-align: center; background: #e1e1e1; margin-top: 10px; color: #666;}
.my_list_t .active{background: #fff; color: #ff5a09;}
.my_list_c{background: #fff;}
.my_list_c .list{ border-bottom: 1px solid #f1f1f1;}
.my_list_c h6{line-height: 60px; font-weight: normal; border-bottom: 1px dashed #f2f2f2;}
.my_list_c dt{float: left; font-weight: normal;}
.my_list_c dd{padding-left: 6.8rem;}
.my_list_c  h6 span{font-size: 1.2rem; vertical-align: middle; border:1px solid #999; border-radius: 4px; padding: 2px 8px; margin-left: 10px; color: #999;}
</style>
