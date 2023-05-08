<template>
  <div id="profile-talent">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-12 mb-4">
          <!-- Profile -->
          <b-card no-body class="h-100 p-2">
            <b-card-header>
              <b-card-title class="fs-20"> Profile </b-card-title>
            </b-card-header>
            <b-card-body class="mt-0 pt-0">
              <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(updateProfile)">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <!-- Full Name -->
                    <div class="mt-2">
                      <label for="full-name" class="fs-12">
                        Full Name
                        <span class="text-danger">*</span>
                      </label>
                      <div class="d-flex">
                        <div class="icon-talent d-flex p-0 form-control mr-1">
                          <i
                            class="bi bi-person-lines-fill mx-auto my-auto"
                          ></i>
                        </div>
                        <b-form-input
                          type="text"
                          id="full-name"
                          placeholder="Input Your Full Name"
                          class="input-talent ml-auto"
                          style="height: 2.5rem !important"
                          v-model="profile.full_name"
                        />
                      </div>
                    </div>
                    <span class="text-danger fs-10">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <!-- Description -->
                  <div class="mt-2">
                    <label for="description" class="fs-12"> Description </label>
                    <div class="d-flex">
                      <div class="icon-talent d-flex p-0 form-control mr-1">
                        <i class="bi bi-info-circle mx-auto my-auto"></i>
                      </div>
                      <b-form-textarea
                        type="text"
                        id="description"
                        rows="5"
                        placeholder="Input Your Descriptions"
                        class="form-control input-area ml-auto"
                        v-model="profile.description"
                      />
                    </div>
                  </div>
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <!-- Programming Language -->
                    <div class="mt-2">
                      <label for="programming-language" class="fs-12">
                        Programming Language
                        <span class="text-danger">*</span>
                      </label>
                      <div class="d-flex">
                        <div class="icon-talent d-flex p-0 form-control mr-1">
                          <i class="bi bi-motherboard mx-auto my-auto"></i>
                        </div>
                        <v-select
                          id="programming-language"
                          :options="['php', 'Javascript']"
                          multiple
                          placeholder="Select Your Programming Language Skills"
                          v-model="profile.programming_language"
                        ></v-select>
                      </div>
                    </div>
                    <span class="text-danger fs-10">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <!-- Framework -->
                    <div class="mt-2">
                      <label for="framework" class="fs-12">
                        Framework
                        <span class="text-danger">*</span>
                      </label>
                      <div class="d-flex">
                        <div class="icon-talent d-flex p-0 form-control mr-1">
                          <i
                            class="bi bi-pc-display-horizontal mx-auto my-auto"
                          ></i>
                        </div>
                        <v-select
                          id="framework"
                          :options="['php', 'Javascript']"
                          multiple
                          placeholder="Select Your Framework Skills"
                          v-model="profile.framework"
                        ></v-select>
                      </div>
                    </div>
                    <span class="text-danger fs-10">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <!-- Application Server -->
                  <div class="mt-2">
                    <label for="application-server" class="fs-12">
                      Application Server
                    </label>
                    <div class="d-flex">
                      <div class="icon-talent d-flex p-0 form-control mr-1">
                        <i class="bi bi-hdd-rack mx-auto my-auto"></i>
                      </div>
                      <b-form-input
                        type="text"
                        id="application-server"
                        placeholder="Input Your Application Server Skills"
                        class="input-talent ml-auto"
                        style="height: 2.5rem !important"
                        v-model="profile.application_server"
                      />
                    </div>
                  </div>
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <!-- Database -->
                    <div class="mt-2">
                      <label for="database" class="fs-12">
                        Database
                        <span class="text-danger">*</span>
                      </label>
                      <div class="d-flex">
                        <div class="icon-talent d-flex p-0 form-control mr-1">
                          <i class="bi bi-database mx-auto my-auto"></i>
                        </div>
                        <v-select
                          id="database"
                          :options="['php', 'Javascript']"
                          multiple
                          placeholder="Select Your Database Skills"
                          v-model="profile.database"
                        ></v-select>
                      </div>
                    </div>
                    <span class="text-danger fs-10">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <!-- Operating System -->
                  <div class="mt-2">
                    <label for="operating-system" class="fs-12">
                      Operating System
                    </label>
                    <div class="d-flex">
                      <div class="icon-talent d-flex p-0 form-control mr-1">
                        <i class="bi bi-cpu mx-auto my-auto"></i>
                      </div>
                      <b-form-input
                        type="text"
                        id="operating-system"
                        placeholder="Input Your Operating System Skills"
                        class="input-talent ml-auto"
                        style="height: 2.5rem !important"
                        v-model="profile.operating_system"
                      />
                    </div>
                  </div>
                  <!-- Development Tools -->
                  <div class="mt-2">
                    <label for="development-tools" class="fs-12">
                      Development Tools
                    </label>
                    <div class="d-flex">
                      <div class="icon-talent d-flex p-0 form-control mr-1">
                        <i class="bi bi-gear mx-auto my-auto"></i>
                      </div>
                      <b-form-input
                        type="text"
                        id="development-tools"
                        placeholder="Input Your Development Tool Skills"
                        class="input-talent ml-auto"
                        style="height: 2.5rem !important"
                        v-model="profile.development_tools"
                      />
                    </div>
                  </div>
                  <!-- Place of Birth -->
                  <div class="mt-2">
                    <label for="place-of-birth" class="fs-12">
                      Place of Birth
                    </label>
                    <div class="d-flex">
                      <div class="icon-talent d-flex p-0 form-control mr-1">
                        <i class="bi bi-geo-alt mx-auto my-auto"></i>
                      </div>
                      <b-form-input
                        type="text"
                        id="place-of-birth"
                        placeholder="Input Your Place of Birth"
                        class="input-talent ml-auto"
                        style="height: 2.5rem !important"
                        v-model="profile.place_of_birth"
                      />
                    </div>
                  </div>
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <!-- Date of Birth -->
                    <div class="mt-2">
                      <label for="date-of-birth" class="fs-12">
                        Date of Birth
                        <span class="text-danger">*</span>
                      </label>
                      <div class="d-flex">
                        <div class="icon-talent d-flex p-0 form-control mr-1">
                          <i class="bi bi-calendar mx-auto my-auto"></i>
                        </div>
                        <b-form-datepicker
                          id="date-of-birth"
                          class="date-talent"
                          :date-format-options="{
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit',
                          }"
                          placeholder="Select Your Date of Birth"
                          locale="en"
                          style="height: 2.5rem !important"
                          v-model="profile.date_of_birth"
                        ></b-form-datepicker>
                      </div>
                    </div>
                    <span class="text-danger fs-10">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <!-- Gender -->
                    <div class="mt-2">
                      <label for="gender" class="fs-12">
                        Gender
                        <span class="text-danger">*</span>
                      </label>
                      <div class="d-flex">
                        <div class="icon-talent d-flex p-0 form-control mr-1">
                          <i class="bi bi-gender-female mx-auto my-auto"></i>
                        </div>
                        <v-select
                          id="gender"
                          :options="['Male', 'Female']"
                          multiple
                          placeholder="Select Your Gender"
                          v-model="profile.gender"
                        ></v-select>
                      </div>
                    </div>
                    <span class="text-danger fs-10">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <!-- Health -->
                  <div class="mt-2">
                    <label for="health" class="fs-12"> Health </label>
                    <div class="d-flex">
                      <div class="icon-talent d-flex p-0 form-control mr-1">
                        <i class="bi bi-prescription2 mx-auto my-auto"></i>
                      </div>
                      <b-form-input
                        type="text"
                        id="health"
                        placeholder="Input Your Health Status"
                        class="input-talent ml-auto"
                        style="height: 2.5rem !important"
                        v-model="profile.health"
                      />
                    </div>
                  </div>
                  <!-- Religion -->
                  <div class="mt-2">
                    <label for="religion" class="fs-12"> Religion </label>
                    <div class="d-flex">
                      <div class="icon-talent d-flex p-0 form-control mr-1">
                        <i class="bi bi-person-vcard mx-auto my-auto"></i>
                      </div>
                      <b-form-input
                        type="text"
                        id="religion"
                        placeholder="Input Your Religion"
                        class="input-talent ml-auto"
                        style="height: 2.5rem !important"
                        v-model="profile.religion"
                      />
                    </div>
                  </div>
                  <!-- Language -->
                  <div class="mt-2">
                    <label for="language" class="fs-12"> Language </label>
                    <div class="d-flex">
                      <div class="icon-talent d-flex p-0 form-control mr-1">
                        <i class="bi bi-translate mx-auto my-auto"></i>
                      </div>
                      <b-form-input
                        type="text"
                        id="language"
                        placeholder="Input Your Language Skills"
                        class="input-talent ml-auto"
                        style="height: 2.5rem !important"
                        v-model="profile.language"
                      />
                    </div>
                  </div>
                  <!-- submit button -->
                  <b-button
                    size="sm"
                    type="submit"
                    class="mt-3 btn-talent float-right"
                  >
                    <i class="bi bi-check-circle mr-1"></i>
                    <span>Save Changes</span>
                  </b-button>
                </form>
              </ValidationObserver>
            </b-card-body>
          </b-card>
        </div>
        <div class="col-md-7 col-sm-12">
          <div class="row">
            <!-- Education -->
            <div class="col-md-12 mb-4">
              <b-card no-body>
                <b-card-header>
                  <b-card-title class="fs-20">
                    <div class="row">
                      <div class="col-md-4 col-sm-12 mb-2">Education</div>
                      <div class="col-md-8 col-sm-12">
                        <div class="d-flex align-items-center">
                          <div class="ml-auto">
                            <button
                              class="btn btn-talent text-white shadow btn-sm rounded-talent"
                              @click="addEducation"
                            >
                              <i class="bi bi-plus-lg mr-1"></i>
                              <span>Add Education</span>
                            </button>
                          </div>
                          <div class="ml-2">
                            <div class="input-group input-group-sm">
                              <span class="input-group-text bg-white">
                                <i class="bi bi-search fs-12"></i>
                              </span>
                              <input
                                type="text"
                                class="form-control form-talent form-search"
                                placeholder="Search..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-card-title>
                </b-card-header>
                <data_table :data="education_table" :hide_show="true" />
              </b-card>
            </div>
            <!-- Course -->
            <div class="col-md-12 mb-4">
              <b-card no-body>
                <b-card-header>
                  <b-card-title class="fs-20">
                    <div class="row">
                      <div class="col-md-4 col-sm-12 mb-2">
                        Course / Training
                      </div>
                      <div class="col-md-8 col-sm-12">
                        <div class="d-flex align-items-center">
                          <div class="ml-auto">
                            <button
                              class="btn btn-talent text-white shadow btn-sm rounded-talent"
                              @click="addCourse"
                            >
                              <i class="bi bi-plus-lg mr-1"></i>
                              <span>Add Course</span>
                            </button>
                          </div>
                          <div class="ml-2">
                            <div class="input-group input-group-sm">
                              <span class="input-group-text bg-white">
                                <i class="bi bi-search fs-12"></i>
                              </span>
                              <input
                                type="text"
                                class="form-control form-talent form-search"
                                placeholder="Search..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-card-title>
                </b-card-header>
                <data_table :data="course_table" :hide_show="true" />
              </b-card>
            </div>
            <!-- Employement -->
            <div class="col-md-12 mb-4">
              <b-card no-body>
                <b-card-header>
                  <b-card-title class="fs-20">
                    <div class="row">
                      <div class="col-md-4 col-sm-12 mb-2">Employement</div>
                      <div class="col-md-8 col-sm-12">
                        <div class="d-flex align-items-center">
                          <div class="ml-auto">
                            <button
                              class="btn btn-talent text-white shadow btn-sm rounded-talent"
                              @click="addEmployement"
                            >
                              <i class="bi bi-plus-lg mr-1"></i>
                              <span>Add Employement</span>
                            </button>
                          </div>
                          <div class="ml-2">
                            <div class="input-group input-group-sm">
                              <span class="input-group-text bg-white">
                                <i class="bi bi-search fs-12"></i>
                              </span>
                              <input
                                type="text"
                                class="form-control form-talent form-search"
                                placeholder="Search..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-card-title>
                </b-card-header>
                <data_table :data="employement_table" :hide_show="true" />
              </b-card>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <b-card no-body>
            <b-card-header>
              <b-card-title class="fs-20">
                <div class="row">
                  <div class="col-md-4 col-sm-12 mb-2">Project Experience</div>
                  <div class="col-md-8 col-sm-12">
                    <div class="d-flex align-items-center">
                      <div class="ml-auto">
                        <button
                          class="btn btn-talent text-white shadow btn-sm rounded-talent"
                          @click="addProject"
                        >
                          <i class="bi bi-plus-lg mr-1"></i>
                          <span>Add Project</span>
                        </button>
                      </div>
                      <div class="ml-2">
                        <div class="input-group input-group-sm">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-search fs-12"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control form-talent form-search"
                            placeholder="Search..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-card-title>
            </b-card-header>
            <data_table :data="project_table" :hide_show="true" />
          </b-card>
        </div>
      </div>
    </div>
    <add_education_modal />
    <add_course_modal />
    <add_employement_modal />
    <add_project_modal />
  </div>
