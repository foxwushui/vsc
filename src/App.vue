<template>
  <div id="app">
    <!-- 主体部分，使用uirouter -->
    <router-view></router-view>
    <!-- tabbar -->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="Contacts">
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
      selected: 'Contacts'
    }
  },
  components: {
  },
  created () {
  }
}
</script>
