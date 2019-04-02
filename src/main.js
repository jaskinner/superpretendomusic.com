import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
