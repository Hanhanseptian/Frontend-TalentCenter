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
    <b-card>
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
        <span>Showing All of 082130123922 Talent Hired List</span>
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
  pic_name: "082130123922HiredList",
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
            key: "pic_name",
            label: "PIC NAME",
            thClass: "text-talent text-left ",
            tdClass: " text-talent text-left",
            thStyle: "background-color: #c1dbec;width:auto",
          },
          {
            key: "company_name",
            label: "COMPANY NAME",
            thClass: "text-talent text-left ",
            tdClass: " text-talent text-left",
            thStyle: "background-color: #c1dbec;width:30%",
          },
          {
            key: "request_type",
            label: "REQUEST TYPE",
            thClass: "text-talent text-center ",
            tdClass: " text-talent text-center",
            thStyle: "background-color: #c1dbec;width:15%",
          },
          {
            key: "contact",
            thClass: "text-talent text-center ",
            tdClass: " text-talent text-center",
            thStyle: "background-color: #c1dbec;width:10%",
          },
          {
            key: "action_hired",
            label: "ACTION",
            thClass: "text-talent text-center ",
            tdClass: " text-talent text-center",
            thStyle: "background-color: #c1dbec;width:15%",
          },
        ],
        items: [
          {
            id: 1,
            pic_name: "Dickerson",
            company_name: "PT Jayandra",
            request_type: "recruite",
            contact: "082130123922",
          },
          {
            id: 2,
            pic_name: "Larsen",
            company_name: "PT Jayandra",
            request_type: "recruite",
            contact: "082130123922",
          },
          {
            id: 3,
            pic_name: "Larsen",
            company_name: "PT Jayandra",
            request_type: "recruite",
            contact: "082130123922",
          },
          {
            id: 4,
            pic_name: "Jami",
            company_name: "CV Garuda Infinity",
            request_type: "extend",
            contact: "082130123922",
          },
          {
            id: 5,
            pic_name: "Jami",
            company_name: "Padepokan 79",
            request_type: "extend",
            contact: "082130123922",
          },
          {
            id: 6,
            pic_name: "Jami",
            company_name: "PT Jayandra",
            request_type: "recruite",
            contact: "082130123922",
          },
          {
            id: 7,
            pic_name: "Jami",
            company_name: "PT Jayandra",
            request_type: "extend",
            contact: "082130123922",
          },
          {
            id: 8,
            pic_name: "Jami",
            company_name: "PT Jayandra",
            request_type: "recruite",
            contact: "082130123922",
          },
          {
            id: 9,
            pic_name: "Jami",
            company_name: "PT Jayandra",
            request_type: "recruite",
            contact: "082130123922",
          },
          {
            id: 10,
            pic_name: "Jami",
            company_name: "PT Jayandra",
            request_type: "recruite",
            contact: "082130123922",
          },
          {
            id: 11,
            pic_name: "Jami",
            company_name: "PT Jayandra",
            request_type: "recruite",
            contact: "082130123922",
          },
        ],
      },
    };
  },
};
</script>
