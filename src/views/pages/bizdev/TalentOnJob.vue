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
    <b-card no-body>
      <b-card-header class="d-flex align-items-center pt-4">
        <!-- CARD TITLE -->
        <b-card-title>
          <span> <i class="bi bi-person-fill-check"></i> Talent on Job </span>
          <br />
          <span class="text-muted fs-14">Showing All of Talent on Job</span>
        </b-card-title>
        <!-- SEARCH INPUT -->
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
      <!-- CARD ITEM -->
      <div class="mt-3">
        <!-- LOADER COMPONENT -->
        <loader-component v-if="is_loading" class="mb-5" />
        <!-- TABLE COMPONENT -->
        <table-component v-else striped hover :data="data_table" />
      </div>
    </b-card>
  </div>
</template>
<script>
import data_table from "../../components/data_table.vue";
import loader from "../../components/loader.vue";

export default {
  name: "TalentOnJob",
  components: {
    "table-component": data_table,
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
            thStyle: "background-color: #c1dbec;width:5%",
          },
          {
            key: "recruiter_name",
            label: "RECRUITER NAME",
            thClass: "fs-14 text-left bg-talent text-white p-2",
            tdClass: " fs-14 text-left",
            thStyle: "background-color: #c1dbec;width:35%",
          },
          {
            key: "talent_name",
            label: "TALENT NAME",
            thClass: "fs-14 text-left bg-talent text-white p-2",
            tdClass: " fs-14 text-left",
            thStyle: "background-color: #c1dbec;width:30%",
          },
          {
            key: "work_from",
            label: "WORK FROM",
            thClass: "fs-14 text-center bg-talent text-white p-2",
            tdClass: " fs-14 text-center",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "work_until",
            label: "WORK UNTIL",
            thClass: "fs-14 text-center bg-talent text-white p-2",
            tdClass: " fs-14 text-center",
            thStyle: "background-color: #c1dbec",
          },
        ],
        items: [],
      },
    };
  },
  created() {
    this.getTalentOnJob();
  },
  methods: {
    getTalentOnJob() {
      this.is_loading = true;
      this.$url
        .get("contract/talent/on_contract")
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
