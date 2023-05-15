<template>
  <b-modal
    :id="'terminate-modal-' + id"
    size="sm"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi-info-circle"></i>
        Terminate Reason
      </span>
    </template>
    <template #modal-footer>
      <span class="display-none"></span>
    </template>
    <b-card no-body class="shadow p-2">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(addToCart)">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Reason -->
            <div class="mr-2 w-100">
              <label for="start-date" class="fs-12 font-weight-bolder">
                Reason of Terminating <span class="text-danger">*</span>
              </label>
              <b-form-textarea
                class="input-area-talent"
                rows="5"
                v-model="reason"
                style="font-size: 12px !important"
              ></b-form-textarea>
            </div>
            <span class="text-validation mt-1" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
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
              <span>Terminate</span>
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
  name: "terminate_modal",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    id: String,
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
      this.$bvModal.hide("terminate-modal-" + this.id);
    },
  },
};
</script>