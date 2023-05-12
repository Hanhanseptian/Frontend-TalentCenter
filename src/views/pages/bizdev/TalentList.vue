<template>
  <div id="talent-list">
    <!-- BREADCUMB -->
    <div class="d-flex align-items-center mb-3">
      <span class="fs-22">Manage Talents |</span>
      <i class="bi bi-list-check mx-1 fs-14 mt-1"></i>
      <i class="bi bi-chevron-right fs-14 mt-1"></i>
      <small class="fs-14 mt-1">Talent List</small>
    </div>
    <!-- MAIN CONTENT -->
    <b-card no-body>
      <b-card-header>
        <b-card-title class="d-flex align-items-center">
          Talent List
          <div class="ml-auto">
            <button
              class="btn btn-talent text-white shadow btn-sm rounded-talent"
              @click="addData"
            >
              <i class="bi bi-person-plus-fill mr-1"></i>
              <span>Add Talent</span>
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
        </b-card-title>
        <span>Showing All of Available Talents</span>
      </b-card-header>
      <div class="mt-3">
        <table-component
          :data="data_table"
          :deleteItem="deleteData"
          :editItem="editData"
          :showDetail="showDetail"
        />
      </div>
    </b-card>
    <add-talent-component />
  </div>
</template>
<script>
import Swal from "sweetalert2";
import data_table from "../../components/data_table.vue";
import add_talent_modal from "../../components/bizdev/add_talent_modal.vue";

export default {
  name: "TalentList",
  components: {
    "table-component": data_table,
    "add-talent-component": add_talent_modal,
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
            key: "name",
            label: "NAME",
            thClass: "text-talent text-left ",
            tdClass: " text-talent text-left",
            thStyle: "background-color: #c1dbec;width:auto",
          },
          {
            key: "gender",
            label: "GENDER",
            thClass: "text-talent text-center ",
            tdClass: " text-talent text-center",
            thStyle: "background-color: #c1dbec;width:10%",
          },
          {
            key: "email",
            label: "EMAIL",
            thClass: "text-talent text-left ",
            tdClass: " text-talent text-left",
            thStyle: "background-color: #c1dbec;width:20%",
          },
          {
            key: "company",
            label: "COMPANY",
            thClass: "text-talent text-center ",
            tdClass: " text-talent text-center",
            thStyle: "background-color: #c1dbec;width:15%",
          },
          {
            key: "status",
            label: "STATUS",
            thClass: "text-talent text-center ",
            tdClass: " text-talent text-center",
            thStyle: "background-color: #c1dbec;width:10%",
          },
          {
            key: "action",
            label: "ACTION",
            thClass: "text-talent text-center ",
            tdClass: " text-talent text-center",
            thStyle: "background-color: #c1dbec;width:10%",
          },
        ],
        items: [
          {
            id: 1,
            name: "Dickerson",
            gender: "Male",
            email: "Macdonald@gmail.com",
            company: "PT Jayandra",
            status: "on_job",
          },
          {
            id: 2,
            name: "Larsen",
            gender: "Male",
            email: "Shaw@gmail.com",
            company: "PT Jayandra",
            status: "on_request",
          },
          {
            gender: "Male",
            id: 3,
            name: "Geneva",
            email: "Wilson@gmail.com",
            company: "PT Jayandra",
            status: "on_request",
          },
          {
            id: 4,
            name: "Jami",
            gender: "Female",
            email: "Carney@gmail.com",
            company: "PT Jayandra",
            status: "on_job",
          },
          {
            id: 5,
            name: "Jami",
            gender: "Female",
            email: "Carney@gmail.com",
            company: "PT Jayandra",
            status: "available",
          },
          {
            id: 6,
            name: "Jami",
            gender: "Male",
            email: "Carney@gmail.com",
            company: "PT Jayandra",
            status: "available",
          },
          {
            id: 7,
            name: "Jami",
            gender: "Female",
            email: "Carney@gmail.com",
            company: "PT Jayandra",
            status: "on_job",
          },
          {
            id: 8,
            name: "Jami",
            gender: "Male",
            email: "Carney@gmail.com",
            company: "PT Jayandra",
            status: "on_job",
          },
          {
            id: 9,
            name: "Jami",
            gender: "Male",
            email: "Carney@gmail.com",
            company: "PT Jayandra",
            status: "available",
          },
          {
            id: 10,
            name: "Jami",
            gender: "Male",
            email: "Carney@gmail.com",
            company: "PT Jayandra",
            status: "on_job",
          },
          {
            id: 11,
            name: "Jami",
            gender: "Male",
            email: "Carney@gmail.com",
            company: "PT Jayandra",
            status: "on_job",
          },
        ],
      },
    };
  },
  methods: {
    addData() {
      this.$bvModal.show("add-talent");
    },
    deleteData(id) {
      console.log(id);
      Swal.fire({
        title: "Are you sure?",
        text: "You to delete this Talent",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Talent has been deleted.", "success");
        }
      });
    },
    editData(id) {
      console.log(id);
    },
    showDetail(id) {
      console.log(id);
    },
  },
};
</script>
