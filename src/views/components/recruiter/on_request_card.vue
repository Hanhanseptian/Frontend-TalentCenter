<template>
  <div id="on-request-card">
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
        <!-- status -->
        <span
          v-if="data.status == 'rejected'"
          class="text-danger ml-auto fs-14"
        >
          Rejected
        </span>
        <span v-else class="text-talent ml-auto fs-14"> Waiting </span>
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
        <b-button size="xs" variant="warning" class="mr-1" @click="viewDetail">
          <i class="bi bi-info-circle mr-1"></i>
          <small>View Detail</small>
        </b-button>
        <b-button
          v-if="data.status == 'rejected'"
          size="xs"
          variant="danger"
          @click="deleteRequest"
        >
          <i class="bi bi-trash mr-1"></i>
          <small>Delete</small>
        </b-button>
        <b-button v-else size="xs" variant="danger" @click="cancelRequest">
          <i class="bi bi-x-circle mr-1"></i>
          <small>Cancel</small>
        </b-button>
      </div>
      <!-- rejected reason info -->
      <div class="text-danger fs-12" v-if="data.status == 'rejected'">
        <i class="bi bi-exclamation-circle"></i>
        {{ data.reason ? data.reason : "-" }}
      </div>
    </b-card>
    <detail-talent-component :id="data.id" />
  </div>
</template>
<script>
import Swal from "sweetalert2";
import detail_talent_component from "../detail_talent_modal.vue";

export default {
  name: "on_request_card",
  components: {
    "detail-talent-component": detail_talent_component,
  },
  props: {
    data: Object,
  },
  methods: {
    viewDetail() {
      this.$bvModal.show("detail-talent-" + this.data.id.toString());
    },
    cancelRequest() {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to cancel this request",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Cancel it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Talent has been deleted.", "success");
        }
      });
    },
    deleteRequest() {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this request",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Talent has been deleted.", "success");
        }
      });
    },
  },
};
</script>