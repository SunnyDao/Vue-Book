import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutation_types'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const state = {
	pageStatus:{},
	isShowLoading: true
}
const mutations = {
	[types.SHOW_LOADING](state){
		 state.isShowLoading = true;
	},
	[types.HIDE_LOADING](state){
		state.isShowLoading = false;
	}
}

const debug = process.env.NODE_ENV !== 'production' ? [createLogger()] : []

export default new Vuex.Store({
	state,
	mutations,
	plugins: debug
})