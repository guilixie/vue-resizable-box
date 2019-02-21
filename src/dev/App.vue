<template>
<div id="app" class="box-all">
   <resizable-box :option="option">
      <div slot="left">left-content</div>
      <div slot="center" class="box-all">
         <resizable-box :option="option1" mode="vertical"></resizable-box>
      </div>
      <div slot="right">right-content</div>
  </resizable-box>
</div>
</template>
<script>
import ResizableBox from '@/ResizableBox'

export default {
  name: 'App',
  components: { ResizableBox },
  data () {
    return {
      option: {
         left: {
          size: 1,
          buttons: [{direction: 'right'}]
        },
        center: {
          size: 1,
          buttons:[{
            direction: 'left'
          },{
            direction: 'right'
          }]
        },
        right: {
          size: 1,
          buttons: [{direction: 'left'}]
        }
      },
      option1:{
        top: {
          size: 1,
          buttons: [{
            direction: 'up'
          }]
        },
        bottom: {
          size: 1,
          buttons: [{
            direction: 'down'
          }]
        }
      }
    }
  }
}
</script>
<style>
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.box-all {
    height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
