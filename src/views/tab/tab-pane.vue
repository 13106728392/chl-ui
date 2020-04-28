<!--
 * @Author: your name
 * @Date: 2020-04-28 09:45:11
 * @LastEditTime: 2020-04-28 15:27:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\tab\tab-pane.vue
 -->
<template>
    <div v-show="visible">
       <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'chl-tab-pane',
  inject: ['eventBus'],
  props: {
    name: {
      type: String
    }
  },
  data () {
    return {
      visible: true
    }
  },
  created () {
    this.eventBus.$on('update:selected', (val) => {
      this.visible = val === this.name
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
