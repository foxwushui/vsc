<template>
  <div class="addContacts">
    添加页面
  </div>
</template>

<script>
export default {
  name: 'addContacts',
  data () {
    return {}
  },
  created () {
    this.dd.biz.navigation.setRight({
      show: false
    })
  }
}
</script>

<style>

</style>
