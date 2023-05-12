<template>
  <b-modal
    :id="'detail-talent-' + id.toString()"
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
    <div class="row scroller">
      <div class="col-md-6 mb-4">
        <b-card no-body class="shadow p-2 h-100">
          <span>Profile</span>
          <div class="fs-12 mt-3">
            <span>Full Name :</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              Hanhan Septian
            </div>
            <span>Descriptions :</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              eveniet doloremque accusantium deleniti rerum. Et laudantium
              impedit inventore doloribus placeat excepturi commodi
            </div>
            <span>Programming Language Skills:</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <b-badge class="mr-1 bg-talent p-1">Javascript</b-badge>
              <b-badge class="mr-1 bg-talent p-1">Go</b-badge>
              <b-badge class="mr-1 bg-talent p-1">PHP</b-badge>
              <b-badge class="mr-1 bg-talent p-1">HTML</b-badge>
              <b-badge class="mr-1 bg-talent p-1">CSS</b-badge>
              <b-badge class="mr-1 bg-talent p-1">Java</b-badge>
            </div>
            <span>Framework Skills :</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <b-badge class="mr-1 bg-talent p-1">VueJS</b-badge>
              <b-badge class="mr-1 bg-talent p-1">Laravel</b-badge>
              <b-badge class="mr-1 bg-talent p-1">CodeIgniter</b-badge>
            </div>
            <span>Application Server Skills :</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <b-badge class="mr-1 bg-talent p-1">Windows</b-badge>
              <b-badge class="mr-1 bg-talent p-1">Linux Debian</b-badge>
              <b-badge class="mr-1 bg-talent p-1">Linux Ubuntu</b-badge>
            </div>
            <span>Database Skills :</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <b-badge class="mr-1 bg-talent p-1">MySQL</b-badge>
              <b-badge class="mr-1 bg-talent p-1">MongoDB</b-badge>
              <b-badge class="mr-1 bg-talent p-1">PostgreeSQL</b-badge>
            </div>
            <span>Operating System Skills :</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <b-badge class="mr-1 bg-talent p-1">Windows</b-badge>
              <b-badge class="mr-1 bg-talent p-1">Linux</b-badge>
              <b-badge class="mr-1 bg-talent p-1">MacOS</b-badge>
            </div>
            <span>Development Tool Skills :</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <b-badge class="mr-1 bg-talent p-1">Visual Studio Code</b-badge>
              <b-badge class="mr-1 bg-talent p-1">Intelij</b-badge>
              <b-badge class="mr-1 bg-talent p-1">Microsoft Project</b-badge>
            </div>
            <span>Place of Birth :</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">Bandung</div>
            <span>Date of Birth :</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              09 September 2001
            </div>
            <span>Gender :</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">Male</div>
            <span>Health :</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">Excellent</div>
            <span>Religion :</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">Islam</div>
            <span>Language Skill :</span>
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <b-badge class="mr-1 bg-talent p-1">English</b-badge>
              <b-badge class="mr-1 bg-talent p-1">Indonesian</b-badge>
              <b-badge class="mr-1 bg-talent p-1">Sundanese</b-badge>
            </div>
          </div>
        </b-card>
      </div>
      <div class="col-md-6 mb-4">
        <b-card no-body class="shadow p-2 mb-4">
          <span>Education</span>
          <div class="mt-3 fs-12">
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <table-component :data="education_table" :no_pagination="true" />
            </div>
          </div>
        </b-card>
        <b-card no-body class="shadow p-2 mb-2">
          <span>Course / Training</span>
          <div class="mt-3 fs-12">
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <table-component :data="course_table" :no_pagination="true" />
            </div>
          </div>
        </b-card>
        <b-card no-body class="shadow p-2">
          <span>Employment</span>
          <div class="mt-3 fs-12">
            <div class="mb-2 border shadow-sm p-2 rounded-lg">
              <table-component
                :data="employement_table"
                :no_pagination="true"
              />
            </div>
          </div>
        </b-card>
      </div>
      <div class="col-md-12">
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

