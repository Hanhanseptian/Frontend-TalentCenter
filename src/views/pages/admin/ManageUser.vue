<template>
  <div class="text-talent">
    <!-- BREADCUMB -->
    <div class="d-flex align-items-center mb-3">
      <span>Manage Users |</span>
      <i class="bi bi-person-fill-lock mx-1 fs-10 mt-1"></i>
      <i class="bi bi-chevron-right fs-10 mt-1"></i>
      <small class="fs-12 mt-1">Manage User</small>
    </div>
    <!-- MAIN CONTENT -->
    <b-card no-body>
      <b-card-header class="d-flex align-items-center">
        <div>
          <span>Manage Users</span> <br />
          <small class="fs-10">Showing All of Talent Center Users</small>
        </div>
        <div class="ml-auto">
          <button
            class="btn btn-talent text-white shadow btn-sm rounded-talent"
          >
            <i class="bi bi-person-plus-fill mr-1"></i>
            <span class="fs-12">Add User</span>
          </button>
        </div>
        <div class="ml-2">
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
  name: "ManageUser",
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
            thStyle: "background-color: #c1dbec;width:5%",
          },
          {
            key: "name",
            thClass: "text-talent text-left fs-12",
            tdClass: "fs-12 text-talent text-left",
            thStyle: "background-color: #c1dbec;width:auto",
            sortable:true,
          },
          {
            key: "username",
            thClass: "text-talent text-left fs-12",
            tdClass: "fs-12 text-talent text-left",
            thStyle: "background-color: #c1dbec;width:25%",
            sortable: true,
          },
          {
            key: "password",
            thClass: "text-talent text-left fs-12",
            tdClass: "fs-12 text-talent text-left",
            thStyle: "background-color: #c1dbec;width:15%",
          },
          {
            key: "role",
            thClass: "text-talent text-center fs-12",
            tdClass: "fs-12 text-talent text-center",
            thStyle: "background-color: #c1dbec;width:10%",
            sortable:true,
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
            username: "Male",
            password: "Macdonald@gmail.com",
            role: "Admin",
          },
          {
            id: 2,
            name: "Larsen",
            username: "Male",
            password: "Shaw@gmail.com",
            role: "Hirer",
          },
          {
            username: "Male",
            id: 3,
            name: "Geneva",
            password: "Wilson@gmail.com",
            role: "Hirer",
          },
          {
            id: 4,
            name: "Jami",
            username: "Female",
            password: "Carney@gmail.com",
            role: "Admin",
          },
          {
            id: 5,
            name: "Jami",
            username: "Female",
            password: "Carney@gmail.com",
            role: "Hirer",
          },
          {
            id: 6,
            name: "Jami",
            username: "Male",
            password: "Carney@gmail.com",
            role: "Hirer",
          },
          {
            id: 7,
            name: "Jami",
            username: "Female",
            password: "Carney@gmail.com",
            role: "Admin",
          },
          {
            id: 8,
            name: "Jami",
            username: "Male",
            password: "Carney@gmail.com",
            role: "Admin",
          },
          {
            id: 9,
            name: "Jami",
            username: "Male",
            password: "Carney@gmail.com",
            role: "Hirer",
          },
          {
            id: 10,
            name: "Jami",
            username: "Male",
            password: "Carney@gmail.com",
            role: "Admin",
          },
          {
            id: 11,
            name: "Jami",
            username: "Male",
            password: "Carney@gmail.com",
            role: "Admin",
          },
        ],
      },
    };
  },
};
</script>
