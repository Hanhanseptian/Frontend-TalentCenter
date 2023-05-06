<template>
  <div id="extent-contract">
    <!-- search form -->
    <div class="input-group input-group-sm ml-auto mb-3 form-search">
      <span class="input-group-text bg-white">
        <i class="bi bi-search fs-12"></i>
      </span>
      <input
        type="text"
        class="form-control form-talent"
        placeholder="Search..."
      />
    </div>
    <div class="row">
      <div
        v-for="item in request_data"
        :key="item.id"
        class="col-md-6 col-sm-12 mb-3"
      >
        <!-- talent card -->
        <b-card no-body class="shadow-sm border p-3">
          <!-- identity -->
          <div class="d-flex">
            <i class="bi bi-person-circle fs-30"></i>
            <div class="ml-2">
              <!-- talent name -->
              <span class="fs-14"> {{ item.talent_name }} </span>
              <!-- type contract -->
              <span class="fs-12 ml-1">
                <b-badge
                  style="position: absolute"
                  :variant="
                    item.type == 'extend_contract' ? 'warning' : 'success'
                  "
                >
                  {{
                    item.type == "extend_contract"
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
              v-if="item.status == 'rejected'"
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
                v-model="item.start_date"
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
                v-model="item.end_date"
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
            <b-button
              v-if="item.status == 'rejected'"
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
          <div class="text-danger fs-12" v-if="item.status == 'rejected'">
            <i class="bi bi-exclamation-circle"></i>
            {{ item.reason ? item.reason : "-" }}
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";

export default {
  name: "MyRequest",
  data() {
    return {
      request_data: [
        {
          id: 1,
          talent_name: "Elon Musk",
          role: "Frontend Developer",
          type: "new_contract",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          status: "waiting",
          reason: "",
        },
        {
          id: 2,
          talent_name: "Elon Musk Junior",
          role: "Backend Developer",
          type: "extend_contract",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          status: "rejected",
          reason: "Talent has been recruited",
        },
        {
          id: 3,
          talent_name: "Ayah Elon Musk",
          role: "Frontend Developer",
          type: "extend_contract",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          status: "waiting",
          reason: "",
        },
        {
          id: 4,
          talent_name: "Kakak Elon Musk",
          role: "Backend Developer",
          type: "new_contract",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          status: "rejected",
          reason: "Talent has been recruited",
        },
        {
          id: 5,
          talent_name: "Keponakan Elon Musk",
          role: "Fullstack Developer",
          type: "extend_contract",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          status: "rejected",
          reason: "Talent has been recruited",
        },
        {
          id: 6,
          talent_name: "Ibu Elon Musk",
          role: "Frontend Developer",
          type: "new_contract",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          status: "waiting",
          reason: "",
        },
      ],
    };
  },
  methods: {
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