<template>
  <div id="app">
    <!-- 主体部分，使用uirouter -->
    <router-view></router-view>
    <!-- tabbar -->
    <div class="am-g" style="position:fixed;bottom:100px;background:red;height:100px;">
      <div class="am-u-sm-4">
        <router-link :to="{path:'/'}">客户页面</router-link>
      </div>
      <div class="am-u-sm-4">
        <router-link :to="{path:'/Business/add'}">业务页面</router-link>
      </div>
      <div class="am-u-sm-4">
        <router-link :to="{path:'/Info'}">我的信息</router-link>
      </div>
    </div>
    <mt-tabbar v-model="selected" fixed v-if="this.$store.state.child.show">
      <mt-tab-item id="">
        客户
      </mt-tab-item>
      <mt-tab-item id="Business">
        业务
      </mt-tab-item>
      <mt-tab-item id="Info">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    // 监听selected属性  切换tab页面
    selected (newStr) {
      this.$router.push({path: '/' + newStr})
    }
  },
  components: {
  },
  created () {
    // 入口页 免登陆
    this.dd.ready(() => {
      this.dd.runtime.permission.requestAuthCode({
        corpId: 'dingf53c8d834194138b35c2f4657eb6378f',
        onSuccess: res => {
          console.log(res)
        }
      })
    })
  }
}
</script>
