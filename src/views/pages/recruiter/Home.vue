<template>
  <div id="recruiter-home">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12 mb-3">
          <b-card no-body class="h-100 pt-2">
            <b-card-header>
              <b-card-title>Requirements</b-card-title>
            </b-card-header>
            <b-card-body>
              <!-- form requirements -->
              <form @submit.prevent="setRequirements">
                <!-- Programming Language -->
                <div class="mb-2">
                  <label for="programming-language" class="fs-12"
                    >Programming Language</label
                  >
                  <div class="d-flex">
                    <v-select
                      :options="programming_language_options"
                      multiple
                      placeholder="Select Programming Language"
                    ></v-select>
                    <b-form-input
                      type="number"
                      min="0"
                      max="100"
                      class="ml-2 input-persent"
                      v-model="requirements.programming_language.percent"
                    />
                  </div>
                </div>
                <!-- add more button -->
                <b-button
                  v-if="!is_add_more"
                  class="btn-outline-talent btn-xs btn-block mt-3"
                  variant="light"
                  @click="is_add_more = true"
                >
                  <span class="fs-14 text-talent">
                    <i class="bi bi-plus"></i> Add More
                  </span>
                </b-button>
                <!-- Role -->
                <div v-if="is_add_more" class="mb-2">
                  <label for="Role" class="fs-12">Role</label>
                  <div class="d-flex">
                    <v-select
                      :options="[
                        'Frontend Developer',
                        'Backend Developer',
                        'Fullstack Developer',
                      ]"
                      placeholder="Select Role"
                    ></v-select>
                    <b-form-input
                      type="number"
                      min="0"
                      :max="maxPercent"
                      class="ml-2 input-persent"
                      v-model="requirements.role.percent"
                    />
                  </div>
                </div>
                <!-- framework -->
                <div v-if="is_add_more" class="mb-2">
                  <label for="Framework" class="fs-12">Framework Skills</label>
                  <div class="d-flex">
                    <v-select
                      :options="['VueJS', 'ReactJS']"
                      placeholder="Select Framework Skills"
                    ></v-select>
                    <b-form-input
                      type="number"
                      min="0"
                      :max="maxPercent"
                      class="ml-2 input-persent"
                      v-model="requirements.framework_skills.percent"
                    />
                  </div>
                </div>
                <!-- database -->
                <div v-if="is_add_more" class="mb-2">
                  <label for="Database" class="fs-12">Database Skills</label>
                  <div class="d-flex">
                    <v-select
                      :options="['MySQL', 'SQL Server', 'MongoDB']"
                      placeholder="Select Database Skills"
                    ></v-select>
                    <b-form-input
                      type="number"
                      min="0"
                      :max="maxPercent"
                      class="ml-2 input-persent"
                      v-model="requirements.database_skills.percent"
                    />
                  </div>
                </div>
                <!-- work experience -->
                <div v-if="is_add_more" class="mb-2">
                  <label for="work-experience" class="fs-12"
                    >Minimum Work Experience</label
                  >
                  <div class="d-flex">
                    <input
                      type="text"
                      id="work-experience"
                      placeholder="Input Framework or Email"
                      class="form-control input-talent"
                    />
                    <b-form-input
                      type="number"
                      min="0"
                      :max="maxPercent"
                      class="ml-2 input-persent"
                      v-model="requirements.work_experience.percent"
                    />
                  </div>
                </div>
                <!-- gender -->
                <div v-if="is_add_more" class="mb-2">
                  <label for="Gender" class="fs-12">Gender</label>
                  <div class="d-flex">
                    <v-select
                      :options="['Male', 'Female']"
                      placeholder="Select Gender"
                    ></v-select>
                    <b-form-input
                      type="number"
                      min="0"
                      :max="maxPercent"
                      class="ml-2 input-persent"
                      v-model="requirements.gender.percent"
                    />
                  </div>
                </div>
                <!-- max age -->
                <div v-if="is_add_more" class="mb-2">
                  <label for="max-age" class="fs-12">Maximum Age</label>
                  <div class="d-flex">
                    <input
                      type="number"
                      id="max-age"
                      placeholder="Input Maximum Age"
                      class="form-control input-talent"
                    />
                    <b-form-input
                      type="number"
                      min="0"
                      :max="maxPercent"
                      class="ml-2 input-persent"
                      v-model="requirements.max_age.percent"
                    />
                  </div>
                </div>
                <b-button type="submit" class="btn-talent btn-block mt-5">
                  Set Requirements
                </b-button>
              </form>
            </b-card-body>
          </b-card>
        </div>

        <div class="col-md-8 col-sm-12 mb-3">
          <b-card no-body class="pt-2 h-100">
            <b-card-header>
              <b-card-title>Recommendation Talents</b-card-title>
            </b-card-header>
            <b-card-body class="recommendation-wrapper">
              <div v-for="item in data" :key="item.id">
                <recommendation_card :data="item" />
              </div>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import recommendation_card from "../../components/recruiter/recommendation_card.vue";
