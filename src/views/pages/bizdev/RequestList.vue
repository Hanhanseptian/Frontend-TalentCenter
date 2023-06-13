<template>
  <div id="request-list">
    <!-- BREADCUMB -->
    <div class="d-flex align-items-center mb-3">
      <span class="fs-22">Manage Talents |</span>
      <i class="bi bi-clipboard-check-fill mx-1 fs-14 mt-1"></i>
      <i class="bi bi-chevron-right fs-14 mt-1"></i>
      <small class="fs-14 mt-1">Request List</small>
    </div>

    <!-- MAIN CONTENT -->
    <b-card no-body>
      <b-card-header class="d-flex align-items-center pt-4">
        <!-- CARD TITLE -->
        <b-card-title>
          <span> <i class="bi bi-clipboard-check-fill"></i> Request List </span>
          <br />
          <span class="text-muted fs-14">Showing Recruiter Request List</span>
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
        <table-component v-else :data="data_table" :showDetail="showDetail" />
      </div>
    </b-card>
  </div>
</template>
<script>
import data_table from "../../components/data_table.vue";
import loader from "../../components/loader.vue";

export default {
  name: "RequestList",
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
            thStyle: "width:3%",
          },
          {
            key: "full_name",
            label: "PIC NAME",
            thClass: "fs-14 text-left bg-talent text-white p-2",
            tdClass: " fs-14 text-left",
            thStyle: "width:18%",
          },
          {
            key: "company_name",
            label: "COMPANY NAME",
            thClass: "fs-14 text-left bg-talent text-white p-2",
            tdClass: " fs-14 text-left",
            thStyle: "width:18%",
          },
          {
            key: "company_subject",
            label: "COMPANY SUBJECT",
            thClass: "fs-14 text-left bg-talent text-white p-2",
            tdClass: " fs-14 text-left",
            thStyle: "width:18%",
          },
          {
            key: "email",
            label: "EMAIL",
            thClass: "fs-14 text-center bg-talent text-white p-2",
            tdClass: " fs-14 text-center",
          },
          {
            key: "phone_number",
            label: "PHONE NUMBER",
            thClass: "fs-14 text-center bg-talent text-white p-2",
            tdClass: " fs-14 text-center",
          },
          {
            key: "action_hired",
            label: "ACTION",
            thClass: "fs-14 text-center bg-talent text-white p-2",
            tdClass: " text-talent text-center",
            thStyle: "width:15%",
          },
        ],
        items: [],
      },
    };
  },
  created() {
    this.getRequestList();
  },
  methods: {
    getRequestList() {
      this.is_loading = true;
      this.$url
        .get("bizdev/request/waiting")
        .then((res) => {
          this.data_table.items = res.data.result;
        })
        .catch(() => {
          this.data_table.items = [];
        })
        .finally(() => {
          this.is_loading = false;
        });
    },
    showDetail(id) {
      this.$router.push({
        path: "detail-request-list",
        query: { id: btoa(id) },
      });
    },
  },
};
</script>
