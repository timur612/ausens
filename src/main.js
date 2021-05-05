import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueYoutube from 'vue-youtube'

Vue.config.productionTip = false
Vue.use(VueYoutube)
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
