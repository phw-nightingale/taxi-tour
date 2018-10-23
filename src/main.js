// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { Rate } from 'element-ui'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(Rate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
