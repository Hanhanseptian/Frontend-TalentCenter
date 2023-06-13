import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// THIRD PARTY PLUGIN
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import vSelect from "vue-select";
import Axios from "./plugins/axios";
import Loader from "./views/components/loader.vue";
import Toast from "vue-toastification";

// CSS STYLES
import "../public/assets/style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "vue-select/dist/vue-select.css";
import "vue-toastification/dist/index.css";

// GLOBALY PROTOTYPE
Vue.prototype.$store = store;
Vue.prototype.$url = Axios;

// GLOBALY USING PLUGIN
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Toast, {
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
});

// GLOBALY COMPONENT PLUGIN
Vue.component("v-select", vSelect);
Vue.component("loader", Loader);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
