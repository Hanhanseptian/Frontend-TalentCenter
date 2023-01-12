<template>
  <div class="d-flex">
    <!-- SIDEBAR -->
    <sidebar-component />
    <!-- MAIN-CONTENT -->
    <div class="w-100 px-3 pt-2 main-content">
      <header_admin />
      <div class="mt-4 mb-5">
        <router-view />
      </div>
      <footer-admin />
    </div>
  </div>
</template>
<script>
import header_admin from "../components/header_admin.vue";
import footer from "../components/footer.vue";
import sidebar from "../components/sidebar.vue";
export default {
  name: "admin_layout",
  components: {
    header_admin,
    "footer-admin": footer,
    "sidebar-component": sidebar,
  },
};
</script>