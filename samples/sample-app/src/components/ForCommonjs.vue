<template>
  <vue-resizable-box :option="option"></vue-resizable-box>
</template>
<script>
const vueResizableBox = require('vue-resizable-box')

export default {
  name:'ForCommonjs',
  components: {
    vueResizableBox
  },
  data () {
    return {
      option: {

      }
    }
  }
}
</script>
