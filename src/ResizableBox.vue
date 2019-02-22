<template>
  <div class="resizable-box">
    <div class="content-wrap" :class="mode">
      <div v-for="(val, key) in option" :style="{[mode==='horizontal' ? 'width' : 'height']: (val.size * 100) / totalSize + '%'}" :key="key" class="section-wrap">
        <div class="show-box" v-show="val.size != 0">
          <div class="expand-btn-box" v-for="(btn, idx) in val.buttons" :key="`buttons_${idx}`" :style="btn.position" :class="[btn.direction, !btn.isExpanded ? 'not-expand' : '']" @click="switchBox(btn, idx, key)">
            <i :class="btn.icon" class="expand-btn"  />
          </div>
          <slot :name="key"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './iconfont.css'

export default {
  name: 'ResizableBox',
  props: {
    mode: {
      type: String,
      default: 'horizontal'
    }, // 模式：'horizontal'、'vertical'
    option: {
      type: Object,
      default () {
        return {
          left: { // slot名称一致
            size: 1, // 尺寸比例
            buttons: [{
              direction: 'right', // 方向 left right up down
              icon: 'iconfont icon-ios-arrow-forward', // 图标
              position: {
                right: '-1px'
              }, // 相对于本slot绝对定位位置
              isExpanded: true // 默认本slot展开
            }]
          },
          right: {
            size: 1,
            buttons: [{
              direction: 'left',
              icon: 'iconfont icon-ios-arrow-back',
              position: {
                left: '-1px'
              },
              isExpanded: true
            }]
          }
        }
      } // 可配置尺寸比例和按钮位置
    }
  },
  data () {
    return {
      infoRecords: {}, // 记录尺寸比例和按钮位置
      defaultOpt: {
        directions: ['left', 'right', 'up', 'down'],
        icon: {
          left: 'iconfont icon-ios-arrow-back',
          right: 'iconfont icon-ios-arrow-forward',
          up: 'iconfont icon-ios-arrow-up',
          down: 'iconfont icon-ios-arrow-down'
        },
        position: {
          left: { left: '-1px' },
          right: { right: '-1px' },
          up: { top: '-1px' },
          down: { bottom: '-1px' }
        }
      } // 默认配置，根据direction取用
    }
  },
  computed: {
    slotArr () {
      return Object.keys(this.option)
    },
    totalSize () {
      let total = 0
      Object.values(this.option).forEach(item => {
        let tmp = Number(item.size)
        total += Number.isNaN(tmp) ? 0 : tmp
      })
      return total
    }
  },
  created () {
    this.recordInfo()
  },
  methods: {
    recordInfo () {
      // 根据slot名缓存尺寸和btn配置信息
      Object.entries(this.option).forEach(item => {
        const [slot, {size, buttons = []} = {}] = item
        this.infoRecords[slot] = {
          size: size,
          buttons: buttons.map(btn => {
            // 设置默认配置
            this.setDefaultOpt(btn)
            return JSON.parse(JSON.stringify(btn))
          })
        }
      })
    },
    setDefaultOpt (btn) {
      if (!btn.hasOwnProperty('direction') || !this.defaultOpt.directions.includes(btn.direction)) {
        throw new Error('请配置direction，使用left、right、up、down表示！')
      }
      !btn.hasOwnProperty('isExpanded') && this.$set(btn, 'isExpanded', true)
      !btn.hasOwnProperty('icon') && this.$set(btn, 'icon', this.defaultOpt.icon[btn.direction])
      !btn.hasOwnProperty('position') && this.$set(btn, 'position', this.defaultOpt.position[btn.direction])
    },
    getTargetSlot (slot, direction) {
      const idx = this.slotArr.findIndex(item => item === slot)
      const increase = idx + 1
      const decrease = idx - 1
      const len = this.slotArr.length
      const o = {
        left: decrease < 0 ? increase : decrease,
        right: increase > len - 1 ? decrease : increase,
        up: decrease < 0 ? increase : decrease,
        down: increase > len - 1 ? decrease : increase
      }
      return this.slotArr[o[direction]]
    },
    switchBox (btn, idx, slot) {
      const tSlot = this.getTargetSlot(slot, btn.direction)
      this.option[slot].size = btn.isExpanded ? (this.option[slot].size + this.option[tSlot].size) : this.infoRecords[slot].size
      this.option[tSlot].size = btn.isExpanded ? 0 : this.infoRecords[tSlot].size
      btn.isExpanded = !btn.isExpanded
    }
  }
}
</script>
<style lang="stylus">
.resizable-box
  width 100%
  height 100%
  .content-wrap
    display flex
    box-sizing border-box
    width 100%
    height 100%
    min-height 100px
    .section-wrap
      position relative
      box-sizing border-box
    .show-box
      box-sizing border-box
      height 100%
      transition all 0.4s ease
    .expand-btn-box
      position absolute
      margin auto
      display flex
      justify-content center
      align-items center
      background #409eff
      border-radius 4px
      box-sizing border-box
      cursor pointer
      overflow hidden
      z-index 1998
      transition transform 0.4s ease
      .expand-btn
        font-size 14px
        color #fff
      &:hover
        opacity 0.9
      &:active
        opacity 0.8
    .left
      border-radius 0 4px 4px 0
    .right
      border-radius 4px 0 0 4px
    .down
      border-radius 4px 4px 0 0
    .up
      border-radius 0 0 4px 4px
    .not-expand
      transform rotate(180deg)
      transform-origin 50% 50%
      &.left
        border-radius 4px 0 0 4px
      &.right
        border-radius 0 4px 4px 0
      &.down
        border-radius 0 0 4px 4px
      &.up
        border-radius 4px 4px 0 0
  .horizontal
    flex-direction row
    &>.section-wrap
      height 100%
      min-height 100px
      transition width 0.4s ease
      &>.show-box
        &>.expand-btn-box
          width 14px
          height 42px
          top 0
          bottom 0
    &>.section-wrap + .section-wrap
      border-left 1px solid #ebeef5
  .vertical
    flex-direction column
    &>.section-wrap
      width 100%
      transition height 0.4s ease
      &>.show-box
        &>.expand-btn-box
          flex-direction column
          width 42px
          height 14px
          left 0
          right 0
    &>.section-wrap + .section-wrap
      border-top 1px solid #ebeef5
</style>
