<template>
  <b-modal
    :id="'detail-talent-' + id"
    size="lg"
    hide-footer
    no-close-on-backdrop
  >
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi bi-info-circle"></i>
        Talent Detail
      </span>
    </template>
    <loader v-if="is_loading" />
    <div v-else class="row scroller">
      <div class="col-md-12 mb-4">
        <div class="row">
          <!-- Profile -->
          <div class="col-md-6">
            <b-card no-body class="shadow p-2 h-100">
              <span>Profile</span>
              <div class="fs-12 mt-3">
                <span>Full Name :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  {{ talent_data.full_name }}
                </div>
                <span>Descriptions :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg text-justify">
                  {{ talent_data.description }}
                </div>
                <span>Place of Birth :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  {{ talent_data.place_of_birth }}
                </div>
                <span>Date of Birth :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  {{ parseDate(talent_data.date_of_birth) }}
                </div>
                <span>Gender :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  {{ talent_data.gender == "male" ? "Male" : "Female" }}
                </div>
                <span>Health :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  {{ talent_data.health }}
                </div>
                <span>Religion :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  {{ talent_data.religion }}
                </div>
              </div>
            </b-card>
          </div>
          <!-- Skills -->
          <div class="col-md-6">
            <b-card no-body class="shadow p-2 h-100">
              <span>Skills</span>
              <div class="fs-12 mt-3">
                <span>Programming Language Skills:</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  <b-badge
                    v-for="pro_lang in talent_data.hardskill[0]
                      .programming_language"
                    :key="pro_lang"
                    class="mr-1 bg-talent p-1"
                  >
                    {{ pro_lang }}
                  </b-badge>
                </div>
                <span>Framework Skills :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  <b-badge
                    v-for="framework in talent_data.hardskill[0].framework"
                    :key="framework"
                    class="mr-1 bg-talent p-1"
                  >
                    {{ framework }}
                  </b-badge>
                </div>
                <span>Application Server Skills :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  <b-badge
                    v-for="app_server in talent_data.hardskill[0]
                      .application_server"
                    :key="app_server"
                    class="mr-1 bg-talent p-1"
                  >
                    {{ app_server }}
                  </b-badge>
                </div>
                <span>Database Skills :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  <b-badge
                    v-for="database in talent_data.hardskill[0].database"
                    :key="database"
                    class="mr-1 bg-talent p-1"
                  >
                    {{ database }}
                  </b-badge>
                </div>
                <span>Operating System Skills :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  <b-badge
                    v-for="os in talent_data.hardskill[0].operating_system"
                    :key="os"
                    class="mr-1 bg-talent p-1"
                  >
                    {{ os }}
                  </b-badge>
                </div>
                <span>Development Tool Skills :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  <b-badge
                    v-for="dev_tools in talent_data.hardskill[0]
                      .development_tools"
                    :key="dev_tools"
                    class="mr-1 bg-talent p-1"
                  >
                    {{ dev_tools }}
                  </b-badge>
                </div>
                <span>Language Skills :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  <b-badge
                    v-for="lang in talent_data.language"
                    :key="lang"
                    class="mr-1 bg-talent p-1"
                  >
                    {{ lang }}
                  </b-badge>
                </div>
                <span>Role :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  {{ talent_data.role }} Developer
                </div>
                <span>Work Experience :</span>
                <div class="mb-2 border shadow-sm p-2 rounded-lg">
                  {{ talent_data.work_experience }} Years
                </div>
              </div>
            </b-card>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-4">
        <!-- Education -->
        <b-card no-body class="shadow p-2 mb-4">
          <span>Education</span>
          <div class="mt-3 fs-12">
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <table-component :data="education_table" :no_pagination="true" />
            </div>
          </div>
        </b-card>
        <!-- Course / Training -->
        <b-card no-body class="shadow p-2 mb-4">
          <span>Course / Training</span>
          <div class="mt-3 fs-12">
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <table-component :data="course_table" :no_pagination="true" />
            </div>
          </div>
        </b-card>
        <!-- Employment -->
        <b-card no-body class="shadow p-2 mb-4">
          <span>Employment</span>
          <div class="mt-3 fs-12">
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <table-component
                :data="employment_table"
                :no_pagination="true"
                :is_detail="true"
              />
            </div>
          </div>
        </b-card>
        <!-- Project Experience -->
        <b-card no-body class="shadow p-2">
          <span>Project Experience</span>
          <div class="mt-3 fs-12">
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <table-component :data="project_table" :no_pagination="true" />
            </div>
          </div>
        </b-card>
      </div>
    </div>
  </b-modal>
</template>
<script>
import table_component from "./data_table.vue";
import loader from "./loader.vue";

