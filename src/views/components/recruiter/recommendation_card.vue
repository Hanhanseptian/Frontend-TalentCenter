<template>
  <div id="recommendation-card">
    <b-card class="shadow-md border mb-3">
      <div class="row">
        <!-- PROFILE -->
        <div class="col-md-6 col-sm-12 p-2">
          <b-card no-body class="shadow-sm h-100 p-2 border">
            <div class="d-flex align-items-center">
              <i class="bi bi-person-circle mr-1" style="font-size: 50px"></i>
              <div>
                <!-- FULL NAME -->
                <span class="fs-14"> {{ data.full_name }} </span>
                <!-- GENDER -->
                <span class="fs-12 ml-1">
                  <b-badge
                    :class="data.gender == 'Male' ? 'bg-talent' : 'bg-pink'"
                    style="position: absolute"
                  >
                    <i
                      class="bi"
                      :class="
                        data.gender == 'Male'
                          ? 'bi-gender-male'
                          : 'bi-gender-female'
                      "
                    ></i>
                    {{ data.gender == "Male" ? "Male" : "Female" }}
                  </b-badge>
                </span>
                <br />
                <!-- ROLE -->
                <div class="fs-12">
                  <i class="bi bi-toggles2"></i>
                  {{ data.role }} Developer
                </div>
                <!-- AGE & WORK EXPERIENCE -->
                <div class="d-flex align-items-center fs-10">
                  <i class="bi bi-person-fill mr-1"></i>
                  {{ calculateAge(data.date_of_birth) }} Years Old
                  <i class="bi bi-person-workspace mr-1 ml-3"></i>
                  {{ data.work_experience }} Years Work Experience
                </div>
              </div>
            </div>
          </b-card>
        </div>

        <!-- DESCRIPTIONS -->
        <div class="col-md-6 col-sm-12 p-2">
          <b-card no-body class="shadow-sm h-100 p-2 border">
            <span class="fs-12">Descriptions</span>
            <div
              class="border px-1 py-1 rounded fs-10 border-container mt-1"
              style="border-color: #0173a7 !important; height: 4rem"
            >
              <p class="text-justify">
                {{ data.description }}
              </p>
            </div>
          </b-card>
        </div>
      </div>
      <div class="row" style="margin-top: -15px">
        <!-- PROJECT EXPERIENCE -->
        <div class="col-md-3 col-sm-12 mt-3 p-2">
          <b-card no-body class="shadow-sm p-2 h-100 border">
            <span class="fs-12">Project Experience</span>
            <ul
              class="list-group fs-10 border-container mt-1"
              style="height: 9rem"
            >
              <li
                v-for="item in data.projectexperience"
                :key="item._id"
                class="list-group-item p-1"
                style="border-color: #0173a7 !important"
              >
                <div class="d-flex">
                  <i class="bi bi-kanban fs-14 mr-1"></i>
                  <span> {{ item.name }} </span>
                </div>
              </li>
            </ul>
          </b-card>
        </div>
        <!-- EDUCATION HISTORY -->
        <div class="col-md-4 col-sm-12 mt-3 p-2">
          <b-card no-body class="shadow-sm p-2 h-100 border">
            <span class="fs-12">Educations</span>
            <ul
              class="list-group fs-10 border-container mt-1"
              style="height: 9.5rem"
            >
              <li
                v-for="item in data.education"
                :key="item._id"
                class="list-group-item p-1"
                style="border-color: #0173a7 !important"
              >
                <div class="d-flex">
                  <i class="bi bi-mortarboard fs-18 mr-1"></i>
                  <span>
                    {{ item.degree }} {{ item.subject }} in {{ item.school }}
                  </span>
                </div>
              </li>
            </ul>
          </b-card>
        </div>
        <!-- SKILLS AND TECHNOLOGY -->
        <div class="col-md-5 col-sm-12 mt-3 p-2">
          <b-card no-body class="shadow-sm p-2 h-100 border">
            <span class="fs-12">Skills and Technology</span>
            <!-- PROGRAMMING LANGUAGE SKILLS -->
            <b-card no-body class="shadow-sm p-1 border mb-1 mt-1">
              <div class="fs-10 mb-1">Programming Language :</div>
              <div class="d-flex align-center fs-12 skill-wrapper pb-1">
                <b-badge
                  variant="info"
                  class="ml-1 bg-talent"
                  v-for="item in data.programming_language"
                  :key="item"
                >
                  {{ item }}
                </b-badge>
              </div>
            </b-card>
            <!-- FRAMEWORK SKILLS -->
            <b-card no-body class="shadow-sm p-1 border mb-1">
              <div class="fs-10 mb-1">Framework Skills :</div>
              <div class="d-flex align-center fs-12 skill-wrapper pb-1">
                <b-badge
                  variant="info"
                  class="ml-1 bg-talent"
                  v-for="item in data.framework"
                  :key="item"
                >
                  {{ item }}
                </b-badge>
              </div>
            </b-card>
            <!-- DATABASE SKILLS -->
            <b-card no-body class="shadow-sm p-1 border mb-1">
              <div class="fs-10 mb-1">Database Skills :</div>
              <div class="d-flex align-center fs-12 skill-wrapper pb-1">
                <b-badge
                  variant="info"
                  class="ml-1 bg-talent"
                  v-for="item in data.database"
                  :key="item"
                >
                  {{ item }}
                </b-badge>
              </div>
            </b-card>
          </b-card>
        </div>
      </div>

      <!-- ACTION BUTTON -->
      <div class="mt-2">
        <div class="d-flex align-items-center">
          <!-- VIEW DETAIL BUTTON -->
          <b-button
            variant="warning"
            class="btn-xs ml-auto"
            @click="viewDetail()"
          >
            <i class="bi bi-info-circle fs-12"></i>
            <span class="fs-12"> View Detail</span>
          </b-button>
          <!-- MARK TALENT BUTTON -->
          <b-button class="btn-talent btn-xs ml-2" @click="selectTalent()">
            <i class="bi bi-bookmark-check-fill fs-12"></i>
            <span class="fs-12"> Mark Talent</span>
          </b-button>
        </div>
      </div>

      <!-- REQUEST TALENT MODAL COMPONENT -->
      <request-talent-component :id="data._id" ref="request_modal" />
      <!-- DETAIL TALENT MODAL COMPONENT -->
      <detail-talent-component :id="data._id" ref="detail_talent" />
    </b-card>
  </div>
