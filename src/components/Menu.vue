<template>
    <div class="Menu">
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      msg: '123'
    }
  },
  created () {
    document.title = 'menu页面'
  }
}
</script>

<style>

</style>