import { VueSelect } from "vue-select";

export default {
  name: "Home",
  components: {
    recommendation_card,
  },
  data() {
    return {
      is_add_more: false,
      programming_language_options: ["Javascript", "Go", "PHP", "HTML", "CSS"],
      requirements: {
        programming_language: {
          value: null,
          percent: 0,
        },
        role: {
          value: null,
          percent: 0,
        },
        framework_skills: {
          value: null,
          percent: 0,
        },
        database_skills: {
          value: null,
          percent: 0,
        },
        work_experience: {
          value: null,
          percent: 0,
        },
        gender: {
          value: null,
          percent: 0,
        },
        max_age: {
          value: null,
          percent: 0,
        },
      },
      data: [
        {
          id: 1,
          gender: "male",
        },
        {
          id: 2,
          gender: "female",
        },
        {
          id: 3,
          gender: "male",
        },
        {
          id: 4,
          gender: "female",
        },
        {
          id: 5,
          gender: "male",
        },
        {
          id: 6,
          gender: "male",
        },
      ],
    };
  },
  computed: {
    maxPercent() {
      let val =
        100 -
        this.requirements.programming_language.percent -
        this.requirements.role.percent -
        this.requirements.framework_skills.percent -
        this.requirements.database_skills.percent -
        this.requirements.work_experience.percent -
        this.requirements.gender.percent -
        this.requirements.max_age.percent;
      return val;
    },
  },
  methods:{
    setRequirements(){
      alert("submitted")
    }
  }
};
</script>
<style>
.input-persent {
  border-radius: 7px !important;
  border-color: #0173a7 !important;
  font-size: 12px !important;
  height: 2.5rem !important;
  width: 3rem !important;
  background-color: #ffffff;
  padding: 5px !important;
}
.input-persent:focus {
  box-shadow: 2px 2px 2px #0173a7 !important;
  border-color: none !important;
}
.v-select {
  width: 100% !important;
  font-size: 12px !important;
}
.vs__actions {
  color: #0173a7 !important;
}
.vs__selected {
  border: none !important;
  background-color: white !important;
}
.vs__search {
  font-size: 12px !important;
}
.vs__dropdown-toggle {
  border-color: #0173a7 !important;
  min-height: 2.5rem !important;
  border-radius: 7px !important;
}
.vs__dropdown-toggle:focus-visible {
  box-shadow: 2px 2px 2px #0173a7 !important;
  border-color: none !important;
}
.recommendation-wrapper {
  overflow: auto;
  height: 80vh;
}
.recommendation-wrapper::-webkit-scrollbar {
  width: 10px;
}
.recommendation-wrapper::-webkit-scrollbar-thumb {
  background-color: #cdd0d1;
  border-radius: 10px;
}

.recommendation-wrapper::-webkit-scrollbar-track {
  background-color: #f8fafa;
  border-radius: 10px;
}
.recommendation-wrapper::-webkit-scrollbar-corner {
  background-color: #d3eeff;
}
</style>