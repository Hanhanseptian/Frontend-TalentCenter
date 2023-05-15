<template>
  <b-modal
    id="edit-employement-modal"
    size="md"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi bi-pencil-square"></i>
        Edit Employment
      </span>
    </template>
    <b-card no-body class="shadow p-2">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(addToCart)">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Company Name -->
            <div class="mb-2">
              <label for="company_name" class="fs-12">
                Company Name <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-building-check mx-auto my-auto"></i>
                </div>
                <b-form-input
                  type="text"
                  id="company_name"
                  class="input-talent ml-auto"
                  placeholder="Input Your Company Name"
                  v-model="employement.company_name"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Work From -->
            <div class="mb-2">
              <label for="work-from" class="fs-12">
                Work From <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-calendar-fill mx-auto my-auto"></i>
                </div>
                <b-form-datepicker
                  id="work-from"
                  class="mb-2 form-date-talent input-talent"
                  :date-format-options="{
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                  }"
                  locale="en"
                  placeholder="Choose Work From"
                  v-model="employement.work_from"
                ></b-form-datepicker>
              </div>
            </div>
            <span class="text-validation" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- Work Until -->
          <div class="mb-2">
            <label for="work-until" class="fs-12">
              Work Until <span class="text-danger">*</span>
            </label>
            <div class="d-flex">
              <div class="icon-talent d-flex p-0 form-control mr-1">
                <i class="bi bi-calendar-fill mx-auto my-auto"></i>
              </div>
              <b-form-datepicker
                id="work-until"
                class="mb-2 form-date-talent input-talent"
                :date-format-options="{
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit',
                }"
                locale="en"
                placeholder="Choose Work Until"
                v-model="employement.work_until"
              ></b-form-datepicker>
            </div>
          </div>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Role -->
            <div class="mb-2">
              <label for="role" class="fs-12">
                Role <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-toggles2 mx-auto my-auto"></i>
                </div>
                <b-form-input
                  type="text"
                  id="role"
                  class="input-talent ml-auto"
                  placeholder="Input Your Role"
                  v-model="employement.role"
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
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This Field is Required",
});

export default {
  name: "add_employment_modal",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      employement: {
        company_name: "",
        work_from: "",
        work_until: "",
        role: "",
      },
    };
  },
  methods: {
    addToCart() {
      alert("submitted");
      this.closeModal();
    },
    resetModal() {
      this.start_date = null;
      this.end_date = null;
    },
    closeModal() {
      this.resetModal();
      this.$bvModal.hide("add-employement-modal");
    },
  },
};
</script>
<style scoped>
.date-talent {
  border-radius: 7px !important;
  border-color: #0173a7 !important;
  /* font-size: 16px !important; */
  height: 2.5rem !important;
  background-color: #eff2f4;
}
.date-talent:focus {
  box-shadow: 2px 2px 2px #0173a7 !important;
  border-color: none !important;
}
</style>
