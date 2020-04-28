<!--
 * @Author: chl
 * @Date: 2020-04-27 09:58:26
 * @LastEditTime: 2020-04-27 11:16:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\sticky\sticky.vue
 -->
<template>
  <div ref="stickyItem">
    <div class="slot-wrapper" 
         :class="sticky ? 'sticky' : ''" 
         :style="{top,left}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "chl-sticky",
  props:{
    offsetTop:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      sticky:false,  //是否定位显示
      top:0,
      left:0,
      limitY:0,  //触发距离
      g_scrollHandler: undefined
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    // 初始化
    init(){
      this.addListener()
      this.initDate()
    },
    addListener(){
      this.g_scrollHandler= this.scrollHandler.bind(this)
      window.addEventListener('scroll',this.g_scrollHandler)
    },
    initDate(){
      // getBoundingClientRect() 返回的结果是包含完整元素的最小矩形，并且拥有left, top, right, bottom, x, y, width, 和 height这几个以像素为单位的只读属性用于描述整个边框。
      let { left,top }= this.$refs.stickyItem.getBoundingClientRect()
      this.limitY = top - this.offsetTop
      this.left = left + 'px'
      this.top = this.offsetTop + 'px'
    },
    //滚动距离
    scrollHandler(){
      if(window.scrollY > this.limitY){
        this.sticky = true
      }else{
        this.sticky = false
      }
    }
  }
};
</script>
<style lang="css" scoped>
.slot-wrapper.sticky {
  position: fixed;
  z-index: 99;
}
</style>
