import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import Page from './modules/page'
import Home from './modules/home'

import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production' ? [createLogger()] : []

export default new Vuex.Store({
	modules: {
		Page,
		Home
	},
	strict: debug,
	plugins: debug
})