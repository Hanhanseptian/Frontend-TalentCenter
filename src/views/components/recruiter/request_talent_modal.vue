<template>
  <b-modal
    :id="'set-date-modal-' + id"
    size="md"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <!-- MODAL TITLE -->
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi bi-bookmark-check-fill"></i>
        Mark Talent
      </span>
    </template>

    <!-- MODAL ITEM -->
    <b-card no-body class="shadow p-3">
      <!-- REQUEST FORM -->
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(saveMarkedTalent)">
          <!-- TALENT NAME -->
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
          <!-- WORK FROM -->
          <ValidationProvider rules="required" v-slot="{ errors }">
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
                v-model="work_from"
              ></b-form-datepicker>
            </div>
            <span class="text-validation" v-if="errors[0]">
              <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
            </span>
          </ValidationProvider>
          <!-- WORK UNTIL -->
          <ValidationProvider rules="required" v-slot="{ errors }">
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
                v-model="work_until"
              ></b-form-datepicker>
            </div>
            <span class="text-validation" v-if="errors[0]">
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
            <!-- MARK BUTTON -->
            <b-button
              size="xs"
              variant="secondary"
              class="btn-talent d-flex align-items-center"
              type="submit"
            >
              Mark
              <b-spinner class="ml-1" v-if="is_loading" small></b-spinner>
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
    id: String,
  },
  data() {
    return {
      is_loading: false,
      account_id: this.$store.getters.user.user_id,
      name: "",
      work_from: null,
      work_until: null,
    };
  },
  methods: {
    saveMarkedTalent() {
      this.is_loading = true;
      this.$url
        .post("request/add", {
          recruiter_id: this.account_id,
          talent_id: this.id,
          work_from: this.work_from,
          work_until: this.work_until,
        })
        .then(() => {
          this.$toast.success("Success! Talent has been marked.");
          this.closeModal();
        })
        .catch(() => {
          this.$toast.error(
            "Error! Talent is already in your marked Talent or your Request."
          );
          this.closeModal();
        })
        .finally(() => {
          this.is_loading = false;
        });
    },
    resetModal() {
      this.name = "";
      this.work_from = null;
      this.work_until = null;
    },
    closeModal() {
      this.resetModal();
      this.$bvModal.hide("set-date-modal-" + this.id);
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
