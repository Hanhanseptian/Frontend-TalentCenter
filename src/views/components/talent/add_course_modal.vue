<template>
  <b-modal
    id="add-course-modal"
    size="md"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <!-- MODAL TITLE -->
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi bi-newspaper"></i>
        Add New Course / Training
      </span>
    </template>

    <!-- MODAL ITEM -->
    <b-card no-body class="shadow p-2">
      <!-- COURSE FORM -->
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(addCourse)">
          <!-- TITLE -->
          <ValidationProvider rules="required" v-slot="{ errors }">
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
          <!-- PROVIDER -->
          <ValidationProvider rules="required" v-slot="{ errors }">
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
          <!-- DATE -->
          <ValidationProvider rules="required" v-slot="{ errors }">
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
          <!-- DURATION -->
          <ValidationProvider rules="required" v-slot="{ errors }">
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
  name: "add_course_modal",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      account_id: this.$store.getters.user.user_id,
      is_process: false,
      course: {
        title: "",
        provider: "",
        date: "",
        duration: "",
      },
    };
  },
  methods: {
    addCourse() {
      this.is_process = true;
      let api =
        process.env.VUE_APP_API_URL + "talent/" + this.account_id + "/course";
      this.$url
        .post(api, this.course)
        .then(() => {
          this.$toast.success(`Success! Course successfully added.`);
          this.$parent.getProfile(false, false, true, false, false);
        })
        .catch(() => {
          this.$toast.error(`Error! An Error occured while adding courses.`);
        })
        .finally(() => {
          this.is_process = false;
          this.closeModal();
        });
    },
    resetModal() {
      this.course = {
        title: "",
        provider: "",
        date: "",
        duration: "",
      };
    },
    closeModal() {
      this.resetModal();
      this.$bvModal.hide("add-course-modal");
    },
  },
};
</script>
