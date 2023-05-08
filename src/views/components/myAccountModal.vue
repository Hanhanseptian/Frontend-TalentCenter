<template>
  <b-modal
    id="my-account-talent"
    size="sm"
    ref="modal"
    ok-title="Back"
    ok-only
    ok-variant="outline-danger"
    button-size="sm"
    hide-footer
  >
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi-person-fill-gear"></i>
        My Account
      </span>
    </template>
    <!-- account information -->
    <b-card no-body v-if="!is_change_password" class="shadow p-2">
      <span class="mb-3 fs-14">
        <i class="bi bi-person-fill-gear"></i>
        Account Information
      </span>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(changeAccount)">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- full name -->
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
                  v-model="account.fullname"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <!-- email -->
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
                  disabled
                  v-model="account.email"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
            <span class="text-danger fs-10">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider rules="required|numeric" v-slot="{ errors }">
            <!-- telephone number -->
            <div class="mb-1">
              <label for="telephone-number" class="fs-12">
                Telephone Number <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-telephone-fill mx-auto my-auto"></i>
                </div>
                <input
                  type="text"
                  id="telephone-number"
                  v-model="account.telephone_number"
                  maxlength="12"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- action button -->
          <div
            class="float-right clickable hoverable text-talent fs-10 link text-talent"
            @click="is_change_password = true"
          >
            Change Password?
          </div>
          <br />
          <b-button size="xs" class="btn-talent mt-3 float-right" type="submit">
            Save Changes
          </b-button>
        </form>
      </ValidationObserver>
    </b-card>
    <!-- change password -->
    <b-card no-body v-else class="shadow p-2">
      <span class="mb-3 fs-14">
        <i class="bi bi-person-fill-lock"></i>
        Change Password
      </span>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(changePassword)">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- old password -->
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
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            vid="confirmation"
          >
            <!-- new password -->
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
          <ValidationProvider
            rules="required|confirmed:confirmation"
            v-slot="{ errors }"
          >
            <!-- confirm new password -->
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
                  v-model="account.password"
                  placeholder="Confirm New Password"
                  class="form-control input-talent ml-auto"
                />
              </div>
            </div>
             <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- action button -->
          <div class="d-flex align-items-center mt-3">
            <b-button
              size="xs"
              variant="danger"
              class="mr-2 ml-auto"
              @click="is_change_password = false"
            >
              Cancel
            </b-button>
            <b-button size="xs" class="btn-talent" type="submit">
              Change Password
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
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      show_password: false,
      is_change_password: false,
      account: {
        fullname: "Hanhan Septian",
        email: "septianhanhan0909@gmail.com",
        telephone_number: "081218030424",
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
      alert("submitted");
      this.$bvModal.hide("my-account-talent");
    },
    changePassword() {
      alert("change password");
      this.change = {
        old_password: "",
        new_password: "",
        confirm_new_password: "",
      };
      this.$bvModal.hide("my-account-talent");
    },
  },
};
</script>