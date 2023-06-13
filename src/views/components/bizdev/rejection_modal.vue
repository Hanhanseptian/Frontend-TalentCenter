<template>
  <b-modal
    :id="'rejection-modal-' + id"
    size="md"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <!-- MODAL TITLE -->
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi-x-circle"></i>
        Rejecting Request
      </span>
    </template>

    <!-- MODAL FOOTER -->
    <template #modal-footer>
      <span class="display-none"></span>
    </template>

    <!-- MODAL ITEM -->
    <b-card no-body class="shadow p-3">
      <!-- REJECTION FORM -->
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(rejectRequest)">
          <!-- REASON -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="mr-2 w-100">
              <label for="start-date" class="fs-12 font-weight-bolder">
                Reason of Rejecting <span class="text-danger">*</span>
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
            <!-- REJECT BUTTON -->
            <b-button
              size="xs"
              variant="secondary"
              class="btn-talent"
              type="submit"
            >
              Reject <b-spinner v-if="is_process" small></b-spinner>
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
    data: Array,
    is_all: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      reason: "",
      is_process: false,
    };
  },
  methods: {
    rejectRequest() {
      let params = [];
      for (let i = 0; i < this.data.length; i++) {
        let temp = {
          talent_id: this.data[i].talent_id,
          reason: this.reason,
        };
        params.push(temp);
      }
      this.is_process = true;
      let api =
        process.env.VUE_APP_API_URL +
        "bizdev/request/" +
        atob(this.$route.query.id) +
        "/rejected";
      this.$url
        .post(api, {
          talents: params,
        })
        .then(() => {
          this.closeModal();
          this.$toast.success("Success! Request has been rejected.");
          if (this.is_all) {
            this.$parent.getDetailRequest();
          } else {
            this.$parent.$parent.getDetailRequest();
          }
        })
        .catch(() => {
          this.$toast.error("Error! An Error while rejecting this request.");
        })
        .finally(() => {
          this.is_process = false;
        });
    },
    resetModal() {
      this.reason = "";
    },
    closeModal() {
      this.$bvModal.hide("rejection-modal-" + this.id);
      this.resetModal();
    },
  },
};
</script>