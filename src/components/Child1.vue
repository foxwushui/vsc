<template>
    <div class="child1">
        <h1>{{msg}}</h1>
        <p v-if="show">我是child页面的p</p> 
    </div>
    
</template>

<script>
export default {
  name: 'child1',
  data () {
    return {
      msg: '中华人民共和国'
    }
  },
  computed: {
    show () {
      return this.$store.state.child.show
    }
  }
}
</script>

<style scoped>
h1{color: red;}
</style>