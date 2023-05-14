<template>
  <div id="on-contract-card">
    <!-- talent card -->
    <b-card no-body class="shadow-sm border p-3">
      <!-- identity -->
      <div class="d-flex">
        <i class="bi bi-person-circle fs-30"></i>
        <div class="ml-2">
          <!-- talent name -->
          <span class="fs-14"> {{ data.talent_name }} </span>
          <!-- type contract -->
          <span class="fs-12 ml-1">
            <b-badge
              style="position: absolute"
              :variant="data.type == 'extend_contract' ? 'warning' : 'success'"
            >
              {{
                data.type == "extend_contract"
                  ? "Extend Contract"
                  : "New Contract"
              }}
            </b-badge>
          </span>
          <br />
          <!-- role -->
          <div class="fs-12">
            <i class="bi bi-toggles2"></i>
            Frontend Developer
          </div>
        </div>
      </div>
      <!-- Work From -->
      <div class="d-flex align-items-center mt-2">
        <div class="mr-2 w-50">
          <label for="work-from" class="fs-12">Work From</label>
          <b-form-datepicker
            id="work-from"
            size="sm"
            class="mb-2 form-date-talent"
            v-model="data.start_date"
            :date-format-options="{
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            }"
            locale="en"
            disabled
          ></b-form-datepicker>
        </div>
        <!-- Work Until -->
        <div class="w-50">
          <label for="work-until" class="fs-12">Work Until</label>
          <b-form-datepicker
            id="work-until"
            size="sm"
            class="mb-2 form-date-talent"
            v-model="data.end_date"
            :date-format-options="{
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            }"
            locale="en"
            disabled
          ></b-form-datepicker>
        </div>
      </div>
      <!-- cancel button -->
      <div class="ml-auto">
        <b-button size="xs" variant="danger" @click="terminateContract()">
          <i class="bi bi-x-circle mr-1"></i>
          <small>Terminate</small>
        </b-button>
        <b-button size="xs" class="btn-talent ml-1" @click="extendContract()">
          <i class="bi bi-plus-circle mr-1"></i>
          <small>Extend</small>
        </b-button>
      </div>
    </b-card>
    <request-talent-component :id="data.id" />
    <terminate-component :id="data.id" />
  </div>
</template>
<script>
import request_talent_modal from "./request_talent_modal.vue";
import terminate_modal from "./terminate_modal.vue";

export default {
  name: "on_contract_card",
  components: {
    "request-talent-component": request_talent_modal,
    "terminate-component": terminate_modal,
  },
  props: {
    data: Object,
  },
  methods: {
    extendContract() {
      this.$bvModal.show("set-date-modal-" + this.data.id.toString());
    },
    terminateContract() {
      this.$bvModal.show("terminate-modal-" + this.data.id.toString());
    },
  },
};
</script>