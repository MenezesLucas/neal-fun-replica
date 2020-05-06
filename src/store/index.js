import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fortune: 0,
    products: []
  },
  getters: {
    fortuneFree(state) {
      const valueTotal = state.products.map(p => p.quantity * p.value)
        .reduce((total, current) => total + current, 0)

      return state.fortune - valueTotal
    },
    products(state) {
      return state.products
    }
  },
  mutations: {
    setFortuneTotal(state, fortune) {
      state.fortune = fortune
    },
    setProduct(state, payload) {
      const index = state.products.findIndex(p => p.id == payload.id)

      if (index >= 0) {
        if (payload.quantity == 0) {
          state.products.splice(index, 1)
        } else {
          Vue.set(state.products, index, payload)
        }
      } else {
        state.products.push(payload)
        state.products.sort((a, b) => a.id - b.id)
      }
    },
  }
})
