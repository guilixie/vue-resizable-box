# vue-resizable-box

## Introduction

A vue component, built up based on [Vue.js](https://cn.vuejs.org/) `v2.x`.

## Features

Collapsible, Resizable, Draggable, Extensible

## Installation

### npm or yarn (Recommended)

```bash
$ npm i vue-resizable-box --save
```
or
```bash
$ yarn add vue-resizable-box
```

### CDN

Include `vue-resizable-box` in your HTML file like this:

```html
<script src="https://cdn.jsdelivr.net/npm/vue-resizable-box@1.1.3/dist/vue-resizable-box.js"></script>
```

## Usage

### For Es6 (Recommended)

```vue
<template>
  <resizable-box :option="option">
    <div #left>
      <h2>left</h2>
    </div>
    <div #center>
      <h2>center</h2>
    </div>
    <div #right>
      <h2>right</h2>
    </div>
  </resizable-box>
</template>

<script>
import Vue from 'vue'
import ResizableBox from 'vue-resizable-box'
Vue.use(ResizableBox)

export default {
  name: 'Sample',
  data () {
    return {
      option: {
        left: {
          size: 1,
          buttons: [{ direction: 'right' }]
        },
        center: {
          size: 2,
          buttons: [{
            direction: 'left'
          }, {
            direction: 'right'
          }]
        },
        right: {
          size: 1,
          buttons: [{ direction: 'left' }]
        }
      }
    }
  }
}
</script>
```

### For Commonjs

```js
...
const Vue = require('vue').default
const ResizableBox = require('vue-resizable-box')
Vue.use(ResizableBox)
...
```

### AMD

```js
require.config({
  paths: {
    'vue': 'path/to/vue',
    'echarts': 'path/to/echarts',
    'vue-echarts': 'path/to/vue-ehcarts'
  }
})

require(['vue', 'vue-resizable-box'], function(Vue, VueResizableBox) {
    var option = {
        left: {
            size: 1,
            buttons: [{
                direction: 'right'
            }]
        },
        center: {
            size: 2,
            buttons: [{
                direction: 'left'
            }, {
                direction: 'right'
            }]
        },
        right: {
            size: 1,
            buttons: [{
                direction: 'left'
            }]
        }
    };

    Vue.use(VueResizableBox);

    new Vue({
        data: function() {
            return {
                option: option
            }
        },
        template: '<vue-resizable-box :option="option">\
          <div #left>left-content</div>\
          <div #center class="box-all"></div>\
          <div #right>right-content</div>\
        </vue-resizable-box>'
    }).$mount('#main');

});
```

### Global variable

Without any module system, the component is exposed as `window.VueECharts`.

```js
// register component to use
Vue.component('v-chart', VueECharts)
```

## Using the component

```vue
<template>
<v-chart :options="polar"/>
</template>

<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
  height: 100%;
}
</style>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'

export default {
  components: {
    'v-chart': ECharts
  },
  data () {
    let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }

    return {
      polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
    }
  }
}
</script>
```

See more examples [here](https://github.com/ecomfe/vue-echarts/tree/master/src/demo).

### Props

* `initOptions`

  Used to initialize ECharts instance.

* `theme`

  The theme used for current ECharts instance.

* `options`

  Used to update data for ECharts instance. Modifying this prop will trigger ECharts' `setOption` method.

  If you mutate the data bound to `options` while retaining the object reference, `setOption` will be called with `notMerge: false`. Otherwise, if you bind a new object to `options`, `setOption` will be called with `notMerge: true`.

  For example, if we have the following template:

  ```html
  <v-chart :options="data"/>
  ```

  Then:

  ```
  this.data = newObject // setOption(this.options, true)
  this.data.title.text = 'Trends' // setOption(this.options, false)
  ```

* `group`

  This prop is automatically bound to the same prop of the ECharts instance.

* `autoresize` (default: `false`)

  This prop indicates ECharts instance should be resized automatically whenever its root is resized.

* `manual-update` (default: `false`)

  For performance critical scenarios (having a large dataset) we'd better bypass Vue's reactivity system for `options` prop. By specifying `manual-update` prop with `true` and not providing `options` prop, the dataset won't be watched any more. After doing so, you need to retrieve the component instance with `ref` and manually call `mergeOptions` method to update the chart.
