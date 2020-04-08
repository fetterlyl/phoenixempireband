import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import AudioVisual from 'vue-audio-visual'
 
Vue.use(AudioVisual)
Vue.use(Vuetify)
Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

new Vue({
vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