</template>
<script>
import request_talent from "./request_talent_modal.vue";
import detail_talent_modal from "../detail_talent_modal.vue";

export default {
  name: "recommendation_card",
  components: {
    "request-talent-component": request_talent,
    "detail-talent-component": detail_talent_modal,
  },
  props: {
    data: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    selectTalent() {
      this.$refs.request_modal.name = this.data.full_name;
      this.$bvModal.show("set-date-modal-" + this.data._id);
    },
    viewDetail() {
      this.$refs.detail_talent.getDetailTalent(this.data._id);
      this.$bvModal.show("detail-talent-" + this.data._id);
    },
    calculateAge(date_of_birth) {
      const dob = new Date(date_of_birth);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const isBirthdayPassed =
        today.getMonth() > dob.getMonth() ||
        (today.getMonth() === dob.getMonth() &&
          today.getDate() >= dob.getDate());
      if (!isBirthdayPassed) {
        age--;
      }

      return age;
    },
  },
};
</script>
<style scoped>
.border-container {
  overflow: auto;
}
.border-container::-webkit-scrollbar {
  width: 5px;
}
.border-container::-webkit-scrollbar-thumb {
  background-color: #cdd0d1;
  border-radius: 10px;
}

.border-container::-webkit-scrollbar-track {
  background-color: #e8ecec;
  border-radius: 10px;
}
.border-container::-webkit-scrollbar-corner {
  background-color: #d3eeff;
}
.skill-wrapper {
  width: 100%;
  overflow-x: auto;
}
.skill-wrapper::-webkit-scrollbar {
  height: 5px;
}
.skill-wrapper::-webkit-scrollbar-thumb {
  background-color: #cdd0d1;
  border-radius: 10px;
}

.skill-wrapper::-webkit-scrollbar-track {
  background-color: #e8ecec;
  border-radius: 10px;
}
.skill-wrapper::-webkit-scrollbar-corner {
  background-color: #d3eeff;
}
.shadow-md {
  box-shadow: 2px 3px 2px #c7cbcd !important;
}
</style>