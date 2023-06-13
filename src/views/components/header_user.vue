<template>
  <b-card no-body class="shadow sticky-top">
    <div class="container py-1">
      <div class="d-flex align-items-center">
        <!-- APPS LOGO -->
        <img src="../../../public/logo.png" class="nav-logo" />

        <!-- RECRUITER MENU -->
        <div class="navbar" v-if="$route.meta.access == 2">
          <!-- HOME MENU -->
          <router-link
            to="/home"
            class="mr-2 btn btn-sm"
            :class="$route.name == 'Home' ? 'btn-talent' : 'btn-hover'"
          >
            <i class="bi bi-house-fill"></i>
            Home
          </router-link>
          <!-- MARKED TALENT MENU -->
          <router-link
            to="/marked-talent"
            class="mr-2 btn btn-sm"
            :class="$route.name == 'Marked Talent' ? 'btn-talent' : 'btn-hover'"
          >
            <i class="bi bi-bookmark-check-fill"></i>
            Marked Talent
          </router-link>
          <!-- MY TALENT MENU -->
          <router-link
            to="/my-talent"
            class="btn btn-sm"
            :class="$route.name == 'My Talent' ? 'btn-talent' : 'btn-hover'"
          >
            <i class="bi bi-people-fill"></i>
            My Talent
          </router-link>
        </div>

        <!-- TALENT MEU=NU -->
        <div class="navbar" v-if="$route.meta.access == 3">
          <!-- MY PROFILE MENU -->
          <router-link
            to="/talent-profile"
            class="mr-2 btn btn-sm"
            :class="
              $route.name == 'Profile Talent' ? 'btn-talent' : 'btn-hover'
            "
          >
            <i class="bi bi-person-fill"></i>
            My Profile
          </router-link>
        </div>

        <!-- USER LOGGED IN -->
        <b-dropdown
          id="profile"
          class="ml-auto text-decoration-none"
          no-caret
          variant="link"
        >
          <!-- USER PROFILE -->
          <template #button-content>
            <div class="d-flex align-items-center btn-hover">
              <span class="ml-auto mr-2 fs-14">
                {{ $store.getters.user.full_name }}
              </span>
              <i class="bi bi-person-circle fs-30"></i>
            </div>
          </template>
          <!-- MY ACCOUNT BUTTON -->
          <b-dropdown-item @click="showMyAccountModal('talent')">
            <span class="fs-14">My Account</span>
          </b-dropdown-item>
          <!-- DIVIDER -->
          <b-dropdown-divider></b-dropdown-divider>
          <!-- SIGN OUT BUTTON -->
          <b-dropdown-item @click="signOut">
            <span class="fs-14">Sign Out</span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <my-account-talent-modal />
  </b-card>
</template>
<script>
import { BCard, BBadge } from "bootstrap-vue";
import myAccountModal from "./my_account_modal.vue";
import cookie from "js-cookie";

export default {
  name: "header_user",
  components: {
    BCard,
    BBadge,
    "my-account-talent-modal": myAccountModal,
  },
  data() {
    return {
      account_name: this.$store.getters.user.full_name,
      account_id: this.$store.getters.user._id,
    };
  },
  methods: {
    signOut() {
      cookie.remove("user_data");
      this.$router.push("/");
    },
    showMyAccountModal(tipe) {
      if (tipe) {
        this.$bvModal.show("my-account-talent");
      }
    },
  },
};
</script>
<style scoped>
.nav-logo {
  width: 150px;
}
.btn-hover:hover {
  opacity: 0.5;
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