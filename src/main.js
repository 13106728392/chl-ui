/*
 * @Author: your name
 * @Date: 2019-05-17 09:12:41
 * @LastEditTime: 2020-04-24 15:31:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \chlui\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ToastPlugin from "./views/toast/toast.js";

Vue.use(ToastPlugin);

Vue.use(router);

const context = require.context('./', true, /^((?!demo\.vue).)+\.vue$/)
try {
  context.keys().forEach(path => {
    let res = context(path)
    Vue.component(res.default.name, res.default)
  })
} catch (e) {
  console.log(e)
}

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
