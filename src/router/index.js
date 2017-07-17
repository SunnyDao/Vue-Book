import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/application/main'
import Home from '@/application/index'
import Catergry from '@/application/catergry'
import Find from '@/application/find'
import Cart from '@/application/cart'
import User from '@/application/user'
import Detail from '@/application/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    name: 'Main',
    path: '/',
    component: Main,
    children: [{
      path: '',
      name: 'Home',
      component: Home
    }, {
      path: '/catergry',
      name: 'Catergry',
      component: Catergry
    }, {
      path: '/find',
      name: 'Find',
      component: Find
    }, {
      path: '/user/:id',
      name: 'User',
      component: User
    }]
  }, {
    path: '/detail?:id',
    name: 'Detail',
    component: Detail
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }]
})
