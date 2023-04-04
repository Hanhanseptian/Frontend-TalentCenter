<template>
  <div class="text-talent">
    <!-- BREADCUMB -->
    <div class="d-flex align-items-center mb-3">
      <span>Dashboard |</span>
      <i class="bi bi-speedometer mx-1 fs-10 mt-1"></i>
      <i class="bi bi-chevron-right fs-10 mt-1"></i>
      <small class="fs-12 mt-1">Dashboard</small>
    </div>
    <!-- MAIN CONTENT -->
    <b-card no-body>
      <b-card-header class="d-flex align-items-center">
        <div>
          <span>Waiting Hired List</span> <br />
          <small class="fs-10">Showing All of Waiting Talent Hired List</small>
        </div>
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
      </b-card-header>
      <b-card-body class="p-0 mt-3">
        <data_table striped hover :data="data_table"></data_table>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
import { BCard, BCardHeader, BCardBody, BTable } from "bootstrap-vue";
import data_table from "../../components/data_table.vue";

export default {
  name: "Dashboard",
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
            thClass: "text-talent text-center fs-12",
            tdClass: "fs-12 text-talent text-center",
            thStyle: "background-color: #c1dbec;width:2%",
          },
          {
            key: "name",
            thClass: "text-talent text-left fs-12",
            tdClass: "fs-12 text-talent text-left",
            thStyle: "background-color: #c1dbec;width:auto",
          },
          {
            key: "gender",
            thClass: "text-talent text-center fs-12",
            tdClass: "fs-12 text-talent text-center",
            thStyle: "background-color: #c1dbec;width:10%",
          },
          {
            key: "email",
            thClass: "text-talent text-left fs-12",
            tdClass: "fs-12 text-talent text-left",
            thStyle: "background-color: #c1dbec;width:20%",
          },
          {
            key: "contact",
            thClass: "text-talent text-center fs-12",
            tdClass: "fs-12 text-talent text-center",
            thStyle: "background-color: #c1dbec;width:5%",
          },
          {
            key: "status",
            thClass: "text-talent text-center fs-12",
            tdClass: "fs-12 text-talent text-center",
            thStyle: "background-color: #c1dbec;width:10%",
          },
          {
            key: "action",
            thClass: "text-talent text-center fs-12",
            tdClass: "fs-12 text-talent text-center",
            thStyle: "background-color: #c1dbec;width:15%",
          },
        ],
        items: [
          {
            id: 1,
            name: "Dickerson",
            gender: "Male",
            email: "Macdonald@gmail.com",
            status: "on_job",
          },
          {
            id: 2,
            name: "Larsen",
            gender: "Male",
            email: "Shaw@gmail.com",
            status: "free",
          },
          {
            gender: "Male",
            id: 3,
            name: "Geneva",
            email: "Wilson@gmail.com",
            status: "free",
          },
          {
            id: 4,
            name: "Jami",
            gender: "Female",
            email: "Carney@gmail.com",
            status: "on_job",
          },
          {
            id: 5,
            name: "Jami",
            gender: "Female",
            email: "Carney@gmail.com",
            status: "waiting",
          },
          {
            id: 6,
            name: "Jami",
            gender: "Male",
            email: "Carney@gmail.com",
            status: "waiting",
          },
          {
            id: 7,
            name: "Jami",
            gender: "Female",
            email: "Carney@gmail.com",
            status: "on_job",
          },
          {
            id: 8,
            name: "Jami",
            gender: "Male",
            email: "Carney@gmail.com",
            status: "on_job",
          },
          {
            id: 9,
            name: "Jami",
            gender: "Male",
            email: "Carney@gmail.com",
            status: "waiting",
          },
          {
            id: 10,
            name: "Jami",
            gender: "Male",
            email: "Carney@gmail.com",
            status: "on_job",
          },
          {
            id: 11,
            name: "Jami",
            gender: "Male",
            email: "Carney@gmail.com",
            status: "on_job",
          },
        ],
      },
    };
  },
};
</script>
