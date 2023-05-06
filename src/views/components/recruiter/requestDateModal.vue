<template>
  <b-modal
    :id="'set-date-modal-' + id.toString()"
    size="sm"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <template #modal-title>
      <i class="bi bi bi-calendar-fill"></i>
      Request Date
    </template>
    <template #modal-footer>
      <span class="display-none"></span>
    </template>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(addToCart)">
        <ValidationProvider rules="required" v-slot="{ errors }">
          <!-- start date -->
          <div class="mr-2 w-100">
            <label for="start-date" class="fs-14 font-weight-bolder">
              Start Date <span class="text-danger">*</span>
            </label>
            <b-form-datepicker
              size="sm"
              class="mb-2"
              :date-format-options="{
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              }"
              locale="en"
              v-model="start_date"
            ></b-form-datepicker>
          </div>
          <span class="text-danger fs-12">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <!-- end date -->
          <div class="mr-auto w-100 mt-3">
            <label for="start-date" class="fs-14 font-weight-bolder">
              End Date <span class="text-danger">*</span>
            </label>
            <b-form-datepicker
              size="sm"
              class="mb-2"
              :date-format-options="{
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              }"
              locale="en"
              v-model="end_date"
            ></b-form-datepicker>
          </div>
          <span class="text-danger fs-12">{{ errors[0] }}</span>
        </ValidationProvider>
        <div class="d-flex mt-3">
          <b-button
            size="sm"
            variant="danger"
            class="ml-auto mr-2"
            @click="closeModal"
          >
            <i class="bi bi-x-circle mr-1"></i>
            <span>Cancel</span>
          </b-button>
          <b-button
            size="sm"
            variant="secondary"
            class="btn-talent"
            type="submit"
          >
            <i class="bi bi-check-circle mr-1"></i>
            <span>Save</span>
          </b-button>
        </div>
      </form>
    </ValidationObserver>
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
  props: {
    id: Number,
  },
  data() {
    return {
      start_date: null,
      end_date: null,
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
      this.$bvModal.hide("set-date-modal-" + this.id.toString());
    },
  },
};
</script>