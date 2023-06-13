<template>
  <b-modal
    id="my-account-talent"
    size="md"
    ref="modal"
    ok-title="Back"
    ok-only
    ok-variant="outline-danger"
    button-size="sm"
    hide-footer
  >
    <!-- MODAL TITLE -->
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi-person-fill-gear"></i>
        My Account
      </span>
    </template>

    <!-- ACCOUNT INFORMATION ITEM -->
    <b-card no-body v-if="!is_change_password" class="shadow p-3">
      <span class="mb-3 fs-14">
        <i class="bi bi-person-check-fill"></i>
        Account Information
      </span>

      <!-- ALERT WRONG EMAIL -->
      <div
        v-if="is_profile_error"
        class="alert alert-danger fs-12 mb-0"
        role="alert"
      >
        <i class="bi bi-x-circle"></i> Error! This Email is Already Exists.
      </div>

      <!-- ALERT UPDATE PROFILE SUCCESS -->
      <div
        v-if="is_profile_success"
        class="alert alert-success fs-12 mb-0"
        role="alert"
      >
        <i class="bi bi-check-circle"></i> Success! Your Account has been
        updated.
      </div>

      <!-- ACCOUNT FORM -->
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(changeAccount)">
          <!-- FULL NAME -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="mb-1">
              <label for="full-name" class="fs-12">
                Full Name <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-person-lines-fill mx-auto my-auto"></i>
                </div>
                <input
                  type="text"
                  id="full-name"
                  :disabled="account.role != 'recruiter'"
                  v-model="account.full_name"
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
            <div class="mb-1">
              <label for="email" class="fs-12">
                Email <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-envelope-check-fill mx-auto my-auto"></i>
                </div>
                <input
                  type="text"
                  id="email"
                  v-model="account.email"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
            <span class="text-danger fs-10">{{ errors[0] }}</span>
          </ValidationProvider>
          <!-- PHONE NUMBER -->
          <ValidationProvider rules="required|numeric" v-slot="{ errors }">
            <div class="mb-1">
              <label for="telephone-number" class="fs-12">
                Phone Number <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-telephone-fill mx-auto my-auto"></i>
                </div>
                <input
                  type="text"
                  id="telephone-number"
                  v-model="account.phone_number"
                  maxlength="12"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- COMPANY NAME -->
          <div v-if="account.role == 'recruiter'">
            <div class="mb-1">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <label for="company_name" class="fs-12">
                  Company Name <span class="text-danger">*</span>
                </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-building-check mx-auto my-auto"></i>
                  </div>
                  <input
                    type="text"
                    id="company_name"
                    v-model="account.company_name"
                    class="form-control input-talent ml-auto"
                  />
                </div>
                <span class="text-validation mt-1" v-if="errors[0]">
                  <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
                </span>
              </ValidationProvider>
            </div>
            <div class="mb-1">
              <label for="company_address" class="fs-12">
                Company Address
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-geo-alt-fill mx-auto my-auto"></i>
                </div>
                <input
                  type="text"
                  id="company_address"
                  v-model="account.company_address"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
            <div class="mb-1">
              <label for="company-subject" class="fs-12">
                Company Subject
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-info-circle-fill mx-auto my-auto"></i>
                </div>
                <input
                  type="text"
                  id="company-subject"
                  v-model="account.company_subject"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
          </div>
          <!-- CHANGE PASSWORD LINK -->
          <div
            class="float-right clickable hoverable text-talent fs-10 link text-talent"
            @click="is_change_password = true"
          >
            Change Password?
          </div>
          <br />
          <!-- SAVE CHANGES BUTTON -->
          <b-button
            size="xs"
            class="btn-talent mt-3 float-right mb-2"
            type="submit"
          >
            Save Changes
            <b-spinner v-if="is_profile_loading" small></b-spinner>
          </b-button>
        </form>
      </ValidationObserver>
    </b-card>

    <!-- CHANGE PASSWORD ITEM -->
    <b-card no-body v-else class="shadow p-3">
      <span class="mb-3 fs-14">
        <i class="bi bi-person-fill-lock"></i>
        Change Password
      </span>

      <!-- ALERT WRONG OLD PASSWORD -->
      <div
        v-if="is_password_error"
        class="alert alert-danger fs-12 mb-0"
        role="alert"
      >
        <i class="bi bi-x-circle"></i> Error! Old Password is Not Valid.
      </div>

      <!-- ALERT CHANGE PASSWORD SUCCESS -->
      <div
        v-if="is_password_success"
        class="alert alert-success fs-12 mb-0"
        role="alert"
      >
        <i class="bi bi-check-circle"></i> Success! Your Password has been
        updated.
      </div>

      <!-- CHANGE PASSWORD FORM -->
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(changePassword)">
          <!-- OLD PASSWORD -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="mb-1">
              <label for="old-password" class="fs-12">
                Old Password
                <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-key-fill mx-auto my-auto"></i>
                </div>
                <input
                  type="password"
                  id="old-password"
                  v-model="change.old_password"
                  placeholder="Input Old Password"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- NEW PASSSWORD -->
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            vid="confirmation"
          >
            <div class="mb-1">
              <label for="news-password" class="fs-12">
                New Password
                <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-key-fill mx-auto my-auto"></i>
                </div>
                <input
                  type="password"
                  id="new-password"
                  v-model="change.new_password"
                  placeholder="Input New Password"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- CONFIRM NEW PASSWORD -->
          <ValidationProvider
            rules="required|confirmed:confirmation"
            v-slot="{ errors }"
          >
            <div class="mb-1">
              <label for="confirm-new-password" class="fs-12">
                Confirm New Password
                <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-key-fill mx-auto my-auto"></i>
                </div>
                <input
                  type="password"
                  id="confirm-new-password"
                  v-model="change.confirm_new_password"
                  placeholder="Confirm New Password"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>

          <!-- ACTION BUTTON -->
          <div class="d-flex align-items-center mt-3 mb-2">
            <!-- CANCEL BUTTON -->
            <b-button
              size="xs"
              variant="danger"
              class="mr-2 ml-auto"
              @click="is_change_password = false"
            >
              Cancel
            </b-button>
            <!-- CHANGE PASSWORD BUTTON -->
            <b-button size="xs" class="btn-talent" type="submit">
              Change Password
              <b-spinner v-if="is_password_loading" small></b-spinner>
            </b-button>
          </div>
        </form>
      </ValidationObserver>
    </b-card>
  </b-modal>
