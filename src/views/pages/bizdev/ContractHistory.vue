<template>
  <div id="terminate-history">
    <!-- BREADCUMB -->
    <div class="d-flex align-items-center mb-3">
      <span class="fs-22">Manage Talents |</span>
      <i class="bi bi-x-circle mx-1 fs-14 mt-1"></i>
      <i class="bi bi-chevron-right fs-14 mt-1"></i>
      <small class="fs-14 mt-1">Contract History</small>
    </div>
    <!-- MAIN CONTENT -->
    <b-card no-body>
      <b-card-header>
        <b-card-title class="d-flex align-items-center">
          Contract History
          <div class="ml-auto">
            <div class="input-group input-group-sm">
              <span class="input-group-text bg-white">
                <i class="bi bi-search fs-12"></i>
              </span>
              <input
                type="text"
                class="form-control form-talent"
                placeholder="Search..."
                v-model="data_table.filter"
              />
            </div>
          </div>
        </b-card-title>
        <span>Showing Contract History of Talent</span>
      </b-card-header>
      <div class="mt-3">
        <table-component striped hover :data="data_table" />
      </div>
    </b-card>
  </div>
</template>
<script>
import data_table from "../../components/data_table.vue";

export default {
  name: "ContractHistory",
  components: {
    "table-component" : data_table,
  },
  data() {
    return {
      data_table: {
        row: 10,
        filter: "",
        fields: [
          {
            key: "no",
            label: "NO",
            thClass: "fs-14 text-center bg-talent text-white p-2",
            tdClass: "fs-14 text-center",
            thStyle: "background-color: #c1dbec;width:3%",
          },
          {
            key: "company_name",
            label: "RECRUITER NAME",
            thClass: "fs-14 text-left bg-talent text-white p-2",
            tdClass: "fs-14 text-left",
            thStyle: "background-color: #c1dbec;width:20%",
          },
          {
            key: "talent_name",
            label: "TALENT NAME",
            thClass: "fs-14 text-left bg-talent text-white p-2",
            tdClass: "fs-14 text-left",
            thStyle: "background-color: #c1dbec;width:20%",
          },
          {
            key: "work_from",
            label: "WORK FROM",
            thClass: "fs-14 text-center bg-talent text-white p-2",
            tdClass: "fs-14 text-center",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "work_until",
            label: "WORK UNTIL",
            thClass: "fs-14 text-center bg-talent text-white p-2",
            tdClass: "fs-14 text-center",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "type",
            label: "STATUS",
            thClass: "fs-14 text-center bg-talent text-white p-2",
            tdClass: "fs-14 text-center",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "reason",
            label: "REASON",
            thClass: "fs-14 text-left bg-talent text-white p-2",
            tdClass: " fs-14 text-left",
            thStyle: "background-color: #c1dbec;width:20%",
          },
        ],
        items: [
          {
            id: 1,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            work_from: "01 Januari 2023",
            work_until: "13 Maret 2023",
            type: "discontinue",
            reason: "Not Dicipline",
          },
          {
            id: 2,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            work_from: "01 Januari 2023",
            work_until: "13 Maret 2023",
            type: "discontinue",
            reason: "Not Dicipline",
          },
          {
            id: 3,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            work_from: "01 Januari 2023",
            work_until: "13 Maret 2023",
            type: "discontinue",
            reason: "Not Dicipline",
          },
          {
            id: 4,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            work_from: "01 Januari 2023",
            work_until: "13 Maret 2023",
            type: "discontinue",
            reason: "Not Dicipline",
          },
          {
            id: 5,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            work_from: "01 Januari 2023",
            work_until: "13 Maret 2023",
            type: "terminating",
            reason: "Not Dicipline",
          },
          {
            id: 6,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            work_from: "01 Januari 2023",
            work_until: "13 Maret 2023",
            type: "discontinue",
            reason: "Not Dicipline",
          },
          {
            id: 7,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            work_from: "01 Januari 2023",
            work_until: "13 Maret 2023",
            type: "terminating",
            reason: "Not Dicipline",
          },
          {
            id: 8,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            work_from: "01 Januari 2023",
            work_until: "13 Maret 2023",
            type: "discontinue",
            reason: "Not Dicipline",
          },
          {
            id: 9,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            work_from: "01 Januari 2023",
            work_until: "13 Maret 2023",
            type: "terminating",
            reason: "Not Dicipline",
          },
          {
            id: 10,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            work_from: "01 Januari 2023",
            work_until: "13 Maret 2023",
            type: "discontinue",
            reason: "Not Dicipline",
          },
          {
            id: 11,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            work_from: "01 Januari 2023",
            work_until: "13 Maret 2023",
            type: "discontinue",
            reason: "Not Dicipline",
          },
        ],
      },
    };
  },
};
</script>
