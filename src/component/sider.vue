<!--
 * @Author: your name
 * @Date: 2020-04-26 15:45:28
 * @LastEditTime: 2020-10-20 20:44:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\home.vue
 -->
<template>
  <div class="siderBOX">
    <router-link to="/" class="title">首页介绍</router-link>
    <div class="list">
      <h4>组件列表</h4>
      <ul>
        <li>
          <router-link to="/">按钮 Button</router-link>
        </li>
        <li>
          <router-link to="/">输入框 Input</router-link>
        </li>
        <li>
          <router-link to="/">折叠面板 Collapse</router-link>
        </li>
        <li>
          <router-link to="/">信息 Message</router-link>
        </li>
        <li>
          <router-link to="/">切换面板 Tab</router-link>
        </li>
        <li>
          <router-link to="/">表单 From</router-link>
        </li>
        <li>
          <router-link to="/">轮播图 Carousel</router-link>
        </li>
         <li>
          <router-link to="/ss">吸顶 Sticky</router-link>
        </li>
      </ul>
    </div>    
  </div>
</template>
<script>

export default {
  name: "sider",
  data() {},
  mounted() {   


  },
  methods: {

  }
};
</script>
<style lang="css" scoped>
.siderBOX{
  width: 200px;
  height: 100%;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
}
.siderBOX .list h4{
  font-size: 20px;
}

.siderBOX .title{
  font-size: 30px;
  color: red;
  margin-bottom: 40px;
}

.siderBOX .list ul{
  padding: 0 10px;
}
.siderBOX .list li{
  width: 100%;
  height: 60px;
  line-height: 60px;
  transition: 200ms;
}
.siderBOX .list li:hover{
  background-color: blue;
 
}
.siderBOX .list li a{
  display: inline-block;
  width: 100%;
  height: 100%;
}

.siderBOX .list li:hover a{
color: #fff;
 
}


</style>