export default {
  name: "detailTalentModal",
  components: {
    "table-component": table_component,
    loader,
  },
  props: {
    id: {
      type: String,
      default() {
        return "idtalent";
      },
    },
  },
  data() {
    return {
      is_loading: true,
      talent_data: null,
      education_table: {
        row: 100,
        fields: [
          {
            key: "school",
            label: "SCHOOL NAME",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-10",
            thStyle: "width:auto",
          },
          {
            key: "degree",
            label: "DEGREE",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-10",
            thStyle: "width:25%",
          },
          {
            key: "subject",
            label: "SUBJECT",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-10",
            thStyle: "width:30%",
          },
        ],
        items: null,
      },
      course_table: {
        row: 100,
        fields: [
          {
            key: "title",
            label: "TITLE",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-10",
            thStyle: "width:35%",
          },
          {
            key: "provider",
            label: "PROVIDER",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-10",
            thStyle: "width:35%",
          },
          {
            key: "date",
            label: "DATE",
            thClass: "fs-10 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-10",
          },
          {
            key: "duration",
            label: "DURATION",
            thClass: "fs-10 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-10",
            thStyle: "width:15%",
          },
        ],
        items: null,
      },
      employment_table: {
        row: 100,
        fields: [
          {
            key: "company_name",
            label: "COMPANY",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-10",
            thStyle: "width:35%",
          },
          {
            key: "work_from",
            label: "WORK FROM",
            thClass: "fs-10 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-10",
            thStyle: "width:20%",
          },
          {
            key: "work_until",
            label: "WORK UNTIL",
            thClass: "fs-10 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-10",
            thStyle: "width:20%",
          },
          {
            key: "role",
            label: "ROLE",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-10",
            thStyle: "width:25%",
          },
        ],
        items: null,
      },
      project_table: {
        row: 100,
        fields: [
          {
            key: "name",
            label: "NAME",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-left fs-10",
          },
          {
            key: "site",
            label: "SITE",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-center fs-10",
          },
          {
            key: "project_start",
            label: "FROM",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-center fs-10",
          },
          {
            key: "project_end",
            label: "TO",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-center fs-10",
          },
          {
            key: "client",
            label: "CLIENT",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-left fs-10",
            thStyle: "width:20rem !important",
          },
          {
            key: "description",
            label: "DESCRIPTIONS",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-left fs-10",
          },
          {
            key: "app_type",
            label: "APP TYPE",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-left fs-10",
          },
          {
            key: "dev_language",
            label: "DEV LANGUAGE",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-left fs-10",
          },
          {
            key: "role",
            label: "ROLE",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-left fs-10",
          },
          {
            key: "framework",
            label: "FRAMEWORK",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-left fs-10",
          },
          {
            key: "dev_tools",
            label: "DEV TOOLS",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-left fs-10",
          },
          {
            key: "server_os",
            label: "SERVER OS",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-left fs-10",
          },
          {
            key: "database",
            label: "DATABASE",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-left fs-10",
          },
          {
            key: "app_server",
            label: "APP SERVER",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-left fs-10",
          },
          {
            key: "other_info",
            label: "OTHER INFO",
            thClass: "fs-10 text-left bg-talent text-white p-2",
            tdClass: " text-talent text-left fs-10",
          },
        ],
        items: null,
      },
    };
  },
  methods: {
    getData(id) {
      this.is_loading = true;
      let api = process.env.VUE_APP_API_URL + "talent/" + id;
      this.$url
        .get(api)
        .then((res) => {
          this.talent_data = res.data.data.talent;
          this.education_table.items = res.data.data.talent.education;
          this.course_table.items = res.data.data.talent.courses;
          this.employment_table.items = res.data.data.talent.employment;
          this.project_table.items = res.data.data.talent.projectexperience;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.is_loading = false;
        });
    },
    closeModal() {
      this.$bvModal.hide("detail-talent-" + this.id);
    },
    parseDate(date) {
      let val = new Date(date);
      return val.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
};
</script>
<style scoped>
.date-talent {
  border-radius: 7px !important;
  border-color: #0173a7 !important;
  /* font-size: 16px !important; */
  height: 2.5rem !important;
  background-color: #eff2f4;
}
.date-talent:focus {
  box-shadow: 2px 2px 2px #0173a7 !important;
  border-color: none !important;
}
.scroller {
  max-height: 70vh;
  overflow: auto;
}
.scroller::-webkit-scrollbar {
  width: 10px;
  display: none;
}
.scroller::-webkit-scrollbar-thumb {
  background-color: #cdd0d1;
  border-radius: 10px;
}

.scroller::-webkit-scrollbar-track {
  background-color: #f8fafa;
  border-radius: 10px;
}
.scroller::-webkit-scrollbar-corner {
  background-color: #d3eeff;
}
</style>