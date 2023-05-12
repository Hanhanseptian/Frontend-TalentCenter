<template>
  <b-modal
    :id="'set-date-modal-' + id.toString()"
    size="sm"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi bi-cart-plus"></i>
        Request Talent
      </span>
    </template>
    <b-card no-body class="shadow p-2">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(addToCart)">
          <!-- Talent Name -->
          <div>
            <label for="name" class="fs-12"> Talent Name </label>
            <div class="d-flex">
              <b-form-input
                type="text"
                id="name"
                class="input-talent"
                disabled
                v-model="name"
              />
            </div>
          </div>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Work From -->
            <div class="mt-2 mr-2 w-100">
              <label for="start-date" class="fs-12">
                Work From <span class="text-danger">*</span>
              </label>
              <b-form-datepicker
                class="mb-2 form-date-talent input-talent"
                :date-format-options="{
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit',
                }"
                locale="en"
                placeholder="Select Talent Work From"
                v-model="start_date"
              ></b-form-datepicker>
            </div>
            <span class="text-validation" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <!-- Work Until -->
            <div class="mr-auto w-100 mt-2">
              <label for="start-date" class="fs-12">
                Work Until <span class="text-danger">*</span>
              </label>
              <b-form-datepicker
                class="mb-2 form-date-talent input-talent"
                :date-format-options="{
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit',
                }"
                locale="en"
                placeholder="Select Talent Work Until"
                v-model="end_date"
              ></b-form-datepicker>
            </div>
            <span class="text-validation" v-if="errors[0]">
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
              <span>Add to Cart</span>
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
  name: "request_talent_modal",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    id: Number,
  },
  data() {
    return {
      name: "Hanhan Septian",
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
