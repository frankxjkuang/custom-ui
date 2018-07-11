import Vue from 'vue'
import App from './App.vue'

import MoorUI from './index.js'
Vue.use(MoorUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
