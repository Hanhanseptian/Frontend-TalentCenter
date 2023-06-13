<template>
  <b-modal
    id="edit-employment-modal"
    size="md"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <!-- MODAL TITLE -->
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi bi-pencil-square"></i>
        Edit Employment
      </span>
    </template>

    <!-- MODAL ITEM -->
    <b-card no-body class="shadow p-2">
      <!-- EMPLOYMENT FOROM -->
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(updateEmployment)">
          <!-- COMPANY NAME -->
          <ValidationProvider rules="required" v-slot="{ errors }">
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
                  v-model="employment.company_name"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- WORK FROM -->
          <ValidationProvider rules="required" v-slot="{ errors }">
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
                  v-model="employment.work_from"
                ></b-form-datepicker>
              </div>
            </div>
            <span class="text-validation" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- WORK UNTIL -->
          <div class="mb-2">
            <label for="work-until" class="fs-12"> Work Until </label>
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
                v-model="employment.work_until"
              ></b-form-datepicker>
            </div>
          </div>
          <!-- ROLE -->
          <ValidationProvider rules="required" v-slot="{ errors }">
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
                  v-model="employment.role"
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
            <!-- SAVE BUTTON -->
            <b-button
              size="xs"
              variant="secondary"
              class="btn-talent"
              type="submit"
            >
              Save <b-spinner v-if="is_process" small></b-spinner>
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
      account_id: this.$store.getters.user.user_id,
      _id: "",
      is_process: false,
      employment: {
        company_name: "",
        work_from: "",
        work_until: "",
        role: "",
      },
    };
  },
  methods: {
    updateEmployment() {
      this.is_process = true;
      let api =
        process.env.VUE_APP_API_URL +
        "talent/" +
        this.account_id +
        "/employment/" +
        this._id;
      this.$url
        .post(api, this.employment)
        .then(() => {
          this.$toast.success(`Success! Employment successfully updated.`);
          this.$parent.getProfile(false, false, false, true, false);
        })
        .catch(() => {
          this.$toast.error(
            `Error! An Error occured while updating employment.`
          );
        })
        .finally(() => {
          this.is_process = false;
          this.closeModal();
        });
    },
    resetModal() {
      this.employment = {
        company_name: "",
        work_from: "",
        work_until: "",
        role: "",
      };
    },
    closeModal() {
      this.resetModal();
      this.$bvModal.hide("edit-employment-modal");
    },
  },
};
</script>
