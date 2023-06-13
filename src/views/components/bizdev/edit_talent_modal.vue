<template>
  <b-modal id="edit-talent" size="md" hide-footer @hidden="closeModal">
    <!-- MODAL TITLE -->
    <template #modal-title>
      <i class="bi bi bi-pencil-square"></i>
      Edit Talent
    </template>

    <!-- MODAL ITEM -->
    <b-card no-body class="shadow p-3">
      <!-- TALENT FORM -->
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(updateTalent)">
          <!-- ALERT WRONG EMAIL -->
          <b-alert :show="is_already_exist" variant="danger" class="p-2 fs-12">
            <i class="bi bi-exclamation-circle fs-14"></i>
            This Email is Already Exists!
          </b-alert>
          <!-- FULL NAME -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="mb-2">
              <label for="school" class="fs-12">
                Full Name <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-person-lines-fill mx-auto my-auto"></i>
                </div>
                <b-form-input
                  type="text"
                  id="school"
                  class="input-talent ml-auto"
                  placeholder="Input Your Full Name"
                  v-model="talent.full_name"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- EMAIL -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="mb-2">
              <label for="dgree" class="fs-12">
                Email <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-envelope-at-fill mx-auto my-auto"></i>
                </div>
                <b-form-input
                  type="text"
                  id="dgree"
                  class="input-talent ml-auto"
                  placeholder="Input Your Email"
                  v-model="talent.email"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- PHONE NUMBER -->
          <ValidationProvider rules="required|numeric" v-slot="{ errors }">
            <div class="mb-2">
              <label for="subject" class="fs-12">
                Phone Number <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-telephone-fill mx-auto my-auto"></i>
                </div>
                <b-form-input
                  type="text"
                  id="subject"
                  maxLength="12"
                  class="input-talent ml-auto"
                  placeholder="Input Your Phone Number"
                  v-model="talent.phone_number"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- COMPANY -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="mb-2">
              <label for="company" class="fs-12">
                Company <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-building-fill mx-auto my-auto"></i>
                </div>
                <b-form-select
                  id="company"
                  class="input-talent ml-auto"
                  placeholder="Input Your Status"
                  :options="company_options"
                  v-model="talent.company"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- STATUS -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="mb-2">
              <label for="status" class="fs-12">
                Status <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-info-circle mx-auto my-auto"></i>
                </div>
                <b-form-select
                  id="status"
                  class="input-talent ml-auto"
                  placeholder="Input Your Status"
                  :options="status_options"
                  v-model="talent.status"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- ACTION BUTTON -->
          <div class="d-flex mt-3">
            <!-- CANCEL BUTTON -->
            <b-button
              size="xs"
              variant="danger"
              class="ml-auto mr-2"
              @click="closeModal"
            >
              <span>Cancel</span>
            </b-button>
            <!-- UPDATE BUTTON -->
            <b-button
              size="xs"
              variant="secondary"
              class="btn-talent"
              type="submit"
            >
              Update
              <b-spinner class="ml-1" v-if="is_process" small></b-spinner>
            </b-button>
          </div>
        </form>
      </ValidationObserver>
    </b-card>
  </b-modal>
</template>
<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, numeric } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This Field is Required",
});
extend("email", {
  ...email,
  message: "This Email is Not Valid",
});
extend("numeric", {
  ...numeric,
  message: "This Fiels Must be a Number",
});

export default {
  name: "edit_talent_modal",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      is_already_exist: false,
      is_process: false,
      talent: {
        _id: "",
        full_name: "",
        email: "",
        phone_number: "",
        company: "PT Jayandra",
        status: "available",
      },
      company_options: [
        { value: "PT Jayandra", text: "PT Jayandra" },
        {
          value: "CV Garuda Infinity Kreasindo",
          text: "CV Garuda Infinity Kreasindo",
        },
        { value: "Padepokan 79", text: "Padepokan 79" },
      ],
      status_options: [
        { value: "available", text: "Available" },
        { value: "not_available", text: "Not Available" },
        { value: "on_job", text: "On Job" },
      ],
    };
  },
  methods: {
    resetModal() {
      this.talent = {
        full_name: "",
        email: "",
        phone_number: "",
        company: "PT Jayandra",
        status: "available",
      };
      this.is_already_exist = false;
    },
    closeModal() {
      this.resetModal();
      this.$bvModal.hide("edit-talent");
    },
    updateTalent() {
      this.is_process = true;
      let api =
        process.env.VUE_APP_API_URL + "talent/" + this.talent._id + "/profile";
      this.$url
        .post(api, {
          editor: "bizdev",
          company: this.talent.company,
          status: this.talent.status,
        })
        .then(() => {
          this.$toast.success(`Success! Request successfully updated.`);
          this.closeModal();
        })
        .catch(() => {
          this.$toast.error(`Error! An Error Occured while updating data.`);
        })
        .finally(() => {
          this.is_process = false;
          this.$parent.getTalentList();
        });
    },
  },
};
</script>