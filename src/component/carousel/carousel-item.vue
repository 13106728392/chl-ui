<!--
 * @Author: chl
 * @Date: 2020-05-07 11:00:47
 * @LastEditTime: 2020-05-11 15:49:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\component\carousel\carousel-item.vue
 -->
<template>
  <transition name="carousel">
    <div class="carousel-item" v-show="visible" :class="{'reverse':this.reverse}" :style="`height:${height}`">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "c-carousel-item",
  props: {
    name: {
      type: String
    }
  },
  data() {
    return {
      selected: "",
      reverse: false,
      height:''
    };
  },
  computed: {
    visible() {
      return this.selected === this.name;
    }
  }
};
</script>
<style scoped>
.carousel-item{
  background-color: #F2F6FC;
  width: 500px;
  
  }
.carousel-leave-active {
  position: absolute;
  left: 0;
  top: 0;
}

.carousel-enter-active,
.carousel-leave-active {
  transition: all 1s;
}

.carousel-enter {
  transform: translateX(100%);
  opacity: 0;
}

.reverse.carousel-enter {
  transform: translateX(-100%);
}
.reverse.carousel-leave-to {
  transform: translateX(100%);
}

.carousel-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
