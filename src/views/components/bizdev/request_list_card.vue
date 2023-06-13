<template>
  <div id="on-cart-card">
    <b-card no-body class="shadow-sm border p-3">
      <!-- TALENT IDENTITY -->
      <div class="d-flex">
        <i class="bi bi-person-circle fs-30"></i>
        <div class="ml-2">
          <!-- FULLNAME -->
          <span class="fs-14">{{ data.full_name }}</span>
          <!-- STATUS REQUEST -->
          <span class="fs-12 ml-1">
            <b-badge
              style="position: absolute"
              :variant="data.type == 'new_contract' ? 'success' : 'warning'"
            >
              {{
                data.type == "new_contract" ? "New Contract" : "Extend Contract"
              }}
            </b-badge>
          </span>
          <br />
          <!-- COMPANY NAME & PHONE NUMBER -->
          <div class="fs-12">
            <i class="bi bi-building-fill"></i>
            {{ data.company_name }}
            <i class="bi bi-telephone-fill ml-3"></i>
            {{ data.phone_number }}
          </div>
        </div>
      </div>
      <!-- REQUEST WORK DATE -->
      <div class="d-flex align-items-center">
        <!-- WORK FROM -->
        <div class="mr-2 w-50">
          <label for="work-from" class="fs-12">Work From</label>
          <b-form-datepicker
            size="sm"
            disabled
            class="mb-2 form-date-talent"
            v-model="data.work_from"
            :date-format-options="{
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            }"
            locale="en"
            placeholder="Work From"
          ></b-form-datepicker>
        </div>
        <!-- WORK UNTIL -->
        <div class="w-50">
          <label for="work-until" class="fs-12">Work Until</label>
          <b-form-datepicker
            size="sm"
            disabled
            class="mb-2 form-date-talent"
            v-model="data.work_until"
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
      <!-- ACTION BUTTON -->
      <div class="d-flex align-items-center">
        <!-- REJECT BUTTON -->
        <b-button
          variant="danger"
          class="btn-xs mr-2 ml-auto d-flex align-items-center"
          @click="rejectRequest(data.talent_id)"
        >
          <i class="bi bi-x-circle mr-1"></i>
          <span class="fs-12">Reject</span>
        </b-button>
        <!-- APPROVE BUTTON -->
        <b-button
          size="xs"
          variant="info"
          class="d-flex align-items-center btn-talent"
          @click="approveRequest(data.talent_id)"
        >
          <i class="bi bi-check-circle mr-1"></i>
          <small>Approve</small>
        </b-button>
      </div>
    </b-card>

    <!-- REJECTION MODAL COMPONENT -->
    <rejection-component :id="data.talent_id" :data="reject_data" />
  </div>
</template>
<script>
import Swal from "sweetalert2";
import rejection_modal from "./rejection_modal.vue";

export default {
  name: "request_list_card",
  components: {
    "rejection-component": rejection_modal,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      reject_data: [],
    };
  },
  methods: {
    rejectRequest(id) {
      this.reject_data = [
        {
          talent_id: id,
          reason: null,
        },
      ];
      this.$bvModal.show("rejection-modal-" + id);
    },
    approveRequest(id) {
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
          let api =
            process.env.VUE_APP_API_URL +
            "bizdev/request/" +
            atob(this.$route.query.id) +
            "/approve";
          this.$url
            .post(api, {
              talents: [
                {
                  talent_id: id,
                },
              ],
            })
            .then(() => {
              this.$toast.success("Success! Request has been approved.");
              this.$parent.getDetailRequest();
            })
            .catch(() => {
              this.$toast.error("Error! An Error while approved this request.");
            });
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