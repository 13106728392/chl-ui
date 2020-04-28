<!--
 * @Author: your name
 * @Date: 2020-04-28 09:24:37
 * @LastEditTime: 2020-04-28 16:51:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\tab\tab-body.vue
 -->
<template>
  <div class="chl-tab-body">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name:'chl-tab-body'
}
</script>

<style>
  .chl-tab-body{
    padding: 1em;
  }
</style>
