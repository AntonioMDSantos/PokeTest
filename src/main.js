import Vue from 'vue'
import App from './App.vue'
import PokeCard from './components/PokeCard.vue'
import PokeList from './components/PokeList.vue'

Vue.component('PokeCard', PokeCard)
Vue.component('PokeList', PokeList)

new Vue({
  render: h => h(App)
}).$mount('#app')