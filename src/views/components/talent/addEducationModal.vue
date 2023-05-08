<template>
  <b-modal
    id="add-education-modal"
    size="md"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi bi-mortarboard"></i>
        Add New Education
      </span>
    </template>
    <b-card no-body class="shadow p-2">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(addToCart)">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Education School -->
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
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Education Degree -->
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
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Education Subject -->
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
  name: "addCartModal",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      education: {
        school: "",
        degree: "",
        subject: "",
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
      this.$bvModal.hide("add-education-modal");
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
