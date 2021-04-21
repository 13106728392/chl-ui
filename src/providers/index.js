import Vue from 'vue'
import helper from './helper'
import eventBus from './eventBus'

import './directives'


// 扩张Vue原型
Vue.prototype.$eventBus = eventBus
Vue.prototype.$helper = helper
