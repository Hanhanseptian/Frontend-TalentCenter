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
      <!-- start date -->
      <div class="d-flex align-items-center mt-2">
        <div class="mr-2 w-50">
          <label for="start-date" class="fs-12">Start Date</label>
          <b-form-datepicker
            id="start-date"
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
        <!-- end date -->
        <div class="w-50">
          <label for="start-date" class="fs-12">End Date</label>
          <b-form-datepicker
            id="start-date"
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
    <request-date-modal :id="data.id" />
    <terminate-modal :id="data.id" />
  </div>
</template>
<script>
import requestDateModalVue from "./requestDateModal.vue";
import terminateModalVue from "./terminateModal.vue";

export default {
  name: "onContractCard",
  components: {
    "request-date-modal": requestDateModalVue,
    "terminate-modal": terminateModalVue,
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