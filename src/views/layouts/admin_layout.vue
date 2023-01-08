<template>
  <div class="d-flex">
    <!-- SIDEBAR -->
    <div
      class="sidebar bg-white p-2 float-start"
      :class="isCollapse ? 'is-collapse' : ''"
    >
      <div class="header d-flex align-items-center" style="height: 5rem">
        <img src="../../../public/logo.png" width="200" id="logo" />
        <span
          id="toggle-sidebar"
          @click="toggleCollapse()"
          class="text-talent text-center clickable"
        >
          <i class="bi bi-chevron-double-right icon-toggle"></i>
        </span>
      </div>
      <div class="menu mt-5">
        <router-link
          to="/"
          class="menu-item text-talent text-decoration-none"
          :class="activeRoute == 'Dashboard' ? 'is-active' : ''"
        >
          <i class="bi bi-speedometer"></i>
          <div class="menu-name">Dashboard</div>
        </router-link>
        <div class="text-talent menu-item-dropdown">
          <div
            class="d-flex align-items-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-menu"
            aria-expanded="false"
            aria-controls="collapse-menu"
          >
            <i class="bi bi-menu-button-fill"></i>
            <div class="menu-name">Manage Talents</div>
            <i class="ml-auto bi bi-chevron-down menu-name"></i>
          </div>
          <div class="collapse mt-1" id="collapse-menu">
            <router-link
              to="/talent-list"
              class="sub-menu text-decoration-none"
              :class="activeRoute == 'Talent List' ? 'is-active' : ''"
            >
              <i class="bi bi-list-check menu-name my-1"></i>
              <div class="menu-name">Talent List</div>
            </router-link>
            <router-link
              to="/waiting-hired-list"
              class="sub-menu text-decoration-none"
              :class="activeRoute == 'Waiting Hired List' ? 'is-active' : ''"
            >
              <i class="bi bi-clipboard-check-fill menu-name my-1"></i>
              <div class="menu-name">Waiting Hired List</div>
            </router-link>
            <router-link
              to="/talent-on-job"
              class="sub-menu text-decoration-none"
              :class="activeRoute == 'Talent on Job' ? 'is-active' : ''"
            >
              <i class="bi bi-person-fill-check menu-name my-1"></i>
              <div class="menu-name">Talent on Job</div>
            </router-link>
          </div>
        </div>
        <router-link
          to="/manage-user"
          class="menu-item text-talent text-decoration-none"
          :class="activeRoute == 'Manage User' ? 'is-active' : ''"
        >
          <i class="bi bi-person-fill-lock"></i>
          <div class="menu-name">Manage Users</div>
        </router-link>
        <div
          class="menu-item menu-logout text-white"
          style="position: absolute; bottom: 0"
        >
          <i class="bi bi-box-arrow-right icon-logout"></i>
          <div
            class="menu-name"
            style="padding-left: 4.46rem; padding-right: 4.46rem"
          >
            Logout
          </div>
        </div>
      </div>
    </div>
    <!-- MAIN-CONTENT -->
    <div class="w-100 px-3 pt-2 main-content">
      <header_admin />
      <div class="mt-4">
        <router-view />
      </div>
      <footer-admin />
    </div>
  </div>
</template>
<script>
import header_admin from "../components/header_admin.vue";
import footer from "../components/footer.vue";
export default {
  name: "admin_layout",
  components: {
    header_admin,
    "footer-admin": footer,
  },
  data() {
    return {
      isCollapse: false,
      activeRoute: this.$route,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
  watch: {
    $route() {
      this.activeRoute = this.$route.name;
    },
  },
};
</script>