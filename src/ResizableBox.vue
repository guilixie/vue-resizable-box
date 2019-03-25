<template>
  <div class="resizable-box">
    <div class="content-wrap" :class="mode">
      <div v-for="(opt, slot, index) in option" :style="{[mode==='horizontal' ? 'width' : 'height']: (opt.size * 100) / totalSize + '%'}" :key="slot" class="section-wrap" :ref="`section_wrap_${slot}`">
        <div class="show-box" v-show="opt.size != 0">
          <div class="expand-btn-box" v-for="(btn, idx) in opt.buttons" :key="`buttons_${idx}`" :style="btn.position" :class="[btn.direction, !btn.isExpanded ? 'not-expand' : '']" @click="switchBox(btn, idx, slot)">
            <i :class="btn.icon" class="expand-btn" />
          </div>
          <slot :name="slot"></slot>
        </div>
         <div class="resize-bar start-resize-bar" :ref="`${slot}_${index}_start`" v-if="resizable && index!==0" @mousedown="getStartPosition($event, { type: 'start', slot, index})"></div>
      <div class="resize-bar end-resize-bar" :ref="`${slot}_${index}_end`" v-if="resizable && index!==slotNum-1" @mousedown="getStartPosition($event, {type: 'end', slot, index})"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResizableBox',
  props: {
    mode: {
      type: String,
      default: 'horizontal'
    }, // 模式：'horizontal'、'vertical'
    resizable: {
      type: Boolean,
      default: true
    }, // 可改变尺寸
    option: {
      type: Object,
      default () {
        return {
          left: { // slot名称一致
            size: 1, // 尺寸比例
            buttons: [{
              direction: 'right', // 方向 left right up down
              icon: 'icon-arrow icon-arrow-right', // 图标
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
              icon: 'icon-arrow icon-arrow-left',
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
      activeBarClass: 'is-active', // 拖动条激活的class
      resizeState: {
        type: '',
        slot: '',
        index: -1
      }, // 记录状态
      positionArr: [], // 鼠标位置数组 [start, end]
      infoRecords: {}, // 记录尺寸比例和按钮位置
      defaultOpt: {
        directions: ['left', 'right', 'up', 'down'],
        icon: {
          left: 'icon-arrow icon-arrow-left',
          right: 'icon-arrow icon-arrow-right',
          up: 'icon-arrow icon-arrow-up',
          down: 'icon-arrow icon-arrow-down'
        },
        position: {
          left: { left: '-1px' },
          right: { right: '-1px' },
          up: { top: '-1px' },
          down: { bottom: '-1px' }
        }
      }, // 默认配置，根据direction取用
      clientMap: { horizontal: 'clientWidth', vertical: 'clientHeight' },
      sizeMap: { horizontal: 'width', vertical: 'height' },
      lPosMap: { horizontal: 'left', vertical: 'top' },
      rPosMap: { horizontal: 'right', vertical: 'bottom' }
    }
  },
  computed: {
    slotArr () {
      return Object.keys(this.option)
    },
    slotNum () {
      return this.slotArr.length
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
  watch: {
    option (newVal) {
      this.recordInfo(newVal)
    }
  },
  created () {
    this.recordInfo()
  },
  beforeDestroy () {
    this.clearEvent()
  },
  methods: {
    recordInfo (option = this.option) {
      // 根据slot名缓存尺寸和btn配置信息
      Object.entries(option).forEach(item => {
        const [slot, { size, buttons = [] } = {}] = item
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
    },
    computedPercent (sizeRes) {
      this.slotArr.forEach(slot => {
        if (sizeRes[slot] === undefined) {
          const slotEl = this.$refs[`section_wrap_${slot}`]
          sizeRes[slot] = slotEl[0][this.clientMap[this.mode]]
        }
        this.option[slot].size = sizeRes[slot]
      })
      this.recordInfo()
    },
    changeBoxSize () {
      const {type, slot} = this.resizeState
      if (this.positionArr.length <= 1) return
      const [{x: startX, y: startY}, {x: endX, y: endY}] = this.positionArr
      const deta = this.mode === 'horizontal' ? endX - startX : endY - startY
      if (deta === 0) return
      const direction = type === 'start' ? 'left' : 'right'
      const tSlot = this.getTargetSlot(slot, direction)
      const el = this.$refs[`section_wrap_${slot}`]
      const tEl = this.$refs[`section_wrap_${tSlot}`]
      const sizeRes = {
        [slot]: el[0][this.clientMap[this.mode]] + (type === 'start' ? -deta : deta) + 1,
        [tSlot]: tEl[0][this.clientMap[this.mode]] + (type === 'start' ? deta : -deta) + 1
      }
      this.computedPercent(sizeRes)
    },
    getStartPosition (ev, resizeState) {
      this.positionArr = [{x: ev.pageX, y: ev.pageY}]
      this.resizeState = resizeState
      document.addEventListener('mousemove', this.moveToEndPosition)
      document.addEventListener('mouseup', this.handleMoveUp)
    },
    moveToEndPosition (ev) {
      const {type, slot, index} = this.resizeState
      const len = this.positionArr.length
      if (len === 0) return
      const [{x, y}] = this.positionArr
      const deta = this.mode === 'horizontal' ? ev.pageX - x : ev.pageY - y
      const bar = this.$refs[`${slot}_${index}_${type}`]
      const className = bar[0].className
      className.indexOf(this.activeBarClass) === -1 && (bar[0].className += ` ${this.activeBarClass}`)
      type === 'start' ? bar[0].style[this.lPosMap[this.mode]] = deta - 1 + 'px' : bar[0].style[this.rPosMap[this.mode]] = -deta - 1 + 'px'
      if (deta === 0) return
      len > 1 && this.positionArr.pop()
      this.positionArr.push({x: ev.pageX, y: ev.pageY})
    },
    handleMoveUp () {
      this.changeBoxSize()
      this.resetBarPosition()
      this.clearPositionArr()
      this.clearEvent()
    },
    resetBarPosition () {
      const {type, slot, index} = this.resizeState
      const bar = this.$refs[`${slot}_${index}_${type}`]
      const className = bar[0].className
      className.indexOf(this.activeBarClass) > -1 && (bar[0].className = bar[0].className.replace(` ${this.activeBarClass}`, ''))
      type === 'start' ? bar[0].style[this.lPosMap[this.mode]] = '-1px' : bar[0].style[this.rPosMap[this.mode]] = '-1px'
    },
    clearPositionArr () {
      this.positionArr = []
    },
    clearEvent () {
      document.removeEventListener('mousemove', this.moveToEndPosition)
      document.removeEventListener('mouseup', this.handleMoveUp)
    }
  }
}
</script>
<style lang="stylus" scoped>
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
        font-size 13px
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
    .resize-bar
      position absolute
      z-index 1998
  .horizontal
    flex-direction row
    &>.section-wrap
      height 100%
      min-height 100px
      transition width 0.4s ease
      &>.resize-bar
        width 3px
        height 100%
        top 0
        cursor col-resize
      &>.start-resize-bar
        left -1px
        &.is-active
          border-left 1px solid #ebeef5
      &>.end-resize-bar
        right -1px
        &.is-active
          border-right 1px solid #ebeef5
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
      &>.resize-bar
        width 100%
        height 3px
        left 0
        cursor row-resize
      &>.start-resize-bar
        top -1px
        &.is-active
          border-top 1px solid #ebeef5
      &>.end-resize-bar
        bottom -1px
        &.is-active
          border-bottom 1px solid #ebeef5
      &>.show-box
        &>.expand-btn-box
          flex-direction column
          width 42px
          height 14px
          left 0
          right 0
    &>.section-wrap + .section-wrap
      border-top 1px solid #ebeef5


.icon-arrow
	position relative
	width 0
	height 0
	border 6px solid transparent

	&:after
		content ''
		display inline-block
		position absolute
		width 0
		height 0
		border 6px solid transparent

.icon-arrow-left
	border-left-width 0
	border-right-color #fff

	&:after
		left 2px
		top -6px
		border-left-width 0
		border-right-color #409eff

.icon-arrow-right
	border-right-width 0
	border-left-color #fff

	&:after
		right 2px
		top -6px
		border-right-width 0
		border-left-color #409eff

.icon-arrow-up
	border-top-width 0
	border-bottom-color #fff

	&:after
		top 2px
		left -6px
		border-top-width 0
		border-bottom-color #409eff

.icon-arrow-down
	border-bottom-width 0
	border-top-color #fff

	&:after
		bottom 2px
		left -6px
		border-bottom-width 0
		border-top-color #409eff

</style>
