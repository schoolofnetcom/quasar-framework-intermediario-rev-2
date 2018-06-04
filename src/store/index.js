import Vue from 'vue'
import Vuex from 'vuex'

import products from './products'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    products
  }
})

export default store
