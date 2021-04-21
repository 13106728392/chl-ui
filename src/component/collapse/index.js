import collapse from "./collapse.vue"
import collapseitem from './collapse-item.vue'


export default {
    install(Vue){
        Vue.component('c-collapse',collapse)
        Vue.component('c-collapse-item',collapseitem)
    }
}
