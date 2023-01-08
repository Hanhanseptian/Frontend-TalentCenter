import Vue from 'vue'

import App from './App.vue'
import router from './router'

// Plugin 3rd Party
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vSelect from "vue-select";

// CSS Style
import '../public/assets/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "vue-select/dist/vue-select.css";

// Globaly Using Plugin
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Globaly Component Plugin
Vue.component("v-select", vSelect);


new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
