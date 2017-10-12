<template>
  <div class="tabbar am-g">
    <div class="am-u-sm-4 item" v-for="(item,index) of tab" :key="item.id" :class="{active: index==tabIndex}" @click="changeView(index,item.url)"><img v-bind:src="index==tabIndex ? item.img_a : item.img"  height="18" >{{item.name}}</div>
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
        img: require('../assets/imgs/cont.png'),
        img_a: require('../assets/imgs/cont_active.png')
      },
      {
        name: '业务',
        url: '/Business',
        img: require('../assets/imgs/bus.png'),
        img_a: require('../assets/imgs/bus_active.png')
      },
      {
        name: '我的',
        url: '/Info',
        img: require('../assets/imgs/my.png'),
        img_a: require('../assets/imgs/my_active.png')
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
      // 页面跳转
      this.$router.push({path: url})
    }
  }
}
</script>
