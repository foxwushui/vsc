<template>
  <div class="index">
    <!-- tabcontents -->
    <mt-tab-container v-model="selected" swipeable>
      <mt-tab-container-item id="Contacts">
        <Contacts></Contacts>
      </mt-tab-container-item>
      <mt-tab-container-item id="Business">
        <Business></Business>
      </mt-tab-container-item>
      <mt-tab-container-item id="Info">
        <Info></Info>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- tabbar -->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="Contacts">
        <img src="http://192.168.3.50:8001/Content/images/tms_02.png" slot="icon">
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
import Contacts from './Contacts'
import Business from './Business'
import Info from './Info'

export default {
  name: 'index',
  data () {
    return {
      selected: 'Contacts'
    }
  },
  components: {
    Contacts, Business, Info
  },
  methods: {
  },
  created () {
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
