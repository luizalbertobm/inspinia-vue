import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSlideUpDown from 'vue-slide-up-down'
import './plugins/axios'

Vue.component('vue-slide-up-down', VueSlideUpDown)
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')