import Vue from 'vue'
import Meta from 'vue-meta'
import App from './App'
import router from './router'
import filter from './plugins/filter'
import store from './store/index'
import helper from './plugins/helper'
// import jquery from 'jquery'
import { VueExtendLayout, layout } from 'vue-extend-layout'

Vue.config.productionTip = false
Vue.use( VueExtendLayout )
Vue.use(Meta)
Vue.prototype.$helper = helper;
// window.$ = jquery
// window.JQuery = jquery
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    ...layout,
    components: {App},
    template: '<App/>'
})