export default {
  name: "detailTalentModal",
  components: {
    "table-component": table_component,
  },
  props: {
    id: Number,
  },
  data() {
    return {
      education_table: {
        row: 5,
        filter: "",
        fields: [
          {
            key: "school",
            label: "SCHOOL NAME",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec;width:auto",
          },
          {
            key: "degree",
            label: "DEGREE",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec;width:25%",
          },
          {
            key: "subject",
            label: "SUBJECT",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec;width:30%",
          },
        ],
        items: [
          {
            id: 1,
            school: "Insititut Teknologi Bandung",
            degree: "Doctor",
            subject: "Informatics Engineering",
          },
          {
            id: 2,
            school: "Telkom University",
            degree: "Master",
            subject: "Informatics Engineering",
          },
          {
            id: 3,
            school: "Politeknik Negeri Bandung",
            degree: "Bachelor",
            subject: "Informatics Engineering",
          },
          {
            id: 4,
            school: "Politeknik Negeri Bandung",
            degree: "Associate Degree",
            subject: "Informatics Engineering",
          },
        ],
      },
      course_table: {
        row: 5,
        filter: "",
        fields: [
          {
            key: "title",
            label: "TITLE",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec;width:30%",
          },
          {
            key: "provider",
            label: "PROVIDER",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec;width:20%",
          },
          {
            key: "date",
            label: "DATE",
            thClass: "text-talent text-center fs-10",
            tdClass: " text-talent text-center fs-10",
            thStyle: "background-color: #c1dbec;width:25%",
          },
          {
            key: "duration",
            label: "DURATION",
            thClass: "text-talent text-center fs-10",
            tdClass: " text-talent text-center fs-10",
            thStyle: "background-color: #c1dbec;width:10%",
          },
        ],
        items: [
          {
            id: 1,
            title: "Machine Learning for Beginners",
            provider: "Dicoding",
            date: "02 December 2022",
            duration: "2 Month",
          },
          {
            id: 2,
            title: "Machine Learning for Beginners",
            provider: "Dicoding",
            date: "02 December 2022",
            duration: "2 Month",
          },
          {
            id: 3,
            title: "Machine Learning for Beginners",
            provider: "Dicoding",
            date: "02 December 2022",
            duration: "2 Month",
          },
        ],
      },
      employement_table: {
        row: 5,
        filter: "",
        fields: [
          {
            key: "company",
            label: "COMPANY",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec;width:auto",
          },
          {
            key: "work_from",
            label: "WORK FROM",
            thClass: "text-talent text-center fs-10",
            tdClass: " text-talent text-center fs-10",
            thStyle: "background-color: #c1dbec;width:20%",
          },
          {
            key: "work_until",
            label: "WORK UNTIL",
            thClass: "text-talent text-center fs-10",
            tdClass: " text-talent text-center fs-10",
            thStyle: "background-color: #c1dbec;width:20%",
          },
          {
            key: "role",
            label: "ROLE",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec;width:25%",
          },
        ],
        items: [
          {
            id: 1,
            company: "PT Jayandra",
            work_from: "03 January 2020",
            work_until: "02 December 2022",
            role: "Junior Programmer",
          },
          {
            id: 2,
            company: "PT Jayandra",
            work_from: "03 January 2020",
            work_until: "02 December 2022",
            role: "Junior Programmer",
          },
          {
            id: 3,
            company: "PT Jayandra",
            work_from: "03 January 2020",
            work_until: "02 December 2022",
            role: "Junior Programmer",
          },
          {
            id: 4,
            company: "PT Jayandra",
            work_from: "03 January 2020",
            work_until: "02 December 2022",
            role: "Junior Programmer",
          },
          {
            id: 5,
            company: "PT Jayandra",
            work_from: "03 January 2020",
            work_until: "02 December 2022",
            role: "Junior Programmer",
          },
        ],
      },
      project_table: {
        row: 5,
        filter: "",
        fields: [
          {
            key: "name",
            label: "NAME",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "site",
            label: "SITE",
            thClass: "text-talent text-center fs-10",
            tdClass: " text-talent text-center fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "from",
            label: "FROM",
            thClass: "text-talent text-center fs-10",
            tdClass: " text-talent text-center fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "to",
            label: "TO",
            thClass: "text-talent text-center fs-10",
            tdClass: " text-talent text-center fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "client",
            label: "CLIENT",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "descriptions",
            label: "DESCRIPTIONS",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "app_type",
            label: "APP TYPE",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "dev_language",
            label: "DEV LANGUAGE",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "role",
            label: "ROLE",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "framework",
            label: "FRAMEWORK",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "dev_tools",
            label: "DEV TOOLS",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "server_os",
            label: "SERVER OS",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "database",
            label: "DATABASE",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "app_server",
            label: "APP SERVER",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "other_info",
            label: "OTHER INFO",
            thClass: "text-talent text-left fs-10",
            tdClass: " text-talent text-left fs-10",
            thStyle: "background-color: #c1dbec",
          },
        ],
        items: [
          {
            id: 1,
            name: "Monitoring Maps",
            site: "Bandung",
            from: "02 December 2022",
            to: "03 Januari 2023",
            client: "Leslar Metaverse",
            descriptions: "Sistem NLP",
            app_type: "Website",
            dev_language: "Javascript, Go",
            role: "Backend",
            framework: "VueJS, Gogin",
            dev_tools: "VS Code",
            server_os: "Linux",
            database: "MongoDB",
            app_server: "Web Server",
            other_info: "Info Lainnya",
          },
          {
            id: 2,
            name: "Monitoring Maps",
            site: "Bandung",
            from: "02 December 2022",
            to: "03 Januari 2023",
            client: "Leslar Metaverse",
            descriptions: "Sistem NLP",
            app_type: "Website",
            dev_language: "Javascript, Go",
            role: "Backend",
            framework: "VueJS, Gogin",
            dev_tools: "VS Code",
            server_os: "Linux",
            database: "MongoDB",
            app_server: "Web Server",
            other_info: "Info Lainnya",
          },
          {
            id: 3,
            name: "Monitoring Maps",
            site: "Bandung",
            from: "02 December 2022",
            to: "03 Januari 2023",
            client: "Leslar Metaverse",
            descriptions: "Sistem NLP",
            app_type: "Website",
            dev_language: "Javascript, Go",
            role: "Backend",
            framework: "VueJS, Gogin",
            dev_tools: "VS Code",
            server_os: "Linux",
            database: "MongoDB",
            app_server: "Web Server",
            other_info: "Info Lainnya",
          },
          {
            id: 4,
            name: "Monitoring Maps",
            site: "Bandung",
            from: "02 December 2022",
            to: "03 Januari 2023",
            client: "Leslar Metaverse",
            descriptions: "Sistem NLP",
            app_type: "Website",
            dev_language: "Javascript, Go",
            role: "Backend",
            framework: "VueJS, Gogin",
            dev_tools: "VS Code",
            server_os: "Linux",
            database: "MongoDB",
            app_server: "Web Server",
            other_info: "Info Lainnya",
          },
          {
            id: 5,
            name: "Monitoring Maps",
            site: "Bandung",
            from: "02 December 2022",
            to: "03 Januari 2023",
            client: "Leslar Metaverse",
            descriptions: "Sistem NLP",
            app_type: "Website",
            dev_language: "Javascript, Go",
            role: "Backend",
            framework: "VueJS, Gogin",
            dev_tools: "VS Code",
            server_os: "Linux",
            database: "MongoDB",
            app_server: "Web Server",
            other_info: "Info Lainnya",
          },
        ],
      },
    };
  },
  methods: {
    closeModal() {
      this.$bvModal.hide("detail-talent-" + this.id.toString());
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