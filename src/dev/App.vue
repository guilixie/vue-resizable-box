<template>
  <div id="app" class="box-all">
    <resizable-box :option="option">
      <template #left>
        <div class="box-all over-auto">
          <h2>方圆几里</h2>
          <p>
            感觉很诚恳 是好事
            <br>
            不需要发誓 那么幼稚
          </p>
          <p>
            本以为可以 就这样随你
            <br>
            反正我也无处可去
          </p>
          <p>
            我怕太负责任的人 因为他随时会牺牲
            <br>
            爱不爱都可以 我怎样都依你
            <br>
            连借口 我都帮你寻
          </p>
          <p>
            与其在你不要的世界里 不如痛快把你忘记
            <br>
            这道理谁都懂 说容易 爱透了还要嘴硬
            <br>
            我宁愿 留在你方圆几里 我的心 要不回就送你
            <br>
            因为我爱你 和你没关系
          </p>
          <p>感觉会压抑 的样子
            <br>
            勉强 也没什么意思
            <br>
            我不算很自私 也越来越懂事
            <br>
            爱你只是我的事
          </p>
          <p>
            与其在你不要的世界里
            <br>
            不如痛快把你忘记
            <br>
            这道理谁都懂 说容易 爱透了还要嘴硬
            <br>
            我宁愿 留在你方圆几里
            <br>
            至少能感受你的悲喜
            <br>
            在你需要我的时候 就能陪你
          </p>
          <p>
            我在你 不要的世界里
            <br>
            何苦不找个人来代替
            <br>
            可惜我 谁劝都不停
            <br>
            我宁愿 留在你方圆几里
            <br>
            我的心 要不回就送你
            <br>
            爱不爱都可以 我怎样都依你
            <br>
            因为我爱你 和你没关系
          </p>
          <p>
            我的爱 扩散在方圆几里
            <br>
            近的能 听见你的呼吸
            <br>
            只要你转身 我就在这里
          </p>
        </div>
      </template>
      <template #center>
        <div class="box-all">
          <resizable-box :option="option1" mode="vertical">
            <template #top>
              <div class="box-all flex-middle over-auto">
                <h2>年少有为</h2>
              </div>
            </template>
            <template #center>
              <div class="box-all flex-middle over-auto">
                <h2>光年之外</h2>
              </div>
            </template>
            <template #bottom>
              <div class="box-all flex-middle over-auto">
                <h2>可不可以</h2>
              </div>
            </template>
          </resizable-box>
        </div>
      </template>
      <template #right>
        <div class="box-all over-auto">
          <h2>天份</h2>
          <p>
            用怀念的方式 在一起的样子
            <br>
            距离一尺 秋叶不止 确认一次
            <br>
            用投入的方式 你离开的样子
            <br>
            松开手指 欲言又止 确认了几次
          </p>
          <p>
            所以爱过的人倾诉给麻木的城市
            <br>
            在夜里疼痛时抚平你的幼稚
            <br>
            可是谁没有一次不顾一切的坚持
            <br>
            话要适可而止 挽留的举止
          </p>
          <p>
            我有点疼但是我还能忍
            <br>
            是不是爱你我算还有点天份
            <br>
            可能我太认真 你已经不算坏人
            <br>
            我有点疼但是我还能忍
            <br>
            是不是习惯了能换一点缘份
            <br>
            让沉默的秒针 代替我的疑问
          </p>
          <p>
            所以爱过的人倾诉给麻木的城市
            <br>
            在夜里疼痛时抚平你的幼稚
            <br>
            可是谁没有几次不顾一切的争执
            <br>
            要学会点到为止 直到分开为止
          </p>
          <p>
            我有点疼但是我还能忍
            <br>
            是不是爱你我算还有点天份
            <br>
            可能我太认真 你已经不算坏人
            <br>
            我有点疼但是我还能忍
            <br>
            是不是习惯了能换一点缘份
            <br>
            让沉默的秒针 代替我的疑问
          </p>
        </div>
      </template>
    </resizable-box>
  </div>
</template>
<script>
import ResizableBox from '../../index.js'
import Vue from 'vue'
Vue.use(ResizableBox)

export default {
  name: 'App',
  components: {},
  data () {
    return {
      option: {
        left: {
          size: 1,
          // fullscreen: true,
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
          fullscreen: false,
          buttons: [{ direction: 'left' }]
        }
      },
      option1: {
        top: {
          size: 1,
          fullscreen: true,
          buttons: [{
            direction: 'down'
          }]
        },
        center: {
          size: 1,
          fullscreen: true,
          buttons: [{
            direction: 'up'
          }, {
            direction: 'down'
          }]
        },
        bottom: {
          size: 1,
          fullscreen: true,
          buttons: [{
            direction: 'up'
          }]
        }
      }
    }
  }
}
</script>
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

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height: 1.5;
  font-size: 16px;
}

h2{
  margin: 0;
  padding-top: 15px;
}

.flex-middle{
  display: flex;
  justify-content: center;
  align-items: center;
}

.over-auto{
  overflow: auto;
}

</style>
