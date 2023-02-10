import Vue from 'vue'
import App from './App.vue'
import PokeInfo from './components/PokeInfo.vue'
import PokeEvolution from './components/PokeEvolution.vue'

Vue.component('PokeInfo', PokeInfo)
Vue.component('PokeEvolution', PokeEvolution)

new Vue({
  render: h => h(App)
}).$mount('#app')