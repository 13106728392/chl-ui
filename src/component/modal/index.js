/*
 * @Author: chl
 * @Date: 2020-05-18 15:03:07
 * @LastEditTime: 2020-05-18 15:26:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\component\modal\modal.js
 */
import modal from './modal.vue'

export default {
  install(Vue, options) {
    const Construtor = Vue.extend(modal)
    let modalVm // 保证全局只有一个modal实例
    let lastOption
    Vue.prototype.$modal = (options) => {
      if (lastOption !== JSON.stringify(options)) { //只有一个实例
        modalVm = new Construtor({
          propsData: options
        }) //实例化，传参进去
        modalVm.$mount() //挂载

        document.body.append(modalVm.$el) //插入到body中
      }
      lastOption = JSON.stringify(options)
      modalVm.isVisible = true
    }
  }
}
