// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'

import store from './store'
import router from './router'

import App from './application/App'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueLazyload)


/* eslint-disable no-new */
const vm = new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: { App }
})
