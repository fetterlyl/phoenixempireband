import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

new Vue({
vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
