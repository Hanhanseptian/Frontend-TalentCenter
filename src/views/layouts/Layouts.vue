<template>
  <div class="d-flex">
    <!-- SIDEBAR -->
    <sidebar-component v-if="!isLayoutFull" />
    <!-- MAIN-CONTENT -->
    <div
      class="w-100 px-3"
      :class="isAdmin || isUser ? 'pt-2 main-content' : ''"
    >
      <header_admin v-if="!isLayoutFull" />
      <div :class="isAdmin || isUser ? 'mt-4 mb-5' : ''">
        <router-view />
      </div>
      <footer-admin v-if="isAdmin || isUser" />
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
  data() {
    return {
      isAdmin: true,
      isUser: true,
    };
  },
  computed:{
    isLayoutFull(){
      if(this.$route.meta.full==true){
        return true
      }else{
        return false
      }
    }
  }
};
</script>