</template>
<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, numeric, confirmed } from "vee-validate/dist/rules";
import cookie from "js-cookie";

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
extend("confirmed", {
  ...confirmed,
  message: "This Confirmed Password Doesn't Match",
});

export default {
  name: "my_account_modal",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      show_password: false,
      is_change_password: false,
      is_profile_loading: false,
      is_profile_success: false,
      is_profile_error: false,
      is_password_loading: false,
      is_password_success: false,
      is_password_error: false,
      account: {
        _id: this.$store.getters.user._id,
        full_name: this.$store.getters.user.full_name,
        email: this.$store.getters.user.email,
        phone_number: this.$store.getters.user.phone_number,
        role: this.$store.getters.user.role,
        company_name:
          this.$store.getters.user.role == "recruiter"
            ? this.$store.getters.user.company_name
            : "",
        company_address:
          this.$store.getters.user.role == "recruiter"
            ? this.$store.getters.user.company_address
            : "",
        company_subject:
          this.$store.getters.user.role == "recruiter"
            ? this.$store.getters.user.company_subject
            : "",
      },
      change: {
        old_password: "",
        new_password: "",
        confirm_new_password: "",
      },
    };
  },
  methods: {
    changeAccount() {
      this.is_profile_loading = true;
      let params = {};
      if (this.account.role == "recruiter") {
        params = {
          full_name: this.account.full_name,
          email: this.account.email,
          phone_number: this.account.phone_number,
          role: this.account.role,
          company_name: this.account.company_name,
          company_address: this.account.company_address,
          company_subject: this.account.company_subject,
        };
      } else {
        params = {
          email: this.account.email,
          phone_number: this.account.phone_number,
          role: this.account.role,
        };
      }
      let url =
        process.env.VUE_APP_API_URL + "account/update/" + this.account._id;
      this.$url
        .post(url, params)
        .then(() => {
          this.is_profile_success = true;
          this.$store.commit("SET_USER", this.account);
          cookie.set("user_data", JSON.stringify(this.account));
          setInterval(() => {
            this.is_profile_success = false;
          }, 5000);
        })
        .catch(() => {
          this.is_profile_error = true;
          setInterval(() => {
            this.is_profile_error = false;
          }, 5000);
        })
        .finally(() => {
          this.is_profile_loading = false;
        });
    },
    changePassword() {
      this.is_password_loading = true;
      let params = {};
      params = {
        old_password: this.change.old_password,
        new_password: this.change.new_password,
      };
      let url =
        process.env.VUE_APP_API_URL +
        "account/update/" +
        this.account._id +
        "/password";
      this.$url
        .post(url, params)
        .then(() => {
          this.is_password_success = true;
          setInterval(() => {
            this.is_password_success = false;
          }, 5000);
        })
        .catch(() => {
          this.is_password_error = true;
          setInterval(() => {
            this.is_password_error = false;
          }, 5000);
        })
        .finally(() => {
          this.is_password_loading = false;
        });
    },
  },
};
</script>