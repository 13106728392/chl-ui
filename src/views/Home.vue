<!--
 * @Author: chl
 * @Date: 2020-04-26 15:45:28
 * @LastEditTime: 2020-08-26 14:50:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\component\home.vue
 -->
<template>
  <div class="bigBOX">
    <sider/>
    <router-view class="showBox" />
  </div>
</template>
<script>
import sider from "../views/sider";
export default {
  name: "home",
  components: {
    sider,
  },
  data() {
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style lang="css" scoped>
.bigBOX {
  width: 1000px;
  min-height: 800px;
  background-color: #fff;
  margin: 0 auto;
}
.showBox {
  margin: 10px 0;
}
</style>
