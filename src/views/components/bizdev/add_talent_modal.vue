<template>
  <b-modal id="add-talent" size="md" hide-footer @hidden="closeModal">
    <template #modal-title>
      <i class="bi bi bi-person-fill-add"></i>
      Add New Talent
    </template>
    <b-card no-body class="shadow p-3">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(addTalent)">
          <b-alert :show="is_already_exist" variant="danger" class="p-2 fs-12">
            <i class="bi bi-exclamation-circle fs-14"></i>
            This Email is Already Exists!
          </b-alert>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Full Name -->
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
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <!-- Email -->
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
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Phone Number -->
            <div class="mb-2">
              <label for="subject" class="fs-12">
                Phone Number <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-telephone-fill mx-auto my-auto"></i>
                </div>
                <b-form-input
                  type="number"
                  id="subject"
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
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Company -->
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
                  v-model="talent.company_name"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- Action Button -->
          <div class="d-flex mt-3">
            <b-button
              size="xs"
              variant="danger"
              class="ml-auto mr-2"
              @click="closeModal"
            >
              <span>Cancel</span>
            </b-button>
            <b-button
              size="xs"
              variant="secondary"
              class="btn-talent"
              type="submit"
            >
              <span>Save</span>
            </b-button>
          </div>
        </form>
      </ValidationObserver>
    </b-card>
  </b-modal>
</template>
<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This Field is Required",
});
extend("email", {
  ...email,
  message: "This Email is Not Valid",
});

export default {
  name: "add_talent_modal",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      is_already_exist: false,
      talent: {
        full_name: "",
        email: "",
        phone_number: "",
        company_name: "PT Jayandra",
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
      };
      this.is_already_exist = false;
    },
    closeModal() {
      this.resetModal();
      this.$bvModal.hide("add-talent");
    },
    addTalent() {
      this.is_already_exist = false;
      this.$url
        .post("account/newtalent", this.talent)
        .then(() => {
          this.$toast.success("Success! Talent has been added.");
          this.closeModal();
        })
        .catch(() => {
          this.is_already_exist = true;
        });
    },
  },
};
</script>