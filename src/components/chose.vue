<template>
  <div class="chose">
    <!-- 选择银行账户 -->
    <div v-for="n in 10" @click="chose_click(n)">{{ n }}</div>
  </div>  
</template>

<script>
export default {
  name: 'chose',
  data () {
    return {}
  },
  methods: {
    chose_click (n) {
      this.$store.state.user.chose = n
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
