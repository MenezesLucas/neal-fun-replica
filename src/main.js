import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.filter('money', valor => {
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  
  return formatter.format(valor)
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
