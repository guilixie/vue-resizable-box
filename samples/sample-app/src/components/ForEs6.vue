<template>
  <resizable-box :option="option">
    <div slot="left">left-content</div>
    <div slot="right">right-content</div>
  </resizable-box>
</template>
<script>
import Vue from 'vue'
import ResizableBox from 'vue-resizable-box'
Vue.use(ResizableBox)

export default {
  name:'ForEs6',
  components: {},
  data () {
    return {
      option: {
         left: {
          size: 1,
          buttons: [{direction: 'right'}]
        },
        right: {
          size: 1,
          buttons: [{direction: 'left'}]
        }
      }
    }
  }
}
</script>
