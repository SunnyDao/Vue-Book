import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'

import Main from '@/application/main'
import Home from '@/application/index'
import Catergry from '@/application/catergry'
import Find from '@/application/find'
import Cart from '@/application/cart'
import User from '@/application/user'
import Detail from '@/application/detail'
import Goodslist from '@/application/goodslist'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [{
		/*
		[vue-router] Named Route 'Main' has a default child route. 
		When navigating to this named route (:to="{name: 'Main'"), 
		the default child route will not be rendered. 
		Remove the name from this route 
		and use the name of the default child route for named links instead.
		*/
		name: '',//'Main',此处不需要写名字
		path: '/',
		component: Main,
		children: [
			{
				path: '',
				name: 'Home',
				component: Home
			}, {
				path: 'catergry',
				name: 'Catergry',
				component: Catergry
			}, {
				path: 'find',
				name: 'Find',
				component: Find
			}, {
				path: 'user/:id',
				name: 'User',
				component: User
			}
		]
	}, {
		path: '/detail?:id',
		name: 'Detail',
		component: Detail
	}, {
		path: '/cart',
		name: 'Cart',
		component: Cart
	}, {
		path: '/goodslist/:goodslist_id',
		name: 'Goodslist',
		component: Goodslist
	}]
});

router.beforeEach((to, from, next) => {
	const pageName = to.name;
	store.state[pageName].pageStatus
	? (store.commit('HIDE_LOADING'))
	: (store.commit('SHOW_LOADING'));
	
	next();
})

export default router;
