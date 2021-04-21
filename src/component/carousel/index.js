import carousel from "./carousel.vue"
import carouselitem from './carousel-item.vue'


export default {
    install(Vue){
        Vue.component('c-carousel',carousel)
        Vue.component('c-carousel-item',carouselitem)
    }
}
