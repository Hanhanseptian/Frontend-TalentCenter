<template>
  <b-modal
    :id="'terminate-modal-' + id.toString()"
    size="md"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <template #modal-title>
      <i class="bi bi bi-info-circle"></i>
      Terminate Reason
    </template>
    <template #modal-footer>
      <span class="display-none"></span>
    </template>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(addToCart)">
        <ValidationProvider rules="required" v-slot="{ errors }">
          <!-- Reason -->
          <div class="mr-2 w-100">
            <label for="start-date" class="fs-14 font-weight-bolder">
              Reason of Terminating <span class="text-danger">*</span>
            </label>
            <b-form-textarea rows="10" v-model="reason"></b-form-textarea>
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
            <span>Terminate</span>
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
      reason: "",
    };
  },
  methods: {
    addToCart() {
      alert("submitted");
      this.closeModal();
    },
    resetModal() {
      this.reason = "";
    },
    closeModal() {
      this.resetModal();
      this.$bvModal.hide("terminate-modal-" + this.id.toString());
    },
  },
};
</script>