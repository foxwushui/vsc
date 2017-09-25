<template>
    <div class="Menu">
        <h1>{{msg}}</h1>
<child></child>
    </div>
</template>

<script>
import child from './Child1'

export default {
  name: 'Menu',
  data () {
    return {
      msg: '123'
    }
  },
  created () {
    document.title = 'menu页面'
  },
  components: {
    child
  }
}
</script>
