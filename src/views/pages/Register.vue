<template>
  <div class="login">
    <div class="login-form">
      <!-- logo -->
      <div class="text-center">
        <img src="../../../public/logo.png" width="50%" class="my-4" />
      </div>
      <!-- pic information -->
      <form v-if="!is_next_step" class="px-5" @submit.prevent="nextStep">
        <!-- pic information text -->
        <center><span>PIC Information</span></center>
        <!-- name -->
        <div class="mt-2">
          <label for="name" class="fs-12">Name</label>
          <div class="d-flex">
            <div class="icon-talent d-flex p-0 form-control mr-1">
              <i class="bi bi-person-lines-fill mx-auto my-auto"></i>
            </div>
            <input
              v-model="register.name"
              type="text"
              id="name"
              placeholder="Input Your Name"
              class="form-control input-talent ml-auto"
            />
          </div>
        </div>
        <!-- username -->
        <div class="mt-2">
          <label for="username" class="fs-12">Username</label>
          <div class="d-flex">
            <div class="icon-talent d-flex p-0 form-control mr-1">
              <i class="bi bi-person-fill-lock mx-auto my-auto"></i>
            </div>
            <input
              v-model="register.username"
              type="text"
              id="username"
              placeholder="Input Username"
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
              v-model="register.password"
              :type="show_password ? 'text' : 'password'"
              id="password"
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
        <!-- email -->
        <div class="mt-2">
          <label for="email" class="fs-12">Email</label>
          <div class="d-flex">
            <div class="icon-talent d-flex p-0 form-control mr-1">
              <i class="bi bi-envelope-at mx-auto my-auto"></i>
            </div>
            <input
              v-model="register.email"
              type="text"
              id="email"
              placeholder="Input Company or Your Email"
              class="form-control input-talent ml-auto"
            />
          </div>
        </div>
        <!-- next step button -->
        <button
          class="form-control mt-4 mb-1 text-center btn-login"
          type="submit"
        >
          Next Step
        </button>
        <!-- to sign in link -->
        <center>
          <span class="fs-12">
            Already have an Account?
            <u
              class="clickable link text-talent"
              @click="$router.push('login')"
            >
              Sign In
            </u>
          </span>
        </center>
      </form>
      <!-- company information -->
      <form v-else class="px-5" @submit.prevent="nextStep">
        <!-- company information text -->
        <center><span>Company Information</span></center>
        <!-- company name -->
        <div class="mt-2">
          <label for="company_name" class="fs-12">Company Name</label>
          <div class="d-flex">
            <div class="icon-talent d-flex p-0 form-control mr-1">
              <i class="bi bi-building-check mx-auto my-auto"></i>
            </div>
            <input
              v-model="register.company_name"
              type="text"
              id="company_name"
              required
              placeholder="Input Your Company Name"
              class="form-control input-talent ml-auto text-talent"
            />
          </div>
        </div>
        <!-- telephone number -->
        <div class="mt-2">
          <label for="telephone_number" class="fs-12">Telephone Number</label>
          <div class="d-flex">
            <div class="icon-talent d-flex p-0 form-control mr-1">
              <i class="bi bi-telephone mx-auto my-auto"></i>
            </div>
            <input
              v-model="register.telephone_number"
              type="text"
              id="telephone_number"
              placeholder="Input Company Telephone Number"
              class="form-control input-talent ml-auto text-talent"
            />
          </div>
        </div>
        <!-- company address -->
        <div class="mt-2">
          <label for="company_address" class="fs-12">Company Address</label>
          <div class="d-flex">
            <div class="icon-talent d-flex p-0 form-control mr-1">
              <i class="bi bi-geo-alt mx-auto my-auto"></i>
            </div>
            <input
              v-model="register.company_address"
              type="text"
              id="company_address"
              placeholder="Input Company Address"
              class="form-control input-talent ml-auto text-talent"
            />
          </div>
        </div>
        <!-- company subject -->
        <div class="mt-2">
          <label for="company_subject" class="fs-12">Company Subject</label>
          <div class="d-flex">
            <div class="icon-talent d-flex p-0 form-control mr-1">
              <i class="bi bi-info-circle mx-auto my-auto"></i>
            </div>
            <input
              v-model="register.company_subject"
              type="text"
              id="company_subject"
              placeholder="Input Company Subject"
              class="form-control input-talent ml-auto text-talent"
            />
          </div>
        </div>
        <div class="d-flex">
          <span
            class="fs-12 ml-auto clickable link text-talent mt-2"
            @click="is_next_step = false"
          >
            <i class="bi bi-chevron-double-left mx-auto my-auto"></i> Previous
          </span>
        </div>
        <!-- sign up button -->
        <button
          class="form-control mt-3 mb-1 text-center btn-login"
          type="submit"
        >
          Sign Up
        </button>
        <!-- to sign in link -->
        <center>
          <span class="fs-12">
            Already have an Account?
            <u
              class="clickable link text-talent"
              @click="$router.push('login')"
            >
              Sign In
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
      is_next_step: false,
      register: {
        name: "",
        username: "",
        pasword: "",
        email: "",
        company_name: "",
        telephone_number: "",
        company_address: "",
        company_subject: "",
      },
    };
  },
  methods: {
    login() {
      this.$router.push("/admin/dashboard");
    },
    nextStep() {
      this.is_next_step = true;
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
  height: 80%;
  width: 30vw;
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
  height: 5vh !important;
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
  height: 5vh !important;
  width: 5vh !important;
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
    height: 70%;
    width: 75%;
  }
}
</style>