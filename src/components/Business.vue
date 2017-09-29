<template>
  <div class="business">
     <div class="am-container">
       <router-link :to="{ path: '/businessDetail',query:{id: '3'}}">
        <h6>上海某某某公司<span><i></i>审核中</span></h6>
        <p>打款名称：上海得到解答额度和都饿和</p>
        <p>打款开户行：杀打死大四的家啊</p>
        <p>买断金额：啊撒低级啊速度加啊四的就啊加的就啊时代是</p>
       </router-link>
     </div>
     <div class="am-container">
       <router-link :to="{ path: '/businessDetail'}">
        <h6>上海某某某公司<span><i></i>审核中</span></h6>
        <p>打款名称：上海得到解答额度和都饿和</p>
        <p>打款开户行：杀打死大四的家啊</p>
        <p>买断金额：啊撒低级啊速度加啊四的就啊加的就啊时代是</p>
       </router-link>
     </div>
     <div class="am-container">
       <router-link :to="{ path: '/businessDetail'}">
        <h6>上海某某某公司<span><i></i>审核中</span></h6>
        <p>打款名称：上海得到解答额度和都饿和</p>
        <p>打款开户行：杀打死大四的家啊</p>
        <p>买断金额：啊撒低级啊速度加啊四的就啊加的就啊时代是</p>
       </router-link>
     </div>
     <div class="am-container">
       <router-link :to="{ path: '/businessDetail'}">
        <h6>上海某某某公司<span><i></i>审核中</span></h6>
        <p>打款名称：上海得到解答额度和都饿和</p>
        <p>打款开户行：杀打死大四的家啊</p>
        <p>买断金额：啊撒低级啊速度加啊四的就啊加的就啊时代是</p>
       </router-link>
     </div>
     <div class="am-container">
       <router-link :to="{ path: '/businessDetail'}">
        <h6>上海某某某公司<span><i></i>审核中</span></h6>
        <p>打款名称：上海得到解答额度和都饿和</p>
        <p>打款开户行：杀打死大四的家啊</p>
        <p>买断金额：啊撒低级啊速度加啊四的就啊加的就啊时代是</p>
       </router-link>
     </div>
     <div class="am-container">
       <router-link :to="{ path: '/businessDetail'}">
        <h6>上海某某某公司<span><i></i>审核中</span></h6>
        <p>打款名称：上海得到解答额度和都饿和</p>
        <p>打款开户行：杀打死大四的家啊</p>
        <p>买断金额：啊撒低级啊速度加啊四的就啊加的就啊时代是</p>
       </router-link>
     </div>
  </div>
</template>

<script>
export default {
  name: 'business',
  data () {
    return {}
  },
  methods: {
    addContacts () {
      // 添加审批
      this.$router.push({path: '/addBusiness'})
    },
    ddReady () {
      this.dd.biz.navigation.setMenu({
        backgroundColor: '#ADD8E6',
        textColor: '#ADD8E611',
        items: [
          {
            'id': '1',
            'iconId': 'add',
            'text': '添加'
          }
        ],
        onSuccess: data => {
          this.addContacts()
        },
        onFail: function (err) {
          console.log(err)
        }
      })
      this.dd.biz.navigation.setTitle({
        title: '审核管理'
      })
    }
  },
  created () {
    // 显示tabbar
    this.$store.state.tabbar = {
      show: true,
      tabIndex: 1
    }
    this.ddReady()
  }
}
</script>

<style>
.business{position:absolute;left: 0; right: 0;top: 0;bottom: 77px; overflow: auto;}
.business .am-container{margin-top: 10px; background: #fff; padding-top: 10px;padding-bottom: 10px;}
.business h6{font-weight: normal;font-size: 2rem; line-height: 1.6;}
.business h6 span{font-size: 1.2rem; vertical-align: middle; border:1px solid #999; border-radius: 4px; padding: 2px 8px; margin-left: 10px; color: #999;}
.business p{margin: .3rem 0;font-size: 1.4rem; color: #666}
</style>
