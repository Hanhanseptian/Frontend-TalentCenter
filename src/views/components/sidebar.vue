<template>
  <div
    class="sidebar bg-white p-2 float-start"
    :class="is_collapse ? 'is-collapse' : ''"
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
        to="/admin/dashboard"
        class="menu-item text-talent text-decoration-none"
        :class="active_route == 'Dashboard' ? 'is-active' : ''"
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
          @click="sub_menu_collapse = !sub_menu_collapse"
        >
          <i class="bi bi-menu-button-fill"></i>
          <div class="menu-name">Manage Talents</div>
          <i v-if="!sub_menu_collapse" class="ml-auto bi bi-chevron-right menu-name"></i>
          <i v-else class="ml-auto bi bi-chevron-down menu-name"></i>
        </div>
        <div class="collapse mt-1" id="collapse-menu">
          <router-link
            to="/admin/talent-list"
            class="sub-menu text-decoration-none"
            :class="active_route == 'Talent List' ? 'is-active' : ''"
          >
            <i class="bi bi-list-check menu-name my-1"></i>
            <div class="menu-name">Talent List</div>
          </router-link>
          <router-link
            to="/admin/waiting-hired-list"
            class="sub-menu text-decoration-none"
            :class="active_route == 'Waiting Hired List' ? 'is-active' : ''"
          >
            <i class="bi bi-clipboard-check-fill menu-name my-1"></i>
            <div class="menu-name">Waiting Hired List</div>
          </router-link>
          <router-link
            to="/admin/talent-on-job"
            class="sub-menu text-decoration-none"
            :class="active_route == 'Talent on Job' ? 'is-active' : ''"
          >
            <i class="bi bi-person-fill-check menu-name my-1"></i>
            <div class="menu-name">Talent on Job</div>
          </router-link>
        </div>
      </div>
      <router-link
        to="/admin/manage-user"
        class="menu-item text-talent text-decoration-none"
        :class="active_route == 'Manage User' ? 'is-active' : ''"
      >
        <i class="bi bi-person-fill-lock"></i>
        <div class="menu-name">Manage Users</div>
      </router-link>
      <div
        class="menu-item menu-logout text-white"
        style="position: absolute; bottom: 0"
      >
        <div
          class="menu-name"
          style="padding-left: 4.44rem; padding-right: 4.44rem;font-size:12px"
        >
          Sign Out
        </div>
      </div>
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
      is_collapse: false,
      sub_menu_collapse:false,
      active_route: this.$route.name,
    };
  },
  methods: {
    toggleCollapse() {
      this.is_collapse = !this.is_collapse;
    },
  },
  watch: {
    $route() {
      this.active_route = this.$route.name;
    },
  },
};
</script>