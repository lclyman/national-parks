import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/index'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created(){
    this.$store.dispatch('setLoading', true)
    this.$store.dispatch('loadParks')
  }
})
