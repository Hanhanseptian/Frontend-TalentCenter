<template>
  <div id="profile-talent">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 mb-4">
          <!-- PROFILE -->
          <b-card no-body class="p-2 mb-4">
            <b-card-header>
              <b-card-title class="fs-20"> Profile </b-card-title>
            </b-card-header>
            <!-- LOADER COMPONENT -->
            <loader-component v-if="is_load_profile" class="mb-3" />
            <!-- CARD ITEM -->
            <b-card-body v-else class="mt-0 pt-0">
              <!-- PROFILE FORM -->
              <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(updateProfile)">
                  <div class="row">
                    <!-- LEFT COLUMN -->
                    <div class="col-md-6">
                      <!-- FULL NAME -->
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <div class="mt-2">
                          <label for="full-name" class="fs-12">
                            Full Name
                            <span class="text-danger">*</span>
                          </label>
                          <div class="d-flex">
                            <div
                              class="icon-talent d-flex p-0 form-control mr-1"
                            >
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
                      <!-- DESCRIPTION -->
                      <div class="mt-2">
                        <label for="description" class="fs-12">
                          Description
                        </label>
                        <div class="d-flex">
                          <div class="icon-talent d-flex p-0 form-control mr-1">
                            <i class="bi bi-info-circle mx-auto my-auto"></i>
                          </div>
                          <b-form-textarea
                            type="text"
                            id="description"
                            rows="6"
                            placeholder="Input Your Descriptions"
                            class="form-control input-area ml-auto"
                            v-model="profile.description"
                          />
                        </div>
                      </div>
                      <!-- PLACE OF BIRTH -->
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
                      <!-- DATE OF BIRTH -->
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <div class="mt-2">
                          <label for="date-of-birth" class="fs-12">
                            Date of Birth
                            <span class="text-danger">*</span>
                          </label>
                          <div class="d-flex">
                            <div
                              class="icon-talent d-flex p-0 form-control mr-1"
                            >
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
                      <!-- GENDER -->
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <div class="mt-2">
                          <label for="gender" class="fs-12">
                            Gender
                            <span class="text-danger">*</span>
                          </label>
                          <div class="d-flex">
                            <div
                              class="icon-talent d-flex p-0 form-control mr-1"
                            >
                              <i
                                class="bi bi-gender-female mx-auto my-auto"
                              ></i>
                            </div>
                            <v-select
                              id="gender"
                              :options="['Male', 'Female']"
                              placeholder="Select Your Gender"
                              v-model="profile.gender"
                            ></v-select>
                          </div>
                        </div>
                        <span class="text-danger fs-10">{{ errors[0] }}</span>
                      </ValidationProvider>
                      <!-- HEALTH -->
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
                      <!-- RELIGION -->
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
                      <!-- LANGUAGE SKILLS -->
                      <div class="mt-2">
                        <label for="language" class="fs-12">
                          Language Skills
                        </label>
                        <div class="d-flex">
                          <div class="icon-talent d-flex p-0 form-control mr-1">
                            <i class="bi bi-translate mx-auto my-auto"></i>
                          </div>
                          <b-form-input
                            type="text"
                            id="language"
                            placeholder="Input Your Language Skills (Ex. English, Indonesian)"
                            class="input-talent ml-auto"
                            style="height: 2.5rem !important"
                            v-model="profile.language"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- RIGHT COLUMN -->
                    <div class="col-md-6">
                      <!-- PROGRAMMING LANGUAGE SKILLS -->
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <div class="mt-2">
                          <label for="programming-language" class="fs-12">
                            Programming Language Skills
                            <span class="text-danger">*</span>
                          </label>
                          <div class="d-flex">
                            <div
                              class="icon-talent d-flex p-0 form-control mr-1"
                            >
                              <i class="bi bi-motherboard mx-auto my-auto"></i>
                            </div>
                            <v-select
                              id="programming-language"
                              :options="programming_language_options"
                              multiple
                              placeholder="Select Your Programming Language Skills"
                              v-model="profile.programming_language"
                            ></v-select>
                          </div>
                        </div>
                        <span class="text-danger fs-10">{{ errors[0] }}</span>
                      </ValidationProvider>
                      <!-- FRAMEWORK SKILLS -->
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <div class="mt-2">
                          <label for="framework" class="fs-12">
                            Framework Skills
                            <span class="text-danger">*</span>
                          </label>
                          <div class="d-flex">
                            <div
                              class="icon-talent d-flex p-0 form-control mr-1"
                            >
                              <i
                                class="bi bi-pc-display-horizontal mx-auto my-auto"
                              ></i>
                            </div>
                            <v-select
                              id="framework"
                              :options="framework_options"
                              multiple
                              placeholder="Select Your Framework Skills"
                              v-model="profile.framework"
                            ></v-select>
                          </div>
                        </div>
                        <span class="text-danger fs-10">{{ errors[0] }}</span>
                      </ValidationProvider>
                      <!-- APPLICATION SERVER SKILLS -->
                      <div class="mt-2">
                        <label for="application-server" class="fs-12">
                          Application Server Skills
                        </label>
                        <div class="d-flex">
                          <div class="icon-talent d-flex p-0 form-control mr-1">
                            <i class="bi bi-hdd-rack mx-auto my-auto"></i>
                          </div>
                          <b-form-input
                            type="text"
                            id="application-server"
                            placeholder="Input Your Application Server Skills (Ex. Web Server, Proxy Server)"
                            class="input-talent ml-auto"
                            style="height: 2.5rem !important"
                            v-model="profile.application_server"
                          />
                        </div>
                      </div>
                      <!-- DATABASE SKILLS -->
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <div class="mt-2">
                          <label for="database" class="fs-12">
                            Database Skills
                            <span class="text-danger">*</span>
                          </label>
                          <div class="d-flex">
                            <div
                              class="icon-talent d-flex p-0 form-control mr-1"
                            >
                              <i class="bi bi-database mx-auto my-auto"></i>
                            </div>
                            <v-select
                              id="database"
                              :options="database_options"
                              multiple
                              placeholder="Select Your Database Skills"
                              v-model="profile.database"
                            ></v-select>
                          </div>
                        </div>
                        <span class="text-danger fs-10">{{ errors[0] }}</span>
                      </ValidationProvider>
                      <!-- OPERATING SYSTEM SKILLS -->
                      <div class="mt-2">
                        <label for="operating-system" class="fs-12">
                          Operating System Skills
                        </label>
                        <div class="d-flex">
                          <div class="icon-talent d-flex p-0 form-control mr-1">
                            <i class="bi bi-cpu mx-auto my-auto"></i>
                          </div>
                          <b-form-input
                            type="text"
                            id="operating-system"
                            placeholder="Input Your Operating System Skills (Ex. Windows, Linux)"
                            class="input-talent ml-auto"
                            style="height: 2.5rem !important"
                            v-model="profile.operating_system"
                          />
                        </div>
                      </div>
                      <!-- DEVELOPMENT TOOL SKILLS -->
                      <div class="mt-2">
                        <label for="development-tools" class="fs-12">
                          Development Tool Skills
                        </label>
                        <div class="d-flex">
                          <div class="icon-talent d-flex p-0 form-control mr-1">
                            <i class="bi bi-gear mx-auto my-auto"></i>
                          </div>
                          <b-form-input
                            type="text"
                            id="development-tools"
                            placeholder="Input Your Development Tool Skills (Ex. VSCode, Intellije)"
                            class="input-talent ml-auto"
                            style="height: 2.5rem !important"
                            v-model="profile.development_tools"
                          />
                        </div>
                      </div>
                      <!-- ROLE -->
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <div class="mt-2">
                          <label for="role" class="fs-12">
                            Role
                            <span class="text-danger">*</span>
                          </label>
                          <div class="d-flex">
                            <div
                              class="icon-talent d-flex p-0 form-control mr-1"
                            >
                              <i class="bi bi-toggles2 mx-auto my-auto"></i>
                            </div>
                            <v-select
                              id="role"
                              :options="['Frontend', 'Backend', 'Fullstack']"
                              placeholder="Select Your Role Skills"
                              v-model="profile.role"
                            ></v-select>
                          </div>
                        </div>
                        <span class="text-danger fs-10">{{ errors[0] }}</span>
                      </ValidationProvider>
                      <!-- WORK EXPERIENCE  -->
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <div class="mt-2">
                          <label for="work-experience" class="fs-12">
                            Work Experience (Years)
                          </label>
                          <div class="d-flex">
                            <div
                              class="icon-talent d-flex p-0 form-control mr-1"
                            >
                              <i
                                class="bi bi-person-workspace mx-auto my-auto"
                              ></i>
                            </div>
                            <b-form-input
                              type="number"
                              id="work-experience"
                              placeholder="Input Your Work Experience"
                              class="input-talent ml-auto"
                              style="height: 2.5rem !important"
                              v-model="profile.work_experience"
                            />
                          </div>
                        </div>
                        <span class="text-danger fs-10">{{ errors[0] }}</span>
                      </ValidationProvider>
                      <!-- SUBMIT BUTTON -->
                      <b-button
                        size="sm"
                        type="submit"
                        class="mt-5 btn-talent float-right rounded-talent"
                      >
                        Save Changes
                        <b-spinner v-if="is_process" small></b-spinner>
                      </b-button>
                    </div>
                  </div>
                </form>
              </ValidationObserver>
            </b-card-body>
          </b-card>

          <!-- EDUCATION PROFILE -->
          <b-card no-body class="mb-4">
            <b-card-header>
              <b-card-title class="fs-20">
                <div class="row">
                  <div class="col-md-4 col-sm-12 mb-2">Education</div>
                  <div class="col-md-8 col-sm-12">
                    <div class="d-flex align-items-center">
                      <!-- ADD EDUCATION BUTTON -->
                      <div class="ml-auto">
                        <button
                          class="btn btn-talent text-white shadow btn-sm rounded-talent"
                          @click="addEducation"
                        >
                          <i class="bi bi-plus-lg mr-1"></i>
                          <span>Add Education</span>
                        </button>
                      </div>
                      <!-- SEARCH INPUT -->
                      <div class="ml-2">
                        <div class="input-group input-group-sm">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-search fs-12"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control form-talent form-search"
                            placeholder="Search..."
                            v-model="education_table.filter"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-card-title>
            </b-card-header>
            <!-- LOADER COMPONENT -->
            <loader-component v-if="is_load_education" class="mb-3" />
            <!-- TABLE COMPONENT -->
            <table-component
              v-else
              :data="education_table"
              :deleteItem="deleteEducation"
              :editItem="editEducation"
              :hide_show="true"
            />
          </b-card>

          <!-- COURSE PROFILE -->
          <b-card no-body class="mb-4">
            <b-card-header>
              <b-card-title class="fs-20">
                <div class="row">
                  <div class="col-md-4 col-sm-12 mb-2">Course / Training</div>
                  <div class="col-md-8 col-sm-12">
                    <div class="d-flex align-items-center">
                      <!-- ADD COURSE BUTTON -->
                      <div class="ml-auto">
                        <button
                          class="btn btn-talent text-white shadow btn-sm rounded-talent"
                          @click="addCourse"
                        >
                          <i class="bi bi-plus-lg mr-1"></i>
                          <span>Add Course</span>
                        </button>
                      </div>
                      <!-- SEARCH INPUT -->
                      <div class="ml-2">
                        <div class="input-group input-group-sm">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-search fs-12"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control form-talent form-search"
                            placeholder="Search..."
                            v-model="course_table.filter"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-card-title>
            </b-card-header>
            <!-- LOADER COMPONENT -->
            <loader-component v-if="is_load_course" class="mb-3" />
            <!-- TABLE COMPONENT -->
            <table-component
              v-else
              :data="course_table"
              :deleteItem="deleteCourse"
              :editItem="editCourse"
              :hide_show="true"
            />
          </b-card>

          <!-- EMPLOYMENT PROFILE -->
          <b-card no-body class="mb-4">
            <b-card-header>
              <b-card-title class="fs-20">
                <div class="row">
                  <div class="col-md-4 col-sm-12 mb-2">Employment</div>
                  <div class="col-md-8 col-sm-12">
                    <div class="d-flex align-items-center">
                      <!-- ADD EMPLOYMENT BUTTON -->
                      <div class="ml-auto">
                        <button
                          class="btn btn-talent text-white shadow btn-sm rounded-talent"
                          @click="addEmployement"
                        >
                          <i class="bi bi-plus-lg mr-1"></i>
                          <span>Add Employment</span>
                        </button>
                      </div>
                      <!-- SEARCH INPUT -->
                      <div class="ml-2">
                        <div class="input-group input-group-sm">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-search fs-12"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control form-talent form-search"
                            placeholder="Search..."
                            v-model="employment_table.filter"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-card-title>
            </b-card-header>
            <!-- LOADER COMPONENT -->
            <loader-component v-if="is_load_employment" class="mb-3" />
            <!-- TABLE COMPONENT -->
            <table-component
              v-else
              :data="employment_table"
              :deleteItem="deleteEmployment"
              :editItem="editEmployement"
              :is_detail="true"
              :hide_show="true"
            />
          </b-card>

          <!-- PROJECT EXPERIENCE PROFILE -->
          <b-card no-body>
            <b-card-header>
              <b-card-title class="fs-20">
                <div class="row">
                  <div class="col-md-4 col-sm-12 mb-2">Project Experience</div>
                  <div class="col-md-8 col-sm-12">
                    <div class="d-flex align-items-center">
                      <!-- ADD PROJECT BUTTON -->
                      <div class="ml-auto">
                        <button
                          class="btn btn-talent text-white shadow btn-sm rounded-talent"
                          @click="addProject"
                        >
                          <i class="bi bi-plus-lg mr-1"></i>
                          <span>Add Project</span>
                        </button>
                      </div>
                      <!-- SEARCH INPUT -->
                      <div class="ml-2">
                        <div class="input-group input-group-sm">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-search fs-12"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control form-talent form-search"
                            placeholder="Search..."
                            v-model="project_table.filter"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-card-title>
            </b-card-header>
            <!-- LOADER COMPONENT -->
            <loader-component v-if="is_load_project" class="mb-3" />
            <!-- TABLE COMPONENT -->
            <table-component
              v-else
              :data="project_table"
              :deleteItem="deleteProject"
              :editItem="editProject"
              :hide_show="true"
            />
          </b-card>
        </div>
      </div>
    </div>
    <!-- ADD EDUCATION MODAL COMPONENT -->
    <add-education-component />
    <!-- EDIT EDUCATION MODAL COMPONENT -->
    <edit-education-component ref="edit_education" />
    <!-- ADD COURSE MODAL COMPONENT -->
    <add-course-component />
    <!-- EDIT COURSE MODAL COMPONENT -->
    <edit-course-component ref="edit_course" />
    <!-- ADD EMPLOYMENT MODAL COMPONENT -->
    <add-employment-component />
    <!-- EDIT EMPLOYMENT MODAL COMPONENT -->
    <edit-employment-component ref="edit_employment" />
    <!-- ADD PROJECT EXPERIENCE MODAL COMPONENT -->
    <add-project-component />
    <!-- EDIT PROJECT EXPERIENCE MODAL COMPONENT -->
    <edit-project-component ref="edit_project" />
  </div>
