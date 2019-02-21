<template>
  <div id="app" class="box-all">
    <ul class="router-container">
      <li><a href="javascript:;" @click="changeComp('ForEs6')">ForEs6</a></li>
      <li><a href="javascript:;" @click="changeComp('ForCommonjs')">ForCommonjs</a></li>
    </ul>
    <div class="view-container">
      <component :is="comp"></component>
    </div>
  </div>
</template>

<script>
import ForEs6 from './components/ForEs6.vue'
import ForCommonjs from './components/ForCommonjs.vue'

export default {
  name: 'app',
  components: {
    ForEs6,
    ForCommonjs
  },
  data () {
    return {
      comp: 'ForEs6'
    }
  },
  methods: {
    changeComp (comp) {
      this.comp = comp
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

.router-container{
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 200px;
    margin: 0 auto;
    padding: 20px;
}

.view-container{
    border: 1px solid #ccc;
    height: calc(100% - 60px);
}
</style>
