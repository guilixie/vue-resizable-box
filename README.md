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

  Used to initialize boxes arrangement.There are two modes,`horizontal` and `vertical`, default mode is `horizontal`.

* `resizable`

  Used to define if the box is resizable,Default `true`.

* `option`

  Used to set every box's configuration.It's an Object,which it's `keys` are `slots` of every box,and it's `values` are configurations of every box.The `values` could be `number` or `string` or `object`,but you must config consistently.

  You can see as follows:

  |option|type|value|
  |:--:|:--:|:--:|
  |`key`|string|slots of boxes, eg: `left`|
  |`value`|string <br> number <br> object| eg: `100px`, `5rem` <br>eg: `1`, `10`<br> as follows|

  ```js
  left: { // slot名称一致
    fullscreen: false, // 是否启用全屏按钮,默认 false
    size: 1, // 尺寸比例，必须配置
    buttons: [{
      direction: 'right', // 方向 left right up down，必须配置
      icon: 'icon-arrow icon-arrow-right', // 图标，有默认，可不配置
      position: {
        right: '-1px'
      }, // 相对于本slot绝对定位位置，有默认，可不配置
      isExpanded: true // 默认本slot展开，有默认，可不配置
    }] // 可不配置 buttons
  }
  ```

  For example, the default option as follows:

  ```js
  {
    left: {
      fullscreen: false,
      size: 1,
      buttons: [{
        direction: 'right',
        icon: 'icon-arrow icon-arrow-right',
        position: {
          right: '-1px'
        },
        isExpanded: true
      }]
    },
    right: {
      fullscreen: false,
      size: 1,
      buttons: [{
        direction: 'left',
        icon: 'icon-arrow icon-arrow-left',
        position: {
          left: '-1px'
        },
        isExpanded: true
      }]
    }
  }
  ```
