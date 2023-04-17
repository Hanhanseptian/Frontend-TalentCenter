<template>
  <div class="login">
    <div class="login-form">
      <!-- logo -->
      <div class="text-center">
        <img src="../../../public/logo.png" width="50%" class="my-4" />
      </div>
      <!-- login form -->
      <form class="px-5">
        <!-- usename -->
        <div class="mt-3">
          <label for="username" class="fs-12">Username</label>
          <div class="d-flex">
            <div class="icon-talent d-flex p-0 form-control mr-1">
              <i class="bi bi-person-fill-lock mx-auto my-auto"></i>
            </div>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Input Username or Email"
              class="form-control input-talent ml-auto"
            />
          </div>
        </div>
        <!-- password -->
        <div class="mt-2">
          <label for="password" class="fs-12">Password</label>
          <div class="d-flex">
            <div class="icon-talent d-flex p-0 form-control mr-1">
              <i class="bi bi-key-fill mx-auto my-auto"></i>
            </div>
            <input
              :type="show_password ? 'text' : 'password'"
              id="password"
              v-model="password"
              placeholder="Input Password"
              class="form-control input-talent ml-auto"
            />
            <i
              v-if="!show_password"
              class="bi bi-eye clickable"
              style="
                margin-left: -2rem;
                margin-right: 1rem;
                margin-top: 0.5rem;
                font-size: 120%;
              "
              @click="show_password = !show_password"
              v-b-tooltip.hover="{ variant: 'info' }"
              title="Show Password"
            ></i>
            <i
              v-if="show_password"
              class="bi bi-eye-slash clickable"
              style="
                margin-left: -2rem;
                margin-right: 1rem;
                margin-top: 0.5rem;
                font-size: 120%;
              "
              @click="show_password = !show_password"
              v-b-tooltip.hover="{ variant: 'info' }"
              title="Hide Password"
            ></i>
          </div>
        </div>
        <!-- sign in button -->
        <button
          class="form-control mt-4 mb-1 text-center btn-login"
          @click="login"
        >
          Sign In
        </button>
        <!-- to sign up link -->
        <center>
          <span class="fs-12">
            Don't have an Account?
            <u
              class="clickable link text-talent"
              @click="$router.push('register')"
            >
              Sign Up
            </u>
          </span>
        </center>
      </form>
    </div>
  </div>
</template>
<script>
import { VBTooltip } from "bootstrap-vue";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      show_password: false,
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if(this.username=="bizdev"){
        this.$router.push("/admin/dashboard");
      }else if(this.username=="recruiter"){
        this.$router.push("/home");
      }else{
        this.$router.push("/talent-profile");
      }
    },
  },
  directives: {
    "b-tooltip": VBTooltip,
  },
};
</script>
<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  height: 60%;
  width: 25vw;
  border-radius: 1.5rem;
  margin-top: 5rem;
  margin-left: auto !important;
  margin-right: auto !important;
  background-color: white;
}
.input-talent {
  border-radius: 7px !important;
  border-color: #0173a7 !important;
  font-size: 12px !important;
  height: 2.5rem !important;
  width: 85% !important;
  background-color: #eff2f4;
}
.input-talent:focus {
  box-shadow: 2px 2px 2px #0173a7 !important;
  border-color: none !important;
}
.icon-talent {
  border-radius: 7px !important;
  border-color: #0173a7 !important;
  background-color: #eff2f4;
  font-size: 20px !important;
  height: 2.5rem !important;
  width: 2.5rem !important;
}
.btn-login {
  border-radius: 10px !important;
  background-color: #0173a7;
  color: white;
}
.btn-login:hover {
  opacity: 0.8;
}
.link:hover {
  opacity: 0.8;
}
.login {
  background-image: url("../../../public/login.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
@media only screen and (max-width: 600px) {
  .login-form {
    height: 50%;
    width: 70%;
  }
}
</style>