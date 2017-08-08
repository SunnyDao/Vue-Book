import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import Page from './modules/page'
import Home from './modules/home'
import Catergry from './modules/catergry'

import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production' ? [createLogger()] : []

export default new Vuex.Store({
	modules: {
		Page,
		Home,
		Catergry
	},
	strict: debug,
	plugins: debug
})