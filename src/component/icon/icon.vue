<!--
 * @Author: chl
 * @Date: 2020-04-26 15:45:28
 * @LastEditTime: 2020-04-28 14:59:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\component\icon\icon.vue
 -->
<template>
    <svg  @click="clickHandler"
         class="c-icon" aria-hidden="true" :style="{color}">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import './svg'
export default {
  name: 'c-icon',
  props: ['name', 'color', 'hoverColor'],
  methods: {
    clickHandler () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="css" scoped>
.c-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  animation: spin 1s infinite linear;
}

</style>
