import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'


Vue.use(Vuetify)
Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.filter('numbers', (value) => {
  let number = value + 1
  if (number < 10) {
    return "0" + number + "."
  } 
  return number + "."
})

Vue.filter('minutes', (value) => {
  if (!value || typeof value !== "number") return "00:00"
  let min = parseInt(value / 60),
      sec = parseInt(value % 60)
  min = min < 10 ? "0" + min : min
  sec = sec < 10 ? "0" + sec : sec
  value = min + ":" + sec
  return value
})

new Vue({
vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
