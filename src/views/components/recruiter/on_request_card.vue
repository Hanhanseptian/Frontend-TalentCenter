<template>
  <div id="on-request-card">
    <b-card no-body class="shadow-sm border p-3">
      <!-- IDENTITY -->
      <div class="d-flex">
        <i class="bi bi-person-circle fs-30"></i>
        <div class="ml-2">
          <!-- FULL NAME -->
          <span class="fs-14"> {{ data.full_name }} </span>
          <!-- CONTRACT TYPE -->
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
          <!-- ROLE -->
          <div class="fs-12">
            <i class="bi bi-toggles2"></i>
            {{ data.role }}
          </div>
        </div>
        <!-- REJECTED STATUS -->
        <span
          v-if="data.status == 'rejected'"
          class="text-danger ml-auto fs-14"
        >
          Rejected
        </span>
        <!-- WAITING STATUS -->
        <span v-else class="text-talent ml-auto fs-14"> Waiting </span>
      </div>

      <!-- REQUEST WORK DATE -->
      <div class="d-flex align-items-center mt-2">
        <!-- WORK FROM -->
        <div class="mr-2 w-50">
          <label for="work-from" class="fs-12">Work From</label>
          <b-form-datepicker
            id="work-from"
            size="sm"
            class="mb-2 form-date-talent"
            v-model="data.work_from"
            :date-format-options="{
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            }"
            locale="en"
            disabled
          ></b-form-datepicker>
        </div>
        <!-- WORK UNTIL -->
        <div class="w-50">
          <label for="work-until" class="fs-12">Work Until</label>
          <b-form-datepicker
            id="work-until"
            size="sm"
            class="mb-2 form-date-talent"
            v-model="data.work_until"
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

      <!-- ACTION BUTTON -->
      <div class="ml-auto">
        <!-- VIEW DETAIL BUTTON -->
        <b-button size="xs" variant="warning" class="mr-1" @click="viewDetail">
          <i class="bi bi-info-circle mr-1"></i>
          <small>View Detail</small>
        </b-button>
        <!-- DELETE REQUEST BUTTON -->
        <b-button
          v-if="data.status == 'rejected'"
          size="xs"
          variant="danger"
          @click="deleteRequest"
        >
          <i class="bi bi-trash mr-1"></i>
          <small>Delete</small>
        </b-button>
        <!-- CANCEL REQUEST BUTTON -->
        <b-button v-else size="xs" variant="danger" @click="cancelRequest">
          <i class="bi bi-x-circle mr-1"></i>
          <small>Cancel</small>
        </b-button>
      </div>
      
      <!-- REJECTED REASON INFORMATION -->
      <div class="text-danger fs-12 mt-2" v-if="data.status == 'rejected'">
        <i class="bi bi-exclamation-circle"></i>
        {{ data.reason ? data.reason : "-" }}
      </div>
    </b-card>

    <!-- DETAIL TALENT MODAL COMPONENT -->
    <detail-talent-component :id="data.id_talent" ref="detail_talent" />
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
  data() {
    return {
      account_id: this.$store.getters.user.user_id,
    };
  },
  methods: {
    viewDetail() {
      this.$refs.detail_talent.getDetailTalent(this.data.id_talent);
      this.$bvModal.show("detail-talent-" + this.data.id_talent);
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
          let api =
            process.env.VUE_APP_API_URL +
            "request/" +
            this.account_id +
            "/delete";
          this.$url
            .post(api, {
              talents: [
                {
                  talent_id: this.data.id_talent,
                },
              ],
            })
            .then(() => {
              this.$toast.success("Success! Request has been canceled.");
              this.$parent.getRequest();
            })
            .catch(() => {
              this.$toast.error(
                "Error! An Error occured while canceling data."
              );
            });
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
          let api =
            process.env.VUE_APP_API_URL +
            "request/" +
            this.account_id +
            "/delete";
          this.$url
            .post(api, {
              talents: [
                {
                  talent_id: this.data.id_talent,
                },
              ],
            })
            .then(() => {
              this.$toast.success("Success! Request has been canceled.");
              this.$parent.getRequest();
            })
            .catch(() => {
              this.$toast.error(
                "Error! An Error occured while canceling data."
              );
            });
        }
      });
    },
  },
};
</script>