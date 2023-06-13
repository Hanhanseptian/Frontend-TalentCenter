<template>
  <div id="recruiter-home">
    <div class="container">
      <div class="row">
        <!-- REQUIREMENTS -->
        <div class="col-md-4 col-sm-12 mb-3">
          <b-card no-body class="h-100 pt-2">
            <b-card-header>
              <!-- CARD TITLE -->
              <b-card-title class="fs-20">
                Requirements
                <i class="bi bi-question-circle" id="help"></i>
                <b-tooltip target="help" triggers="hover">
                  <div>INSTRUCTIONS</div>
                  <ul class="fs-12 pl-3 mt-3">
                    <li class="text-decoration-none text-left ml-0 pl-0">
                      Programming Language is Required to Filled
                    </li>
                    <li class="text-decoration-none text-left ml-0 pl-0">
                      The total priority percentage cannot be more than 100 and
                      less than 0
                    </li>
                    <li class="text-decoration-none text-left ml-0 pl-0">
                      Press the "Set Requirements" button to start the search
                    </li>
                  </ul>
                </b-tooltip>
              </b-card-title>
            </b-card-header>

            <!-- LOADER COMPONENT -->
            <loader-component v-if="is_req_loading" />

            <!-- REQUIREMENTS ITEM -->
            <b-card-body v-else>
              <!-- REQUIREMENTS FORM -->
              <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(getRecommendationTalent)">
                  <!-- PROGRAMMING LANGUAGE -->
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <div>
                      <label for="programming-language" class="fs-12 d-flex">
                        Programming Language
                        <span class="text-danger ml-1">*</span>
                        <span class="ml-auto">Priority(%)</span>
                      </label>
                      <div class="d-flex">
                        <!-- VALUE INPUT -->
                        <v-select
                          :options="programming_language_options"
                          multiple
                          placeholder="Select Programming Language"
                          :selectable="
                            () =>
                              requirement.hardskill.programming_language
                                .length < 4
                          "
                          v-model="requirement.hardskill.programming_language"
                        ></v-select>
                        <!-- PRIORITY INPUT -->
                        <b-form-input
                          type="number"
                          min="0"
                          class="ml-2 input-persent"
                          v-model="requirement.priorities.programming_language"
                        />
                      </div>
                    </div>
                    <span class="text-validation mt-1" v-if="errors[0]">
                      <i class="bi bi-exclamation-circle mr-1"></i>
                      {{ errors[0] }}
                    </span>
                  </ValidationProvider>
                  <!-- ROLE -->
                  <div class="mt-2">
                    <label for="Role" class="fs-12">Role</label>
                    <div class="d-flex">
                      <!-- VALUE INPUT -->
                      <v-select
                        :options="['Frontend', 'Backend', 'Fullstack']"
                        v-model="requirement.hardskill.role"
                        placeholder="Select Role"
                      ></v-select>
                      <!-- PRIORITY INPUT -->
                      <b-form-input
                        type="number"
                        min="0"
                        class="ml-2 input-persent"
                        v-model="requirement.priorities.role"
                      />
                    </div>
                  </div>
                  <!-- FRAMEWORK -->
                  <div class="mt-2">
                    <label for="Framework" class="fs-12"
                      >Framework Skills</label
                    >
                    <div class="d-flex">
                      <!-- VALUE INPUT -->
                      <v-select
                        :options="framework_options"
                        placeholder="Select Framework Skills"
                        multiple
                        :selectable="
                          () => requirement.hardskill.framework.length < 3
                        "
                        v-model="requirement.hardskill.framework"
                      ></v-select>
                      <!-- PRIORITY INPUT -->
                      <b-form-input
                        type="number"
                        min="0"
                        class="ml-2 input-persent"
                        v-model="requirement.priorities.framework"
                      />
                    </div>
                  </div>
                  <!-- DATABASE -->
                  <div class="mt-2">
                    <label for="Database" class="fs-12">Database Skills</label>
                    <div class="d-flex">
                      <!-- VALUE INPUT -->
                      <v-select
                        :options="database_options"
                        placeholder="Select Database Skills"
                        multiple
                        :selectable="
                          () => requirement.hardskill.database.length < 3
                        "
                        v-model="requirement.hardskill.database"
                      ></v-select>
                      <!-- PRIORITY INPUT -->
                      <b-form-input
                        type="number"
                        min="0"
                        class="ml-2 input-persent"
                        v-model="requirement.priorities.database"
                      />
                    </div>
                  </div>
                  <!-- WORK EXPERIENCE -->
                  <div class="mt-2">
                    <label for="work-experience" class="fs-12">
                      Minimum Work Experience (Years)
                    </label>
                    <div class="d-flex">
                      <!-- VALUE INPUT -->
                      <b-form-input
                        type="number"
                        id="work-experience"
                        placeholder="Input Minimum Work Experience"
                        class="input-talent"
                        style="height: 2.5rem !important"
                        v-model="requirement.personal.min_experience"
                      />
                      <!-- PRIORITY INPUT -->
                      <b-form-input
                        type="number"
                        min="0"
                        class="ml-2 input-persent"
                        v-model="requirement.priorities.min_experience"
                      />
                    </div>
                  </div>
                  <!-- GENDER -->
                  <div class="mt-2">
                    <label for="Gender" class="fs-12">Gender</label>
                    <div class="d-flex">
                      <!-- VALUE INPUT -->
                      <v-select
                        :options="['Male', 'Female']"
                        placeholder="Select Gender"
                        v-model="requirement.personal.gender"
                      ></v-select>
                      <!-- PRIORITY INPUT -->
                      <b-form-input
                        type="number"
                        min="0"
                        class="ml-2 input-persent"
                        v-model="requirement.priorities.gender"
                      />
                    </div>
                  </div>
                  <!-- MAXIMUM AGE -->
                  <div class="mt-2">
                    <label for="max-age" class="fs-12">
                      Maximum Age (Years)
                    </label>
                    <div class="d-flex">
                      <!-- VALUE INPUT -->
                      <b-form-input
                        type="number"
                        id="max-age"
                        placeholder="Input Maximum Age"
                        class="input-talent"
                        style="height: 2.5rem !important"
                        v-model="requirement.personal.max_age"
                      />
                      <!-- PRIORITY INPUT -->
                      <b-form-input
                        type="number"
                        min="0"
                        class="ml-2 input-persent"
                        v-model="requirement.priorities.max_age"
                      />
                    </div>
                  </div>
                  <!-- SET REQUIREMENTS BUTTON -->
                  <b-button type="submit" class="btn-talent btn-block mt-5">
                    Set Requirements
                  </b-button>
                </form>
              </ValidationObserver>
            </b-card-body>
          </b-card>
        </div>

        <!-- RECOMMENDATION TALENT -->
        <div class="col-md-8 col-sm-12 mb-3">
          <b-card no-body class="pt-2 h-100">
            <b-card-header>
              <b-card-title class="fs-20">
                Recommendation Talents
              </b-card-title>
            </b-card-header>
            <!-- RECOMMENDATION ITEM -->
            <b-card-body class="recommendation-wrapper">
              <!-- LOADER COMPONENT -->
              <loader-component v-if="is_loading" />
              <!-- RECOMMENDATION VALUE -->
              <div v-else>
                <!-- IMAGE EMPTY DATA -->
                <center v-if="data.length == 0">
                  <img src="../../../../public/is_empty.png" width="70%" />
                </center>
                <!-- NOT EMPTY DATA -->
                <div v-else>
                  <div v-for="item in data" :key="item._id">
                    <!-- RECOMMENDATION CARD COMPONENT -->
                    <recommendation-card-component :data="item" />
                  </div>
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
    "loader-component": loader,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      account_id: this.$store.getters.user.user_id,
      is_add_more: false,
      is_loading: true,
      is_req_loading: true,
      database_options: [],
      framework_options: [],
      programming_language_options: [],
      requirement: {
        hardskill: {
          programming_language: [],
          framework: [],
          database: [],
          role: null,
        },
        personal: {
          min_experience: null,
          gender: null,
          max_age: null,
        },
        priorities: {
          programming_language: 0,
          framework: 0,
          database: 0,
          role: 0,
          min_experience: 0,
          gender: 0,
          max_age: 0,
        },
      },
      data: [],
    };
  },
  created() {
    this.getData();
    this.getOptions();
  },
  computed: {
    totalPercent() {
      let val =
        parseInt(this.requirement.priorities.programming_language) +
        parseInt(this.requirement.priorities.role) +
        parseInt(this.requirement.priorities.framework) +
        parseInt(this.requirement.priorities.database) +
        parseInt(this.requirement.priorities.min_experience) +
        parseInt(this.requirement.priorities.gender) +
        parseInt(this.requirement.priorities.max_age);
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
    getOptions() {
      this.is_req_loading = true;
      this.$url
        .get("requirement/req/all")
        .then((res) => {
          this.programming_language_options = res.data.programming_language;
          this.database_options = res.data.database;
          this.framework_options = res.data.framework;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.is_req_loading = false;
        });
    },
    getRecommendationTalent() {
      if (this.totalPercent > 100) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Total Percentage Value Shouldn't be more than 100!",
          footer: "",
        });
      } else {
        let params = {
          hardskill: {
            programming_language:
              this.requirement.hardskill.programming_language,
            framework:
              this.requirement.hardskill.framework.length == 0
                ? null
                : this.requirement.hardskill.framework,
            database:
              this.requirement.hardskill.database.length == 0
                ? null
                : this.requirement.hardskill.database,
            role: this.requirement.hardskill.role,
          },
          personal: {
            min_experience: this.requirement.personal.min_experience
              ? this.requirement.personal.min_experience
              : null,
            gender: this.requirement.personal.gender
              ? this.requirement.personal.gender
              : null,
            max_age: this.requirement.personal.max_age
              ? this.requirement.personal.max_age
              : null,
          },
          priorities: [
            {
              needs: "programming_language",
              percentage:
                this.requirement.priorities.programming_language / 100,
            },
            {
              needs: "framework",
              percentage:
                this.requirement.hardskill.framework.length > 0
                  ? this.requirement.priorities.framework / 100
                  : null,
            },
            {
              needs: "database",
              percentage:
                this.requirement.hardskill.database.length > 0
                  ? this.requirement.priorities.database / 100
                  : null,
            },
            {
              needs: "role",
              percentage: this.requirement.hardskill.role
                ? this.requirement.priorities.role / 100
                : null,
            },
            {
              needs: "min_experience",
              percentage: this.requirement.personal.min_experience
                ? this.requirement.priorities.min_experience / 100
                : null,
            },
            {
              needs: "gender",
              percentage: this.requirement.personal.gender
                ? this.requirement.priorities.gender / 100
                : null,
            },
            {
              needs: "max_age",
              percentage: this.requirement.personal.max_age
                ? this.requirement.priorities.max_age / 100
                : null,
            },
          ],
        };
        this.is_loading = true;
        let api =
          process.env.VUE_APP_API_URL +
          "talent/recommendation/" +
          this.account_id +
          "?status=available";
        this.$url
          .post(api, params)
          .then((res) => {
            let temp = [];
            for (let i = 0; i < res.data.recommendation.length; i++) {
              temp[i] = res.data.recommendation[i].talent;
              if (res.data.recommendation[i].score == 0) {
                temp.sort(function (a, b) {
                  var prog_val_a = a.hardskill[0].programming_language.length;
                  var prog_val_b = b.hardskill[0].programming_language.length;

                  if (prog_val_a < prog_val_b) {
                    return 1;
                  }
                  if (prog_val_a > prog_val_b) {
                    return -1;
                  }
                  return 0;
                });
              }
            }

            this.data = temp;
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.is_loading = false;
          });
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
  width: 4rem !important;
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
