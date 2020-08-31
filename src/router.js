/*
 * @Author: your name
 * @Date: 2020-04-26 15:45:28
 * @LastEditTime: 2020-08-26 14:55:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\router.js
 */ 
import Vue from "vue"
import Router from "vue-router";
import Home from "./views/home.vue";
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
  ]
});
