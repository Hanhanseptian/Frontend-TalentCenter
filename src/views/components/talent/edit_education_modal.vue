<template>
  <b-modal
    id="edit-education-modal"
    size="md"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <!-- MODAL TITLE -->
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi bi-pencil-square"></i>
        Edit Education
      </span>
    </template>

    <!-- MODAL ITEM -->
    <b-card no-body class="shadow p-2">
      <!-- EDUCATION FORM -->
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(updateEducation)">
          <!-- EDUCATION SCHOOL -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="mb-2">
              <label for="school" class="fs-12">
                Education School <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-buildings mx-auto my-auto"></i>
                </div>
                <b-form-input
                  type="text"
                  id="school"
                  class="input-talent ml-auto"
                  placeholder="Input Your Education School"
                  v-model="education.school"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- EDUCATION DEGREE -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="mb-2">
              <label for="dgree" class="fs-12">
                Education Degree <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-mortarboard mx-auto my-auto"></i>
                </div>
                <b-form-input
                  type="text"
                  id="dgree"
                  class="input-talent ml-auto"
                  placeholder="Input Your Education Degree"
                  v-model="education.degree"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- EDUCATION SUBJECT -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="mb-2">
              <label for="subject" class="fs-12">
                Education Subject <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-info-circle mx-auto my-auto"></i>
                </div>
                <b-form-input
                  type="text"
                  id="subject"
                  class="input-talent ml-auto"
                  placeholder="Input Your Education Subject"
                  v-model="education.subject"
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
  name: "add_education_modal",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      account_id: this.$store.getters.user.user_id,
      _id: "",
      is_process: false,
      education: {
        school: "",
        degree: "",
        subject: "",
      },
    };
  },
  methods: {
    updateEducation() {
      this.is_process = true;
      let api =
        process.env.VUE_APP_API_URL +
        "talent/" +
        this.account_id +
        "/education/" +
        this._id;
      this.$url
        .post(api, this.education)
        .then(() => {
          this.$toast.success(`Success! Education successfully updated.`);
          this.$parent.getProfile(false, true, false, false, false);
        })
        .catch(() => {
          this.$toast.error(
            `Error! An Error occured while updating education.`
          );
        })
        .finally(() => {
          this.is_process = false;
          this.closeModal();
        });
    },
    resetModal() {
      this.education = {
        school: "",
        degree: "",
        subject: "",
      };
    },
    closeModal() {
      this.resetModal();
      this.$bvModal.hide("edit-education-modal");
    },
  },
};
</script>
