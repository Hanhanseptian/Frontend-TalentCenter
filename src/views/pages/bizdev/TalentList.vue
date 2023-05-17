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
        <loader-component v-if="is_loading" class="mb-5" />
        <table-component
          v-else
          :data="data_table"
          :deleteItem="deleteData"
          :editItem="editData"
          :showDetail="showDetail"
        />
      </div>
    </b-card>
    <add-talent-component />
    <edit-talent-component ref="edit_talent" />
    <detail-talent-component ref="detail_talent" />
  </div>
</template>
<script>
import Swal from "sweetalert2";
import data_table from "../../components/data_table.vue";
import add_talent_modal from "../../components/bizdev/add_talent_modal.vue";
import edit_talent_modal from "../../components/bizdev/edit_talent_modal.vue";
import detail_talent_modal from "../../components/detail_talent_modal.vue";
import loader from "../../components/loader.vue";

export default {
  name: "TalentList",
  components: {
    "table-component": data_table,
    "add-talent-component": add_talent_modal,
    "edit-talent-component": edit_talent_modal,
    "detail-talent-component": detail_talent_modal,
    "loader-component": loader,
  },
  data() {
    return {
      is_loading: true,
      data_table: {
        row: 10,
        filter: "",
        fields: [
          {
            key: "no",
            label: "NO",
            thClass: "fs-14 text-center bg-talent text-white p-2",
            tdClass: " fs-14 text-center",
            thStyle: "width:5%",
          },
          {
            key: "full_name",
            label: "NAME",
            thClass: "fs-14 text-left bg-talent text-white p-2",
            tdClass: " fs-14 text-left",
            thStyle: "width:auto",
          },
          {
            key: "company",
            label: "COMPANY",
            thClass: "fs-14 text-left bg-talent text-white p-2",
            tdClass: " fs-14 text-left",
            thStyle: "width:20%",
          },
          {
            key: "email",
            label: "EMAIL",
            thClass: "fs-14 text-left bg-talent text-white p-2",
            tdClass: " fs-14 text-left",
            thStyle: "width:25%",
          },
          {
            key: "phone_number",
            label: "PHONE NUMBER",
            thClass: "fs-14 text-center bg-talent text-white p-2",
            tdClass: " fs-14 text-center",
            thStyle: "width:12%",
          },
          {
            key: "status",
            label: "STATUS",
            thClass: "fs-14 text-center bg-talent text-white p-2",
            tdClass: " fs-14 text-center",
            thStyle: "width:10%",
          },
          {
            key: "action",
            label: "ACTION",
            thClass: "fs-14 text-center bg-talent text-white p-2",
            tdClass: " fs-14 text-center",
            thStyle: "width:10%",
          },
        ],
        items: [],
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.is_loading = true;
      this.$url
        .get("talent/all")
        .then((res) => {
          this.data_table.items = res.data.talents;
        })
        .catch(() => {
          this.data_table.items = [];
        })
        .finally(() => {
          this.is_loading = false;
        });
    },
    addData() {
      this.$bvModal.show("add-talent");
    },
    deleteData(id, name) {
      Swal.fire({
        title: "Are you sure?",
        text: `You to delete "${name}" from Talent List.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          let api = process.env.VUE_APP_API_URL + "talent/delete/" + id;
          this.$url
            .delete(api)
            .then(() => {
              this.getData();
              this.$toast.success(`Success! ${name} has been deleted.`);
            })
            .catch(() => {
              this.$toast.error(`Error! An Error occured while deleting data.`);
            });
        }
      });
    },
    editData(id) {
      let talent = this.data_table.items.filter((el) => el._id == id);
      this.$refs.edit_talent.talent._id = talent[0]._id;
      this.$refs.edit_talent.talent.full_name = talent[0].full_name;
      this.$refs.edit_talent.talent.email = talent[0].email;
      this.$refs.edit_talent.talent.phone_number = talent[0].phone_number;
      this.$refs.edit_talent.talent.company = talent[0].company;
      this.$refs.edit_talent.talent.status = talent[0].status;
      this.$bvModal.show("edit-talent");
    },
    showDetail(id) {
      this.$refs.detail_talent.getData(id);
      this.$bvModal.show("detail-talent-idtalent");
    },
  },
};
</script>
