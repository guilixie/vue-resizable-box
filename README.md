# vue-resizable-box

## Introduction

A vue component, built up based on [Vue.js](https://cn.vuejs.org/) `v2.6`+.

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
    <template #left>
      <div>
        <h2>left</h2>
      </div>
    </template>
    <template #center>
      <div>
        <h2>center</h2>
      </div>
    </template>
    <template #right>
      <div>
        <h2>right</h2>
      </div>
    </template>
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
    vue: ['/path/vue'],
    'vue-resizable-box': ['/path/vue-resizable-box']
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
      <template #left>\
        <div>left-content</div>\
      </template>\
      <template #center>\
        <div>right-content</div>\
      </template>\
      <template #right>\
        <div>right-content</div>\
      </template>\
    </vue-resizable-box>'
  }).$mount('#main');
});
```

For example, [amd demo](https://github.com/guilixie/vue-resizable-box/blob/master/samples/amd-sample/index.html)

### For CDN

```html
<head>
  <style>
    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    .box-all {
        height: 100%;
    }
  </style>
</head>
<body>
  <div id="main"></div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.6/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue-resizable-box/dist/vue-resizable-box.js"></script>
  <script>
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

    var option1 = {
      top: {
        size: 1,
        buttons: [{
          direction: 'down'
        }]
      },
      center: {
        size: 1,
        buttons: [{
          direction: 'up'
        }, {
          direction: 'down'
        }]
      },
      bottom: {
        size: 1,
        buttons: [{
          direction: 'up'
        }]
      }
    };

    new Vue({
      data: function() {
        return {
          option: option,
          option1: option1
        }
      },
      template: '<vue-resizable-box :option="option">\
        <template #left>\
          <div>left-content</div>\
        </template>\
        <template #center class="box-all">\
          <vue-resizable-box :option="option1" mode="vertical"></vue-resizable-box>\
        </template>\
        <template #right>\
          <div>right-content</div>\
        </template>\
      </vue-resizable-box>'
    }).$mount('#main');
  </script>
</body>
```

For example, [demo](https://github.com/guilixie/vue-resizable-box/blob/master/samples/sample.html)

> See more examples [here](https://github.com/guilixie/vue-resizable-box/tree/master/samples/sample-app/dist/index.html).

### Props

* `mode`

  Used to initialize Boxes arrangement.There are two modes,`horizontal` and `vertical`, default mode is `horizontal`.

* `resizable`

  Used to define if the box is resizable,Default `true`.

* `option`

  Used to set boxes.

  For example, if we have the following template:

  ```html
  <v-chart :options="data"/>
  ```

  Then:

  ```
  this.data = newObject // setOption(this.options, true)
  this.data.title.text = 'Trends' // setOption(this.options, false)
  ```
