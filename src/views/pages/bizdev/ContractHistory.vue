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
      <b-card-header class="d-flex align-items-center pt-4">
        <b-card-title>
          <span> <i class="bi bi-x-circle"></i> Contract History </span> <br />
          <span class="text-muted fs-14">
            Showing Contract History of Talent
          </span>
        </b-card-title>
        <div class="ml-auto w-25">
          <div class="input-group">
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
      <div class="mt-3">
        <loader v-if="is_loading" class="mb-5" />
        <table-component v-else :data="data_table" />
      </div>
    </b-card>
  </div>
</template>
<script>
import data_table from "../../components/data_table.vue";
import loader from "../../components/loader.vue";

export default {
  name: "ContractHistory",
  components: {
    "table-component": data_table,
    loader,
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
            tdClass: "fs-14 text-center",
            thStyle: "background-color: #c1dbec;width:3%",
          },
          {
            key: "recruiter",
            label: "RECRUITER NAME",
            thClass: "fs-14 text-left bg-talent text-white p-2",
            tdClass: "fs-14 text-left",
            thStyle: "background-color: #c1dbec;width:20%",
          },
          {
            key: "talent",
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
            key: "status",
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
        .get("contract/history")
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
  },
};
</script>
