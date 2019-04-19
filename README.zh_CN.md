# vue-resizable-box

## 说明

一个Vue组件, 基于 [Vue.js](https://cn.vuejs.org/) `v2.x`构建。

## 特性

可折叠的, 可变大小, 可拖拽的, 可扩展的

## 安装

### npm 或 yarn (推荐)

```bash
$ npm i vue-resizable-box --save
```
或
```bash
$ yarn add vue-resizable-box
```

### CDN

在你的HTML文件中引入`vue-resizable-box`，就像这样:

```html
<script src="https://cdn.jsdelivr.net/npm/vue-resizable-box/dist/vue-resizable-box.js"></script>
```

## 使用方法

### For Es6 (推荐)

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

#### ⚠️ 注意

`<template #center>` 是 `<template v-slot="center">`的简写形式, 但是你需要 `vue 2.6+`。更多细节说明，请参考Vue官方文档[插槽-Vue.js](https://cn.vuejs.org/v2/guide/components-slots.html)

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

举个:chestnut:, [amd 示例](https://guilixie.github.io/vue-resizable-box/samples/amd-sample/index.html)

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

举个:chestnut:, [示例](https://guilixie.github.io/vue-resizable-box/samples/sample.html)

> 查看更多示例 [点击这里](https://guilixie.github.io/vue-resizable-box/samples/sample-app/dist/index.html).

### 属性

* `mode`

  用于初始化盒子排列方式。支持两种模式,`horizontal`和`vertical`, 默认模式是`horizontal`。

* `resizable`

  定义盒子的尺寸是否可变,默认是`true`.

* `option`

  用于设置每个盒子的配置。它是一个对象，对象的属性对应各盒子的插槽`slot`，对象的某个属性的值对应着它的配置。属性的值可以是`number`或者 `string`或者`object`，但各个盒子的配置需要一致。

  你可以参考如下:

  |选项|类型|值|
  |:--:|:--:|:--:|
  |对象的属性`key`|string|各盒子的插槽名, eg: `left`|
  |对象的值`value`|string <br> number <br> object| eg: `100px`, `5rem` <br>eg: `1`, `10`<br> 示例如下|

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

  举个:chestnut:，默认配置如下:

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
