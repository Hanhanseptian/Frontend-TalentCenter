<template>
  <div
    class="sidebar bg-white p-2 float-start"
    :class="is_collapse ? 'is-collapse' : ''"
  >
    <!-- SIDEBAR HEADER -->
    <div class="header d-flex align-items-center" style="height: 5rem">
      <!-- APPS LOGO -->
      <img src="../../../public/logo.png" width="200" id="logo" />
      <!-- COLLAPSE BUTTON -->
      <span
        id="toggle-sidebar"
        @click="toggleCollapse()"
        class="text-talent text-center clickable"
        :class="is_collapse ? '' : 'border border-info'"
      >
        <i class="bi bi-chevron-double-right icon-toggle"></i>
      </span>
    </div>
    <!-- SIDEBAR MENU -->
    <div class="menu mt-5">
      <!-- DASHBOARD MENU -->
      <router-link
        to="/bizdev/dashboard"
        class="menu-item text-talent text-decoration-none"
        :class="active_route == 'Dashboard' ? 'is-active' : ''"
      >
        <i class="bi bi-speedometer"></i>
        <div class="menu-name">Dashboard</div>
      </router-link>
      <!-- MANAGE TALENTS MENU -->
      <div class="text-talent menu-item-dropdown">
        <div
          class="d-flex align-items-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-menu"
          aria-expanded="false"
          aria-controls="collapse-menu"
          @click="sub_menu_collapse = !sub_menu_collapse"
        >
          <i class="bi bi-menu-button-fill"></i>
          <div class="menu-name">Manage Talents</div>
          <i
            v-if="!sub_menu_collapse"
            class="ml-auto bi bi-chevron-right menu-name"
          ></i>
          <i v-else class="ml-auto bi bi-chevron-down menu-name"></i>
        </div>
        <div class="collapse mt-1" id="collapse-menu">
          <!-- TALENT LIST MENU -->
          <router-link
            to="/bizdev/talent-list"
            class="sub-menu text-decoration-none"
            :class="active_route == 'Talent List' ? 'is-active' : ''"
          >
            <i class="bi bi-list-check menu-name my-1"></i>
            <div class="menu-name">Talent List</div>
          </router-link>
          <!-- REQUEST LIST MENU -->
          <router-link
            to="/bizdev/request-list"
            class="sub-menu text-decoration-none"
            :class="active_route == 'Request List' ? 'is-active' : ''"
          >
            <i class="bi bi-clipboard-check-fill menu-name my-1"></i>
            <div class="menu-name">Request List</div>
          </router-link>
          <!-- TALENT ON JOB MENU -->
          <router-link
            to="/bizdev/talent-on-job"
            class="sub-menu text-decoration-none"
            :class="active_route == 'Talent on Job' ? 'is-active' : ''"
          >
            <i class="bi bi-person-fill-check menu-name my-1"></i>
            <div class="menu-name">Talent on Job</div>
          </router-link>
        </div>
      </div>
      <!-- SIGN OUT BUTTON -->
      <div
        class="menu-item menu-logout text-white"
        style="position: absolute; bottom: 0"
      >
        <div
          class="menu-name"
          style="padding-left: 4.1rem; padding-right: 4.1rem; font-size: 14px"
          @click="logout"
        >
          Sign Out
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {
      is_collapse: false,
      sub_menu_collapse: false,
      active_route: this.$route.name,
    };
  },
  methods: {
    toggleCollapse() {
      this.is_collapse = !this.is_collapse;
    },
    logout() {
      this.$router.push("/login");
    },
  },
  watch: {
    $route() {
      this.active_route = this.$route.name;
    },
  },
};
</script>