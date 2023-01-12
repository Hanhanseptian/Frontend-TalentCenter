<template>
  <div id="app">
    <admin_layout />
    <!-- <router-view /> -->
  </div>
</template>
<script>
import admin_layout from "./views/layouts/admin_layout.vue";

export default {
  name: "App",
  components: {
    admin_layout,
  },
};
</script>
<style>
#app {
  font-family: "Montserrat", sans-serif !important;
}
body{
  background-color: #EFF2F4 !important;
}
</style>