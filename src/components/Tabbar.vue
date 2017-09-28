<template>
  <div class="tabbar am-g">
    <div class="am-u-sm-4 item" v-for="(item,index) of tab" :key="item.id" :class="{active: index==tabIndex}" @click="changeView(index,item.url)"><img v-bind:src="item.img" width="45" height="45" >{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data () {
    return {
      tab: [{
        name: '客户',
        url: '/',
        img: require('../assets/imgs/my.png')
      },
      {
        name: '业务',
        url: '/Business',
        img: require('../assets/imgs/my.png')
      },
      {
        name: '我的',
        url: '/Info',
        img: require('../assets/imgs/my.png')
      }]
    }
  },
  computed: {
    tabIndex () {
      return this.$store.state.tabbar.tabIndex
    }
  },
  methods: {
    changeView (index, url) {
      this.$store.state.tabbar.tabIndex = index
      // 页面跳转
      this.$router.push({path: url})
    }
  }
}
</script>

<style>
.tabbar{position: fixed; bottom: 0; line-height: 32px; color: #6f6f6f;background: #fff;}
.tabbar .item{ text-align: center;}
.tabbar .item.active{color: #ff5a09;}
.tabbar .item img{display: block; margin:0 auto;}
</style>
