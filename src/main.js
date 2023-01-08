import Vue from 'vue'

import App from './App.vue'
import router from './router'

// Plugin 3rd Party
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// CSS Style
import '../public/assets/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Globaly Using Plugin
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
