/*
 * @Author: chl
 * @Date: 2019-05-17 09:12:41
 * @LastEditTime: 2020-08-26 17:56:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chlui\src\main.js
 */
import "./baseconfig/base.css"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


// 全局使用组件
import './component'
// 全局使用自定义方法
import './providers'

Vue.use(router);
Vue.use(Element)


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
  beforeCreate(){
    // Vue.prototype.eventBus = this
  },
  render: h => h(App)
})
