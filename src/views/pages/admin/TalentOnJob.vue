<template>
  <div id="talent-on-job">
    <!-- BREADCUMB -->
    <div class="d-flex align-items-center mb-3">
      <span class="fs-22">Manage Talents |</span>
      <i class="bi bi-person-fill-check mx-1 fs-14 mt-1"></i>
      <i class="bi bi-chevron-right fs-14 mt-1"></i>
      <small class="fs-14 mt-1">Talent o Job</small>
    </div>
    <!-- MAIN CONTENT -->
    <b-card>
      <b-card-header>
        <b-card-title class="d-flex align-items-center">
          Talent on Job
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
        <span>Showing All of Talent on Job</span>
      </b-card-header>
      <b-card-body class="mt-3">
        <data_table striped hover :data="data_table"></data_table>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
import { BCard, BCardHeader, BCardBody, BTable } from "bootstrap-vue";
import data_table from "../../components/data_table.vue";

export default {
  name: "TalentOnJob",
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BTable,
    data_table,
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
            thClass: "text-talent text-center ",
            tdClass: " text-talent text-center",
            thStyle: "background-color: #c1dbec;width:5%",
          },
          {
            key: "company_name",
            label: "COMPANY NAME",
            thClass: "text-talent text-left ",
            tdClass: " text-talent text-left",
            thStyle: "background-color: #c1dbec;width:auto",
          },
          {
            key: "talent_name",
            label: "TALENT NAME",
            thClass: "text-talent text-left ",
            tdClass: " text-talent text-left",
            thStyle: "background-color: #c1dbec;width:30%",
          },
          {
            key: "start_date",
            label: "START DATE",
            thClass: "text-talent text-center ",
            tdClass: " text-talent text-center",
            thStyle: "background-color: #c1dbec;width:15%",
          },
          {
            key: "end_date",
            label: "END DATE",
            thClass: "text-talent text-center ",
            tdClass: " text-talent text-center",
            thStyle: "background-color: #c1dbec;width:15%",
          },
        ],
        items: [
          {
            id: 1,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            start_date: "31 Januari 2023",
            end_date: "31 Januari 2024",
          },
          {
            id: 2,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            start_date: "31 Januari 2023",
            end_date: "31 Januari 2024",
          },
          {
            id: 3,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            start_date: "31 Januari 2023",
            end_date: "31 Januari 2024",
          },
          {
            id: 4,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            start_date: "31 Januari 2023",
            end_date: "31 Januari 2024",
          },
          {
            id: 5,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            start_date: "31 Januari 2023",
            end_date: "31 Januari 2024",
          },
          {
            id: 6,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            start_date: "31 Januari 2023",
            end_date: "31 Januari 2024",
          },
          {
            id: 7,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            start_date: "31 Januari 2023",
            end_date: "31 Januari 2024",
          },
          {
            id: 8,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            start_date: "31 Januari 2023",
            end_date: "31 Januari 2024",
          },
          {
            id: 9,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            start_date: "31 Januari 2023",
            end_date: "31 Januari 2024",
          },
          {
            id: 10,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            start_date: "31 Januari 2023",
            end_date: "31 Januari 2024",
          },
          {
            id: 11,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            start_date: "31 Januari 2023",
            end_date: "31 Januari 2024",
          },
          {
            id: 12,
            company_name: "PT Len Indonesia",
            talent_name: "Muhammad Hafidz",
            start_date: "31 Januari 2023",
            end_date: "31 Januari 2024",
          },
          
        ],
      },
    };
  },
};
</script>