</template>
<script>
import Swal from "sweetalert2";
import data_table from "../../components/data_table.vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import add_education_modal from "../../components/talent/add_education_modal.vue";
import edit_education_modal from "../../components/talent/edit_education_modal.vue";
import add_course_modal from "../../components/talent/add_course_modal.vue";
import edit_course_modal from "../../components/talent/edit_course_modal.vue";
import add_project_modal from "../../components/talent/add_project_modal.vue";
import edit_project_modal from "../../components/talent/edit_project_modal.vue";
import add_employment_modal from "../../components/talent/add_employment_modal.vue";
import edit_employment_modal from "../../components/talent/edit_employment_modal.vue";
import loader from "../../components/loader.vue";

extend("required", {
  ...required,
  message: "This Field is Required",
});

export default {
  name: "Profile",
  components: {
    "table-component": data_table,
    "add-education-component": add_education_modal,
    "edit-education-component": edit_education_modal,
    "add-course-component": add_course_modal,
    "edit-course-component": edit_course_modal,
    "add-employment-component": add_employment_modal,
    "edit-employment-component": edit_employment_modal,
    "add-project-component": add_project_modal,
    "edit-project-component": edit_project_modal,
    "loader-component": loader,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      is_load_profile: true,
      is_load_education: true,
      is_load_course: true,
      is_load_employment: true,
      is_load_project: true,
      is_process: false,
      account_id: this.$store.getters.user.user_id,
      programming_language_options: [],
      database_options: [],
      framework_options: [],
      profile: {
        full_name: "",
        description: "",
        programming_language: [],
        framework: [],
        application_server: "",
        database: [],
        operating_system: "",
        development_tools: "",
        work_experience: "",
        place_of_birth: "",
        date_of_birth: "",
        gender: "",
        health: "",
        religion: "",
        language: "",
        role: "",
      },
      education_table: {
        row: 5,
        filter: "",
        fields: [
          {
            key: "no",
            label: "NO",
            thClass: "fs-12 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "width:5%",
          },
          {
            key: "school",
            label: "SCHOOL NAME",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "width:auto",
          },
          {
            key: "degree",
            label: "DEGREE",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "width:25%",
          },
          {
            key: "subject",
            label: "SUBJECT",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "width:30%",
          },
          {
            key: "action",
            label: "ACTION",
            thClass: "fs-12 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-12",
          },
        ],
        items: [],
      },
      course_table: {
        row: 5,
        filter: "",
        fields: [
          {
            key: "no",
            label: "NO",
            thClass: "fs-12 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "width:2%",
          },
          {
            key: "title",
            label: "TITLE",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "width:30%",
          },
          {
            key: "provider",
            label: "PROVIDER",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "width:20%",
          },
          {
            key: "date",
            label: "DATE",
            thClass: "fs-12 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "width:25%",
          },
          {
            key: "duration",
            label: "DURATION",
            thClass: "fs-12 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "width:10%",
          },
          {
            key: "action",
            label: "ACTION",
            thClass: "fs-12 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "width:10%",
          },
        ],
        items: [],
      },
      employment_table: {
        row: 5,
        filter: "",
        fields: [
          {
            key: "no",
            label: "NO",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "width:2%",
          },
          {
            key: "company_name",
            label: "COMPANY",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "width:auto",
          },
          {
            key: "work_from",
            label: "WORK FROM",
            thClass: "fs-12 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "width:20%",
          },
          {
            key: "work_until",
            label: "WORK UNTIL",
            thClass: "fs-12 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "width:20%",
          },
          {
            key: "role",
            label: "ROLE",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "width:25%",
          },
          {
            key: "action",
            label: "ACTION",
            thClass: "fs-12 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "width:10%",
          },
        ],
        items: [],
      },
      project_table: {
        row: 5,
        filter: "",
        fields: [
          {
            key: "no",
            label: "NO",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "width:2%",
          },
          {
            key: "name",
            label: "NAME",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "site",
            label: "SITE",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "project_start",
            label: "FROM",
            thClass: "fs-12 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "project_end",
            label: "TO",
            thClass: "fs-12 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "client",
            label: "CLIENT",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "description",
            label: "DESCRIPTIONS",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "app_type",
            label: "APP TYPE",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "dev_language",
            label: "DEV LANGUAGE",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "role",
            label: "ROLE",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "framework",
            label: "FRAMEWORK",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "dev_tools",
            label: "DEV TOOLS",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "server_os",
            label: "SERVER OS",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "database",
            label: "DATABASE",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "app_server",
            label: "APP SERVER",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "other_info",
            label: "OTHER INFO",
            thClass: "fs-12 text-left bg-talent text-white p-2",
            tdClass: "text-left fs-12",
            thStyle: "background-color: #c1dbec",
          },
          {
            key: "action",
            label: "ACTION",
            thClass: "fs-12 text-center bg-talent text-white p-2",
            tdClass: "text-center fs-12",
            thStyle: "width:10%",
          },
        ],
        items: [],
      },
    };
  },
  created() {
    this.getOptions();
  },
  methods: {
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
          this.getProfile();
          this.is_req_loading = false;
        });
    },
    getProfile(
      profile = true,
      education = true,
      course = true,
      employment = true,
      project = true
    ) {
      this.is_load_profile = profile;
      this.is_load_education = education;
      this.is_load_course = course;
      this.is_load_employment = employment;
      this.is_load_project = project;
      let api = process.env.VUE_APP_API_URL + "talent/" + this.account_id;
      this.$url
        .get(api)
        .then((res) => {
          let val = res.data.talent;
          this.profile.full_name = val.full_name;
          if ("description" in val) {
            this.profile.description = val.description;
          }
          if ("place_of_birth" in val) {
            this.profile.place_of_birth = val.place_of_birth;
          }
          if ("date_of_birth" in val) {
            this.profile.date_of_birth = val.date_of_birth;
          }
          if ("gender" in val) {
            this.profile.gender = val.gender;
          }
          if ("health" in val) {
            this.profile.health = val.health;
          }
          if ("religion" in val) {
            this.profile.religion = val.religion;
          }
          if ("language" in val) {
            this.profile.language = val.language.join(",");
          }
          if ("role" in val) {
            this.profile.role = val.role;
          }
          if ("work_experience" in val) {
            this.profile.work_experience = val.work_experience;
          }
          if ("programming_language" in val) {
            this.profile.programming_language = val.programming_language;
          }
          if ("framework" in val) {
            this.profile.framework = val.framework;
          }
          if ("application_server" in val) {
            this.profile.application_server = val.application_server.join(",");
          }
          if ("database" in val) {
            this.profile.database = val.database;
          }
          if ("operating_system" in val) {
            this.profile.operating_system = val.operating_system.join(",");
          }
          if ("development_tools" in val) {
            this.profile.development_tools = val.development_tools.join(",");
          }
          this.education_table.items = val.education;
          this.course_table.items = val.courses;
          this.employment_table.items = val.employment;
          this.project_table.items = val.projectexperience;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.is_load_profile = false;
          this.is_load_education = false;
          this.is_load_course = false;
          this.is_load_employment = false;
          this.is_load_project = false;
        });
    },
    updateProfile() {
      this.is_process = true;
      let api =
        process.env.VUE_APP_API_URL + "talent/" + this.account_id + "/profile";
      this.$url
        .post(api, {
          editor: "talent",
          full_name: this.profile.full_name,
          description: this.profile.description,
          place_of_birth: this.profile.place_of_birth,
          date_of_birth: this.profile.date_of_birth,
          religion: this.profile.religion,
          gender: this.profile.gender,
          health: this.profile.health,
          role: this.profile.role,
          work_experience: this.profile.work_experience,
          language: this.profile.language.split(","),
          programming_language: this.profile.programming_language,
          framework: this.profile.framework,
          database: this.profile.database,
          operating_system: this.profile.operating_system.split(","),
          development_tools: this.profile.development_tools.split(","),
          application_server: this.profile.application_server.split(","),
        })
        .then(() => {
          this.$toast.success(`Success! Request successfully updated.`);
        })
        .catch(() => {
          this.$toast.error(`Error! An Error Occured while updating data.`);
        })
        .finally(() => {
          this.is_process = false;
        });
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
    editEducation(id) {
      let val = this.education_table.items.filter((el) => el._id == id);
      this.$refs.edit_education._id = val[0]._id;
      this.$refs.edit_education.education.school = val[0].school;
      this.$refs.edit_education.education.degree = val[0].degree;
      this.$refs.edit_education.education.subject = val[0].subject;
      this.$bvModal.show("edit-education-modal");
    },
    editCourse(id) {
      let val = this.course_table.items.filter((el) => el._id == id);
      this.$refs.edit_course._id = val[0]._id;
      this.$refs.edit_course.course.title = val[0].title;
      this.$refs.edit_course.course.provider = val[0].provider;
      this.$refs.edit_course.course.date = val[0].date;
      this.$refs.edit_course.course.duration = val[0].duration;
      this.$bvModal.show("edit-course-modal");
    },
    editEmployement(id) {
      let val = this.employment_table.items.filter((el) => el._id == id);
      this.$refs.edit_employment._id = val[0]._id;
      this.$refs.edit_employment.employment.company_name = val[0].company_name;
      this.$refs.edit_employment.employment.work_from = val[0].work_from;
      this.$refs.edit_employment.employment.work_until = val[0].work_until;
      this.$refs.edit_employment.employment.role = val[0].role;
      this.$bvModal.show("edit-employment-modal");
    },
    editProject(id) {
      let val = this.project_table.items.filter((el) => el._id == id);
      this.$refs.edit_project._id = val[0]._id;
      this.$refs.edit_project.project.site = val[0].site;
      this.$refs.edit_project.project.name = val[0].name;
      this.$refs.edit_project.project.project_start = val[0].project_start;
      this.$refs.edit_project.project.project_end = val[0].project_end;
      this.$refs.edit_project.project.client = val[0].client;
      this.$refs.edit_project.project.description = val[0].description;
      this.$refs.edit_project.project.app_type = val[0].app_type;
      this.$refs.edit_project.project.dev_language =
        val[0].dev_language.join(",");
      this.$refs.edit_project.project.role = val[0].role;
      this.$refs.edit_project.project.framework = val[0].framework.join(",");
      this.$refs.edit_project.project.dev_tools = val[0].dev_tools.join(",");
      this.$refs.edit_project.project.server_os = val[0].server_os.join(",");
      this.$refs.edit_project.project.database = val[0].database.join(",");
      this.$refs.edit_project.project.app_server = val[0].app_server.join(",");
      this.$refs.edit_project.project.other_info = val[0].other_info;
      this.$bvModal.show("edit-project-modal");
    },
    deleteEducation(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this education",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          let api =
            process.env.VUE_APP_API_URL +
            "talent/" +
            this.account_id +
            "/education/" +
            id;
          this.$url
            .delete(api)
            .then(() => {
              this.getProfile(false, true, false, false, false);
              this.$toast.success(`Success! Education successfully deleted.`);
            })
            .catch(() => {
              this.$toast.error(
                `Error! An Error occured while deleting education.`
              );
            });
        }
      });
    },
    deleteCourse(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this course",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          let api =
            process.env.VUE_APP_API_URL +
            "talent/" +
            this.account_id +
            "/course/" +
            id;
          this.$url
            .delete(api)
            .then(() => {
              this.getProfile(false, false, true, false, false);
              this.$toast.success(`Success! Course successfully deleted.`);
            })
            .catch(() => {
              this.$toast.error(
                `Error! An Error occured while deleting courses.`
              );
            });
        }
      });
    },
    deleteEmployment(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this employment",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          let api =
            process.env.VUE_APP_API_URL +
            "talent/" +
            this.account_id +
            "/employment/" +
            id;
          this.$url
            .delete(api)
            .then(() => {
              this.getProfile(false, false, false, true, false);
              this.$toast.success(`Success! Employment successfully deleted.`);
            })
            .catch(() => {
              this.$toast.error(
                `Error! An Error occured while deleting employment.`
              );
            });
        }
      });
    },
    deleteProject(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this project",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          let api =
            process.env.VUE_APP_API_URL +
            "talent/" +
            this.account_id +
            "/projectexp/" +
            id;
          this.$url
            .delete(api)
            .then(() => {
              this.getProfile(false, false, false, false, true);
              this.$toast.success(`Success! Project successfully deleted.`);
            })
            .catch(() => {
              this.$toast.error(
                `Error! An Error occured while deleting project.`
              );
            });
        }
      });
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