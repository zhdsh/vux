import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import loginModule from "./loginModule"

export default new Vuex.Store({
	modules: {
		loginModule
	}
})
