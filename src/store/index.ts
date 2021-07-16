import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { VuexSampleStore } from '../components/vuex-sample';

Vue.use(Vuex)

export default new Vuex.Store(<StoreOptions<any>>{
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    VuexSampleStore,
  },
})
