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
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
