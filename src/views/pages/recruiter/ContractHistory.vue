<template>
  <div id="terminate-contract">
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
        v-for="item in on_contract_data"
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
                  :variant="item.type == 'discontinue' ? 'info' : 'danger'"
                >
                  {{
                    item.type == "discontinue" ? "Discontinue" : "Termination"
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
            <span class="ml-auto">
              <b-button size="xs" variant="danger" @click="deleteItem">
                <i class="bi bi-trash mr-1"></i>
                <small>Delete</small>
              </b-button>
            </span>
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
            <div
              class="mr-auto w-50"
              v-if="item.type == 'discontinue'"
            >
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
            <!-- terminate date -->
            <div class="mr-auto w-50" v-else>
              <label for="start-date" class="fs-12">Terminate Date</label>
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
          <b-form-group class="mt-2">
            <label class="fs-12">Reason</label>
            <b-form-textarea
              disabled
              v-model="item.reason"
              style="
                font-size: 10px !important;
                border-color: #0173a7 !important;
              "
              rows="3"
            ></b-form-textarea>
          </b-form-group>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";

export default {
  name: "OnContract",
  data() {
    return {
      on_contract_data: [
        {
          id: 1,
          talent_name: "Elon Musk",
          role: "Frontend Developer",
          type: "termination",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          reason: "Talent not dicipline",
        },
        {
          id: 2,
          talent_name: "Elon Musk Junior",
          role: "Backend Developer",
          type: "discontinue",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          reason: "Talent not dicipline",
        },
        {
          id: 3,
          talent_name: "Ayah Elon Musk",
          role: "Frontend Developer",
          type: "discontinue",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          reason: "Talent not dicipline",
        },
        {
          id: 4,
          talent_name: "Kakak Elon Musk",
          role: "Backend Developer",
          type: "termination",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          reason: "Talent not dicipline",
        },
        {
          id: 5,
          talent_name: "Keponakan Elon Musk",
          role: "Fullstack Developer",
          type: "discontinue",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          reason: "Talent not dicipline",
        },
        {
          id: 6,
          talent_name: "Ibu Elon Musk",
          role: "Frontend Developer",
          type: "termination",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          reason: "Talent not dicipline",
        },
      ],
    };
  },
  methods: {
    deleteItem(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this terminate history",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Deleted!",
            "Terminate history has been deleted.",
            "success"
          );
        }
      });
    },
  },
};
</script>