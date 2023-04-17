<template>
  <div class="d-flex">
    <!-- SIDEBAR -->
    <sidebar-component v-if="isBizdevLayout" />
    <!-- MAIN-CONTENT -->
    <div
      class="w-100 px-3"
      :class="isAdmin || isUser ? 'pt-2 main-content' : ''"
    >
      <header_admin v-if="isBizdevLayout" />
      <header_user v-else/>
      <div :class="isAdmin || isUser ? 'mt-4 mb-5' : ''">
        <router-view />
      </div>
      <footer-admin v-if="isBizdevLayout" />
    </div>
  </div>
</template>
<script>
import header_admin from "../components/header_admin.vue";
import header_user from "../components/header_user.vue";
import footer from "../components/footer.vue";
import sidebar from "../components/sidebar.vue";
export default {
  name: "admin_layout",
  components: {
    header_admin,
    header_user,
    "footer-admin": footer,
    "sidebar-component": sidebar,
  },
  data() {
    return {
      isAdmin: true,
      isUser: true,
    };
  },
  computed: {
    isLayoutFull() {
      if (this.$route.meta.full == true) {
        return true;
      }
      return false;
    },
    isBizdevLayout() {
      if (this.$route.meta.access == 1) {
        return true;
      }
      return false;
    },
  },
};
</script>