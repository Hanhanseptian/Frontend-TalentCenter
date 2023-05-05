<template>
  <div id="app">
    <layout-component v-if="!isLayoutFull" />
    <router-view v-else />
  </div>
</template>
<script>
import Layouts from "./views/layouts/Layouts.vue";

export default {
  name: "App",
  components: {
    "layout-component": Layouts,
  },
  computed: {
    isLayoutFull() {
      if (this.$route.meta.full == true) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    document.title = this.$route.name + " | Talent Center";
  },
  watch: {
    $route() {
      document.title = this.$route.name + " | Talent Center";
    },
  },
};
</script>
<style>
#app {
  font-family: "Montserrat", sans-serif !important;
}
body {
  background-color: #eff2f4 !important;
}
</style>