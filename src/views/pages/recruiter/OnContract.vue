<template>
  <div id="on-contract">
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
          </div>
          <!-- start date -->
          <div class="d-flex align-items-center mt-2">
            <div class="mr-2">
              <label for="start-date" class="fs-12">Start Date</label>
              <b-form-datepicker
                id="start-date"
                size="sm"
                class="mb-2 form-date-talent"
                v-model="item.start_date"
                disabled
              ></b-form-datepicker>
            </div>
            <!-- end date -->
            <div class="mr-2">
              <label for="start-date" class="fs-12">End Date</label>
              <b-form-datepicker
                id="start-date"
                size="sm"
                class="mb-2 form-date-talent"
                v-model="item.end_date"
                disabled
              ></b-form-datepicker>
            </div>
            <!-- cancel button -->
            <div class="mt-4 ml-auto">
              <b-button
                size="xs"
                variant="danger"
              >
                <i class="bi bi-x-circle mr-1"></i>
                <small>Terminate</small>
              </b-button>
              <b-button
                size="xs"
                class="btn-talent ml-1"
              >
                <i class="bi bi-plus-circle mr-1"></i>
                <small>Extend</small>
              </b-button>
            </div>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OnContract",
  data() {
    return {
      on_contract_data: [
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
  methods: {},
};
</script>