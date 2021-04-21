import form from "./form.vue"
import formitem from './form-item.vue'


export default {
    install(Vue){
        Vue.component('c-form',form)
        Vue.component('c-form-item',formitem)
    }
}
