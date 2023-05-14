<template>
  <div id="recruiter-home">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12 mb-3">
          <!-- Requirements -->
          <b-card no-body class="h-100 pt-2">
            <b-card-header>
              <b-card-title class="fs-20">
                <i class="bi bi-list-ul"></i> Requirements
              </b-card-title>
            </b-card-header>
            <b-card-body>
              <ValidationObserver v-slot="{ handleSubmit }">
                <!-- form requirements -->
                <form @submit.prevent="handleSubmit(setRequirements)">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <!-- programming language -->
                    <div>
                      <label for="programming-language" class="fs-12 d-flex">
                        Programming Language
                        <span class="text-danger ml-1">*</span>
                        <span class="ml-auto">Value %</span>
                      </label>
                      <div class="d-flex">
                        <v-select
                          :options="programming_language_options"
                          multiple
                          placeholder="Select Programming Language"
                          :selectable="
                            () =>
                              requirements.programming_language.value.length < 4
                          "
                          v-model="requirements.programming_language.value"
                        ></v-select>
                        <b-form-input
                          type="number"
                          min="0"
                          class="ml-2 input-persent"
                          v-model="requirements.programming_language.percent"
                        />
                      </div>
                    </div>
                    <span class="text-validation mt-1" v-if="errors[0]">
                      <i class="bi bi-exclamation-circle mr-1"></i>
                      {{ errors[0] }}
                    </span>
                  </ValidationProvider>
                  <!-- role -->
                  <div class="mt-2">
                    <label for="Role" class="fs-12">Role</label>
                    <div class="d-flex">
                      <v-select
                        :options="[
                          'Frontend Developer',
                          'Backend Developer',
                          'Fullstack Developer',
                        ]"
                        v-model="requirements.role.value"
                        placeholder="Select Role"
                      ></v-select>
                      <b-form-input
                        type="number"
                        min="0"
                        class="ml-2 input-persent"
                        v-model="requirements.role.percent"
                      />
                    </div>
                  </div>
                  <!-- framework -->
                  <div class="mt-2">
                    <label for="Framework" class="fs-12"
                      >Framework Skills</label
                    >
                    <div class="d-flex">
                      <v-select
                        :options="['VueJS', 'ReactJS']"
                        placeholder="Select Framework Skills"
                        v-model="requirements.framework_skills.value"
                      ></v-select>
                      <b-form-input
                        type="number"
                        min="0"
                        class="ml-2 input-persent"
                        v-model="requirements.framework_skills.percent"
                      />
                    </div>
                  </div>
                  <!-- database -->
                  <div class="mt-2">
                    <label for="Database" class="fs-12">Database Skills</label>
                    <div class="d-flex">
                      <v-select
                        :options="['MySQL', 'SQL Server', 'MongoDB']"
                        placeholder="Select Database Skills"
                        v-model="requirements.database_skills.value"
                      ></v-select>
                      <b-form-input
                        type="number"
                        min="0"
                        class="ml-2 input-persent"
                        v-model="requirements.database_skills.percent"
                      />
                    </div>
                  </div>
                  <!-- work experience -->
                  <div class="mt-2">
                    <label for="work-experience" class="fs-12">
                      Minimum Work Experience (Years)
                    </label>
                    <div class="d-flex">
                      <b-form-input
                        type="number"
                        id="work-experience"
                        placeholder="Input Minimum Work Experience"
                        class="input-talent"
                        style="height: 2.5rem !important"
                        v-model="requirements.work_experience.value"
                      />
                      <b-form-input
                        type="number"
                        min="0"
                        class="ml-2 input-persent"
                        v-model="requirements.work_experience.percent"
                      />
                    </div>
                  </div>
                  <!-- gender -->
                  <div class="mt-2">
                    <label for="Gender" class="fs-12">Gender</label>
                    <div class="d-flex">
                      <v-select
                        :options="['Male', 'Female']"
                        placeholder="Select Gender"
                        v-model="requirements.gender.value"
                      ></v-select>
                      <b-form-input
                        type="number"
                        min="0"
                        class="ml-2 input-persent"
                        v-model="requirements.gender.percent"
                      />
                    </div>
                  </div>
                  <!-- max age -->
                  <div class="mt-2">
                    <label for="max-age" class="fs-12">
                      Maximum Age (Years)
                    </label>
                    <div class="d-flex">
                      <b-form-input
                        type="number"
                        id="max-age"
                        placeholder="Input Maximum Age"
                        class="input-talent"
                        style="height: 2.5rem !important"
                        v-model="requirements.max_age.value"
                      />
                      <b-form-input
                        type="number"
                        min="0"
                        class="ml-2 input-persent"
                        v-model="requirements.max_age.percent"
                      />
                    </div>
                  </div>
                  <!-- set requirements button -->
                  <b-button type="submit" class="btn-talent btn-block mt-5">
                    Set Requirements
                  </b-button>
                </form>
              </ValidationObserver>
            </b-card-body>
          </b-card>
        </div>
        <!-- Recommendation Talent -->
        <div class="col-md-8 col-sm-12 mb-3">
          <b-card no-body class="pt-2 h-100">
            <b-card-header>
              <b-card-title class="fs-20">
                <i class="bi bi-person-vcard"></i> Recommendation Talents
              </b-card-title>
            </b-card-header>
            <b-card-body class="recommendation-wrapper">
              <loader v-if="is_loading" />
              <div v-else>
                <div v-for="item in data" :key="item._id">
                  <recommendation-card-component :data="item" />
                </div>
              </div>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import recommendation_card from "../../components/recruiter/recommendation_card.vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import loader from "../../components/loader.vue";

extend("required", {
  ...required,
  message: "This Field is Required",
});

export default {
  name: "Home",
  components: {
    "recommendation-card-component": recommendation_card,
    loader,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      is_add_more: false,
      is_loading: true,
      programming_language_options: ["Javascript", "Go", "PHP", "HTML", "CSS"],
      requirements: {
        programming_language: {
          value: [],
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
      data: null,
    };
  },
  created() {
    this.getData();
  },
  computed: {
    totalPercent() {
      let val =
        parseInt(this.requirements.programming_language.percent) +
        parseInt(this.requirements.role.percent) +
        parseInt(this.requirements.framework_skills.percent) +
        parseInt(this.requirements.database_skills.percent) +
        parseInt(this.requirements.work_experience.percent) +
        parseInt(this.requirements.gender.percent) +
        parseInt(this.requirements.max_age.percent);
      return val;
    },
  },
  methods: {
    getData() {
      this.is_loading = true;
      let api = process.env.VUE_APP_API_URL + "talent?status=available";
      this.$url
        .get(api)
        .then((res) => {
          this.data = res.data.talents;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.is_loading = false;
        });
    },
    setRequirements() {
      if (this.totalPercent > 100) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Total Percentage Value Shouldn't be more than 100!",
          footer: "",
        });
      } else {
        alert("submitted");
      }
    },
  },
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