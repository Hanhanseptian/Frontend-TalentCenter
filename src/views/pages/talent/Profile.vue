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
                        <input
                          type="text"
                          id="full-name"
                          placeholder="Input Your Full Name"
                          class="form-control input-talent ml-auto"
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
                      <input
                        type="text"
                        id="application-server"
                        placeholder="Input Your Application Server Skills"
                        class="form-control input-talent ml-auto"
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
                      <input
                        type="text"
                        id="operating-system"
                        placeholder="Input Your Operating System Skills"
                        class="form-control input-talent ml-auto"
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
                      <input
                        type="text"
                        id="development-tools"
                        placeholder="Input Your Development Tool Skills"
                        class="form-control input-talent ml-auto"
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
                      <input
                        type="text"
                        id="place-of-birth"
                        placeholder="Input Your Place of Birth"
                        class="form-control input-talent ml-auto"
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
                      <input
                        type="text"
                        id="health"
                        placeholder="Input Your Health Status"
                        class="form-control input-talent ml-auto"
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
                      <input
                        type="text"
                        id="religion"
                        placeholder="Input Your Religion"
                        class="form-control input-talent ml-auto"
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
                      <input
                        type="text"
                        id="language"
                        placeholder="Input Your Language Skills"
                        class="form-control input-talent ml-auto"
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
              <b-card no-body style="height: 20rem !important">
                <b-card-header>
                  <b-card-title class="fs-20">
                    <div class="row">
                      <div class="col-md-4 col-sm-12 mb-2">Education</div>
                      <div class="col-md-8 col-sm-12">
                        <div class="d-flex align-items-center">
                          <div class="ml-auto">
                            <button
                              class="btn btn-talent text-white shadow btn-sm rounded-talent"
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
                  <b-card-body> TABEL </b-card-body>
                </b-card-header>
              </b-card>
            </div>
            <!-- Course -->
            <div class="col-md-12 mb-4">
              <b-card no-body style="height: 20rem !important">
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
                <b-card-body> TABEL </b-card-body>
              </b-card>
            </div>
            <!-- Employement -->
            <div class="col-md-12 mb-4">
              <b-card no-body style="height: 20rem !important">
                <b-card-header>
                  <b-card-title class="fs-20">
                    <div class="row">
                      <div class="col-md-4 col-sm-12 mb-2">Employement</div>
                      <div class="col-md-8 col-sm-12">
                        <div class="d-flex align-items-center">
                          <div class="ml-auto">
                            <button
                              class="btn btn-talent text-white shadow btn-sm rounded-talent"
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
                <b-card-body> TABEL </b-card-body>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This Field is Required",
});

export default {
  name: "MyProfile",
  components: {
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
    };
  },
  methods: {
    updateProfile() {
      alert("submitted");
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