</template>
<script>
import data_table from "../../components/data_table.vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import add_education_modal from "../../components/talent/addEducationModal.vue";
import add_course_modal from "../../components/talent/addCourseModal.vue";
import add_project_modal from "../../components/talent/addProjectModal.vue";
import add_employement_modal from "../../components/talent/addEmployementModal.vue";

extend("required", {
  ...required,
  message: "This Field is Required",
});

export default {
  name: "MyProfile",
  components: {
    data_table,
    add_education_modal,
    add_course_modal,
    add_project_modal,
    add_employement_modal,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      profile: {
        full_name: "Hanhan Septian",
        description: "",
        programming_language: [],
        framework: [],
        application_server: "",
        database: [],
        operating_system: "",
        development_tools: "",
        place_of_birth: "",
        date_of_birth: "",
        gender: "",
        health: "",
        religion: "",
        language: "",
      },
      education_table: {
        row: 5,
        filter: "",
        fields: [
          {
            key: "no",
            label: "NO",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec;width:5%",
          },
          {
            key: "school",
            label: "SCHOOL NAME",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec;width:auto",
          },
          {
            key: "degree",
            label: "DEGREE",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec;width:25%",
          },
          {
            key: "subject",
            label: "SUBJECT",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec;width:30%",
          },
          {
            key: "action",
            label: "ACTION",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec;width:10%",
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
          {
            id: 5,
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
            key: "no",
            label: "NO",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec;width:2%",
          },
          {
            key: "title",
            label: "TITLE",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec;width:30%",
          },
          {
            key: "provider",
            label: "PROVIDER",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec;width:20%",
          },
          {
            key: "date",
            label: "DATE",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec;width:25%",
          },
          {
            key: "duration",
            label: "DURATION",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec;width:10%",
          },
          {
            key: "action",
            label: "ACTION",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
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
          {
            id: 4,
            title: "Machine Learning for Beginners",
            provider: "Dicoding",
            date: "02 December 2022",
            duration: "2 Month",
          },
          {
            id: 5,
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
            key: "no",
            label: "NO",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec;width:2%",
          },
          {
            key: "company",
            label: "COMPANY",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec;width:auto",
          },
          {
            key: "work_from",
            label: "WORK FROM",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec;width:20%",
          },
          {
            key: "work_until",
            label: "WORK UNTIL",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec;width:20%",
          },
          {
            key: "role",
            label: "ROLE",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec;width:25%",
          },
          {
            key: "action",
            label: "ACTION",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec;width:10%",
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
            key: "no",
            label: "NO",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec;width:2%",
          },
          {
            key: "name",
            label: "NAME",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "site",
            label: "SITE",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "from",
            label: "FROM",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "to",
            label: "TO",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "client",
            label: "CLIENT",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "descriptions",
            label: "DESCRIPTIONS",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "app_type",
            label: "APP TYPE",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "dev_language",
            label: "DEV LANGUAGE",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "role",
            label: "ROLE",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "framework",
            label: "FRAMEWORK",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "dev_tools",
            label: "DEV TOOLS",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "server_os",
            label: "SERVER OS",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "database",
            label: "DATABASE",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "app_server",
            label: "APP SERVER",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "other_info",
            label: "OTHER INFO",
            thClass: "text-talent text-left fs-12",
            tdClass: " text-talent text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "action",
            label: "ACTION",
            thClass: "text-talent text-center fs-12",
            tdClass: " text-talent text-center fs-12",
            thStyle: "background-color: #c1dbec;width:10%",
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
    updateProfile() {
      alert("submitted");
    },
    addEducation() {
      this.$bvModal.show("add-education-modal");
    },
    addCourse() {
      this.$bvModal.show("add-course-modal");
    },
    addEmployement() {
      this.$bvModal.show("add-employement-modal");
    },
    addProject() {
      this.$bvModal.show("add-project-modal");
    },
  },
};
</script>
<style scoped>
.input-talent {
  border-radius: 7px !important;
  border-color: #0173a7 !important;
  font-size: 12px !important;
  background-color: white !important;
}
.input-talent:focus {
  box-shadow: 2px 2px 2px #0173a7 !important;
  border-color: none !important;
}
.input-area {
  border-radius: 7px !important;
  border-color: #0173a7 !important;
  font-size: 12px !important;
  background-color: white;
}
.input-area:focus {
  box-shadow: 2px 2px 2px #0173a7 !important;
  border-color: none !important;
}
.date-talent {
  border-radius: 7px !important;
  border-color: #0173a7 !important;
  font-size: 12px !important;
  align-items: center !important;
  height: 5vh !important;
  background-color: white;
}
.date-talent:focus {
  box-shadow: 2px 2px 2px #0173a7 !important;
  border-color: none !important;
}
.icon-talent {
  border-radius: 7px !important;
  border-color: #0173a7 !important;
  background-color: white !important;
  font-size: 20px !important;
  height: 2.51rem !important;
  width: 2.7rem !important;
}
</style>