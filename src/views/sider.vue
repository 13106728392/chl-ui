<!--
 * @Author: chl
 * @Date: 2020-04-26 15:45:28
 * @LastEditTime: 2020-10-20 20:44:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\component\home.vue
 -->
<template>
  <div class="siderBOX">
    <router-link to="/" class="title">首页介绍</router-link>
    <div class="list">
      <h4>组件列表</h4>
      <ul>
        <li>
          <router-link to="/Button">按钮 Button</router-link>
        </li>
        <li>
          <router-link to="/Input">输入框 Input</router-link>
        </li>
        <li>
          <router-link to="/Collapse">折叠面板 Collapse</router-link>
        </li>
        <li>
          <router-link to="/Toast">信息 Toast</router-link>
        </li>
        <li>
          <router-link to="/Tab">切换面板 Tab</router-link>
        </li>
        <li>
          <router-link to="/From">表单 From</router-link>
        </li>
        <li>
          <router-link to="/Carousel">轮播图 Carousel</router-link>
        </li>
        <li>
          <router-link to="/Sticky">吸顶 Sticky</router-link>
        </li>
        <li>
          <router-link to="/Table">表格 Table</router-link>
        </li>
        <li>
          <router-link to="/Dialog">弹窗 Dialog</router-link>
        </li>
           <li>
          <router-link to="/Modal">提示框 Modal</router-link>
        </li>
     
           <li>
          <router-link to="/StarrySky">星星 StarrySky</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "sider",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="css" scoped>
.siderBOX {
  width: 200px;
  height: 100%;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
}
.siderBOX .list h4 {
  font-size: 20px;
}

.siderBOX .title {
  font-size: 30px;
  color: red;
  margin-bottom: 40px;
}

.siderBOX .list ul {
  padding: 0 10px;
}
.siderBOX .list li {
  width: 100%;
  height: 60px;
  line-height: 60px;
  transition: 200ms;
}
.siderBOX .list li:hover {
  background-color: blue;
}
.siderBOX .list li a {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.siderBOX .list li:hover a {
  color: #fff;
}
</style>
