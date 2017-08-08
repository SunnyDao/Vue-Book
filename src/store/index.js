import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import page from './modules/page'

import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production' ? [createLogger()] : []

export default new Vuex.Store({
	modules: {
		page
	},
	strict: debug,
	plugins: debug
})