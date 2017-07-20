import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const state = {
	count: 100,
}

const debug = process.env.NODE_ENV !== 'production' ? [createLogger()] : []

export default new Vuex.Store({
	state,
	plugins: debug
})