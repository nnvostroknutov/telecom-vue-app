import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.withCredentials = true

Vue.config.productionTip = false
Vue.use(VueAxios, axios)


new Vue({
  vuetify,
  render: h => h(App),
  // store,
  router
}).$mount('#app')
