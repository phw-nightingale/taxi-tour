import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../pages/detail'
import Index from '../pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/tour/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
