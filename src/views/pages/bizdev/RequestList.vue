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
      <b-card-header>
        <b-card-title class="d-flex align-items-center">
          Request List
          <div class="ml-auto">
            <div class="input-group">
              <span class="input-group-text bg-white">
                <i class="bi bi-search fs-12"></i>
              </span>
              <input
                type="text"
                class="form-control form-talent-md"
                placeholder="Search..."
                v-model="data_table.filter"
              />
            </div>
          </div>
        </b-card-title>
        <span class="text-muted">Showing Recruiter Request List</span>
      </b-card-header>
      <div class="mt-3">
        <table-component
          :data="data_table"
          :showDetail="showDetail"
        ></table-component>
      </div>
    </b-card>
  </div>
</template>
<script>
import data_table from "../../components/data_table.vue";

export default {
  name: "RequestList",
  components: {
    "table-component": data_table,
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
            tdClass: " fs-14 text-center",
            thStyle: "width:3%",
          },
          {
            key: "pic_name",
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
        items: [
          {
            id: 1,
            pic_name: "Dickerson",
            company_name: "PT Jayandra",
            company_subject: "Information Technology",
            email: "recruiter@gmail.com",
            phone_number: "082130123922",
          },
          {
            id: 2,
            pic_name: "Larsen",
            company_name: "PT Jayandra",
            company_subject: "Information Technology",
            email: "recruiter@gmail.com",
            phone_number: "082130123922",
          },
          {
            id: 3,
            pic_name: "Larsen",
            company_name: "PT Jayandra",
            company_subject: "Information Technology",
            email: "recruiter@gmail.com",
            phone_number: "082130123922",
          },
          {
            id: 4,
            pic_name: "Jami",
            company_name: "CV Garuda Infinity",
            company_subject: "Information Technology",
            email: "recruiter@gmail.com",
            phone_number: "082130123922",
          },
          {
            id: 5,
            pic_name: "Jami",
            company_name: "Padepokan 79",
            company_subject: "Information Technology",
            email: "recruiter@gmail.com",
            phone_number: "082130123922",
          },
          {
            id: 6,
            pic_name: "Jami",
            company_name: "PT Jayandra",
            company_subject: "Information Technology",
            email: "recruiter@gmail.com",
            phone_number: "082130123922",
          },
          {
            id: 7,
            pic_name: "Jami",
            company_name: "PT Jayandra",
            company_subject: "Information Technology",
            email: "recruiter@gmail.com",
            phone_number: "082130123922",
          },
          {
            id: 8,
            pic_name: "Jami",
            company_name: "PT Jayandra",
            company_subject: "Information Technology",
            email: "recruiter@gmail.com",
            phone_number: "082130123922",
          },
          {
            id: 9,
            pic_name: "Jami",
            company_name: "PT Jayandra",
            company_subject: "Information Technology",
            email: "recruiter@gmail.com",
            phone_number: "082130123922",
          },
          {
            id: 10,
            pic_name: "Jami",
            company_name: "PT Jayandra",
            company_subject: "Information Technology",
            email: "recruiter@gmail.com",
            phone_number: "082130123922",
          },
          {
            id: 11,
            pic_name: "Jami",
            company_name: "PT Jayandra",
            company_subject: "Information Technology",
            email: "recruiter@gmail.com",
            phone_number: "082130123922",
          },
        ],
      },
    };
  },
  methods: {
    showDetail() {
      this.$router.push("detail-request-list");
    },
  },
};
</script>
