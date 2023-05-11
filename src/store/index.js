import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const debbug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debbug,
  plugins: debbug ? [createLogger()] : [],
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})
