<template>
  <div id="on-cart-card">
    <!-- card container -->
    <b-card no-body class="shadow-sm border p-3">
      <!-- identity -->
      <div class="d-flex">
        <i class="bi bi-person-circle fs-30"></i>
        <div class="ml-2">
          <span class="fs-14">Muhammad Afzaki</span>
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
          <div class="fs-12">
            <i class="bi bi-building-fill"></i>
            PT Jayandra
            <i class="bi bi-telephone-fill ml-3"></i>
            08201292039
          </div>
        </div>
      </div>
      <!-- work from -->
      <div class="d-flex align-items-center">
        <div class="mr-2 w-50">
          <label for="work-from" class="fs-12">Work From</label>
          <b-form-datepicker
            size="sm"
            disabled
            class="mb-2 form-date-talent"
            v-model="data.start_date"
            :date-format-options="{
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            }"
            locale="en"
            placeholder="Work From"
          ></b-form-datepicker>
        </div>
        <!-- work until -->
        <div class="w-50">
          <label for="work-until" class="fs-12">Work Until</label>
          <b-form-datepicker
            size="sm"
            disabled
            class="mb-2 form-date-talent"
            v-model="data.end_date"
            :date-format-options="{
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            }"
            locale="en"
            placeholder="Work Until"
          ></b-form-datepicker>
        </div>
      </div>
      <!-- delete button -->
      <div class="d-flex align-items-center">
        <b-button
          variant="danger"
          class="btn-xs mr-2 ml-auto d-flex align-items-center"
          @click="reject()"
        >
          <i class="bi bi-x-circle mr-1"></i>
          <span class="fs-12">Reject</span>
        </b-button>
        <b-button
          size="xs"
          variant="info"
          class="d-flex align-items-center btn-talent"
          @click="approve(data.talent_name)"
        >
          <i class="bi bi-check-circle mr-1"></i>
          <small>Approve</small>
        </b-button>
      </div>
    </b-card>
    <detail-talent-component :id="data.id" />
  </div>
</template>
<script>
import Swal from "sweetalert2";
import detail_talent_modal from "../detail_talent_modal.vue";

export default {
  name: "request_list_card",
  components: {
    "detail-talent-component": detail_talent_modal,
  },
  props: {
    data: Object,
  },
  methods: {
    reject() {
      Swal.fire({
        title: "Are you sure?",
        text: `You want to reject this request`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Reject it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.$toast.success("Success! Request has been rejected.");
        }
      });
    },
    approve() {
      Swal.fire({
        title: "Are you sure?",
        text: `You want to approve this request`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Approve it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.$toast.success("Success! Request has been approved.");
        }
      });
    },
  },
};
</script>

<style>
.item-container {
  overflow: auto;
}
</style>