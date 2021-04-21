import tab from "./tab.vue"
import tabitem from './tab-item'
import tabbody from './tab-body'
import tabhead from './tab-head'
import tabpane from './tab-pane'



export default {
    install(Vue){
        Vue.component('c-tab',tab)
        Vue.component('c-tab-item',tabitem)
        Vue.component('c-tab-body',tabbody)
        Vue.component('c-tab-head',tabhead)
        Vue.component('c-tab-pane',tabpane)
    }
}
