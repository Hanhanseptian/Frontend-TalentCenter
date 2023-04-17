<template>
  <b-card no-body class="shadow sticky-top">
    <div class="container py-1">
      <div class="d-flex align-items-center">
        <img src="../../../public/logo.png" class="nav-logo" />
        <div class="navbar" v-if="$route.meta.access == 2">
          <router-link
            to="/home"
            class="mr-2 btn btn-sm"
            :class="$route.name == 'Home' ? 'btn-talent' : 'btn-outline-talent'"
            >Home</router-link
          >
          <router-link
            to="/my-talent"
            class="btn btn-sm"
            :class="
              $route.name == 'My Talent' ? 'btn-talent' : 'btn-outline-talent'
            "
            >My Talent</router-link
          >
        </div>
        <div class="navbar" v-if="$route.meta.access == 3">
          <router-link
            to="/talent-profile"
            class="mr-2 btn btn-sm"
            :class="
              $route.name == 'Profile Talent'
                ? 'btn-talent'
                : 'btn-outline-talent'
            "
            >My Profile</router-link
          >
        </div>
        <b-dropdown
          id="profile"
          class="ml-auto text-decoration-none"
          no-caret
          variant="link"
        >
          <template #button-content>
            <div class="d-flex align-items-center">
              <span class="ml-auto mr-2 text-talent fs-14">User</span>
              <i class="bi bi-person-circle fs-30"></i>
            </div>
          </template>
          <b-dropdown-item>My Account</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </b-card>
</template>
<script>
import { BCard, BBadge } from "bootstrap-vue";

export default {
  name: "sidebar",
  components: {
    BCard,
    BBadge,
  },
  methods:{
    signOut(){
      this.$router.push('/')
    }
  }
};
</script>
<style scoped>
.nav-item {
  color: #0173a7;
  padding-left: 5px;
  padding-right: 5px;
  text-decoration: none;
  border-radius: 5px;
  border: #0173a7 !important;
}
.nav-logo {
  width: 150px;
}
@media only screen and (max-width: 600px) {
  .btn-sm {
    font-size: 10px;
  }
  .nav-logo {
    width: 90px;
  }
  .fs-14 {
    font-size: 10px;
  }
  .fs-30 {
    font-size: 20px;
  }
}
</style>