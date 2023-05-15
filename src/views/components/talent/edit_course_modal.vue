<template>
  <b-modal
    id="edit-course-modal"
    size="md"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi bi-pencil-square"></i>
        Edit Course / Training
      </span>
    </template>
    <b-card no-body class="shadow p-2">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(addToCart)">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Title -->
            <div class="mb-2">
              <label for="title" class="fs-12">
                Title <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-info-circle mx-auto my-auto"></i>
                </div>
                <b-form-input
                  type="text"
                  id="title"
                  class="input-talent ml-auto"
                  placeholder="Input Your Course Title"
                  v-model="course.title"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Provider -->
            <div class="mb-2">
              <label for="provider" class="fs-12">
                Provider <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-diagram-2 mx-auto my-auto"></i>
                </div>
                <b-form-input
                  type="text"
                  id="provider"
                  class="input-talent ml-auto"
                  placeholder="Input Your Course Provider"
                  v-model="course.provider"
                />
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Date -->
            <div class="mb-2">
              <label for="date" class="fs-12">
                Date <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-calendar-fill mx-auto my-auto"></i>
                </div>
                <b-form-datepicker
                  id="date"
                  class="mb-2 form-date-talent input-talent"
                  :date-format-options="{
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                  }"
                  locale="en"
                  placeholder="Choose Your Course Date"
                  v-model="course.date"
                ></b-form-datepicker>
              </div>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Duration -->
            <div class="mb-2">
              <label for="duration" class="fs-12">
                Duration <span class="text-danger">*</span>
              </label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control mr-1">
                  <i class="bi bi-hourglass-top mx-auto my-auto"></i>
                </div>
                <b-form-input
                  type="text"
                  id="duration"
                  class="input-talent ml-auto"
                  placeholder="Input Your Course Duration"
                  v-model="course.duration"
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
  name: "add_course_modal",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      course: {
        title: "",
        provider: "",
        date: "",
        duration: "",
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
      this.$bvModal.hide("add-course-modal");
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
