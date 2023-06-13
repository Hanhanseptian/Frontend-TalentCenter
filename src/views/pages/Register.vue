<template>
  <div class="login">
    <div class="login-form">
      <!-- APPS LOGO -->
      <div class="text-center">
        <img src="../../../public/logo.png" width="50%" class="my-4" />
      </div>

      <!-- PIC INFORMATION FORM -->
      <ValidationObserver v-slot="{ handleSubmit }">
        <form
          v-if="!is_next_step"
          class="px-5"
          @submit.prevent="handleSubmit(nextStep)"
        >
          <div class="text-center">PIC Information</div>
          <!-- FULL NAME -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="mt-2">
              <label for="name" class="fs-12">
                Full Name
                <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-person-lines-fill mx-auto my-auto"></i>
                </div>
                <input
                  v-model="register.name"
                  type="text"
                  id="name"
                  placeholder="Input Your Full Name"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- EMAIL -->
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <div class="mt-2">
              <label for="email" class="fs-12">
                Email <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-envelope-at-fill mx-auto my-auto"></i>
                </div>
                <input
                  v-model="register.email"
                  type="text"
                  id="email"
                  placeholder="Input Your Email"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- PASSWORD -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="mt-2">
              <label for="password" class="fs-12">
                Password <span class="text-danger">*</span>
              </label>
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
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- PHONE NUMER -->
          <ValidationProvider rules="required|numeric" v-slot="{ errors }">
            <div class="mt-2">
              <label for="phone_number" class="fs-12">
                Phone Number <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-telephone-fill mx-auto my-auto"></i>
                </div>
                <input
                  v-model="register.phone_number"
                  type="text"
                  maxLength="12"
                  id="phone_number"
                  placeholder="Input Telephone Number"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- NEXT STEP BUTTON -->
          <button
            class="form-control mt-4 mb-1 text-center btn-login"
            type="submit"
          >
            Next Step
          </button>
          <!-- TO SIGN IN BUTTON -->
          <div class="fs-12 text-center">
            Already have an Account?
            <u
              class="clickable link text-talent"
              @click="$router.push('login')"
            >
              Sign In
            </u>
          </div>
        </form>
      </ValidationObserver>

      <!-- COMPANY INFORMATION FORM -->
      <ValidationObserver v-slot="{ handleSubmit }">
        <form
          v-if="is_next_step"
          class="px-5"
          @submit.prevent="handleSubmit(registerAccount)"
        >
          <div class="text-center">Company Information</div>
          <!-- COMPANY NAME -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="mt-2">
              <label for="company_name" class="fs-12">
                Company Name <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-building-check mx-auto my-auto"></i>
                </div>
                <input
                  v-model="register.company_name"
                  type="text"
                  id="company_name"
                  placeholder="Input Company Name"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- COMPANY ADDRESS -->
          <div class="mt-2">
            <label for="company_address" class="fs-12">Company Address</label>
            <div class="d-flex">
              <div class="icon-talent d-flex p-0 form-control mr-1">
                <i class="bi bi-geo-alt-fill mx-auto my-auto"></i>
              </div>
              <input
                v-model="register.company_address"
                type="text"
                id="company_address"
                placeholder="Input Company Address"
                class="form-control input-talent ml-auto"
              />
            </div>
          </div>
          <!-- COMPANY SUBJECT -->
          <div class="mt-2">
            <label for="company_subject" class="fs-12">Company Subject</label>
            <div class="d-flex">
              <div class="icon-talent d-flex p-0 form-control mr-1">
                <i class="bi bi-info-circle-fill mx-auto my-auto"></i>
              </div>
              <input
                v-model="register.company_subject"
                type="text"
                id="company_subject"
                placeholder="Input Company Subject"
                class="form-control input-talent ml-auto"
              />
            </div>
          </div>
          <!-- PREVIOUS BUTTON -->
          <div class="d-flex">
            <span
              class="fs-12 ml-auto clickable link text-talent mt-2"
              @click="is_next_step = false"
            >
              <i class="bi bi-chevron-double-left mx-auto my-auto"></i> Previous
            </span>
          </div>
          <!-- SIGN UP BUTTON -->
          <button
            class="form-control mt-3 mb-1 text-center btn-login"
            type="submit"
          >
            Sign Up <b-spinner v-if="is_loading" small></b-spinner>
          </button>
          <!-- TO SIGN IN LINK -->
          <div class="fs-12 text-center">
            Already have an Account?
            <u
              class="clickable link text-talent"
              @click="$router.push('login')"
            >
              Sign In
            </u>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import { VBTooltip } from "bootstrap-vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, numeric } from "vee-validate/dist/rules";

extend("email", {
  ...email,
  message: "This Email is Not Valid",
});
extend("required", {
  ...required,
  message: "This Field is Required",
});
extend("numeric", {
  ...numeric,
  message: "This Field Must be a Number",
});

export default {
  name: "Register",
  components: { ValidationProvider, ValidationObserver },
  data() {
    return {
      show_password: false,
      is_next_step: false,
      is_loading: false,
      register: {
        name: "",
        email: "",
        password: "",
        phone_number: "",
        company_name: "",
        company_address: "",
        company_subject: "",
      },
    };
  },
  methods: {
    registerAccount() {
      this.is_loading = true;
      this.$url
        .post("account/register", {
          full_name: this.register.name,
          email: this.register.email,
          password: this.register.password,
          phone_number: this.register.phone_number,
          company_name: this.register.company_name,
          company_address: this.register.company_address,
          company_subject: this.register.company_subject,
        })
        .then(() => {
          this.$toast.success("Success! Account has been created.");
          this.$router.push("/login");
        })
        .catch(() => {
          this.$toast.error("Failed! This Email is already exists.");
        })
        .finally(() => {
          this.is_loading = false;
        });
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
    height: 82%;
    width: 85%;
  }
}
</style>