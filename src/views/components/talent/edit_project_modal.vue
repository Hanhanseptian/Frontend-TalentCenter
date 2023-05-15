<template>
  <b-modal
    id="edit-project-modal"
    size="lg"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi bi-pencil-square"></i>
        Edit Project Experience
      </span>
    </template>
    <b-card no-body class="shadow p-2">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(addToCart)">
          <div class="row">
            <!-- Left Collumn -->
            <div class="col-md-6 col-sm-12">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <!-- Project Name -->
                <div class="mb-2">
                  <label for="project-name" class="fs-12">
                    Project Name <span class="text-danger">*</span>
                  </label>
                  <div class="d-flex">
                    <div class="icon-talent d-flex p-0 form-control mr-1">
                      <i class="bi bi-building-check mx-auto my-auto"></i>
                    </div>
                    <b-form-input
                      type="text"
                      id="project-name"
                      class="input-talent ml-auto"
                      placeholder="Input Project Name"
                      v-model="project.name"
                    />
                  </div>
                </div>
                <span class="text-validation mt-1" v-if="errors[0]">
                  <i class="bi bi-exclamation-circle mr-1"></i> {{ errors[0] }}
                </span>
              </ValidationProvider>
              <!-- Project Site -->
              <div class="mb-2">
                <label for="project-site" class="fs-12"> Project Site </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-geo-alt mx-auto my-auto"></i>
                  </div>
                  <b-form-input
                    type="text"
                    id="project-site"
                    class="input-talent ml-auto"
                    placeholder="Input Project Site"
                    v-model="project.site"
                  />
                </div>
              </div>
              <!-- Project From -->
              <div class="mb-2">
                <label for="project-from" class="fs-12"> Project From </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-calendar mx-auto my-auto"></i>
                  </div>
                  <b-form-datepicker
                    id="project-from"
                    class="mb-2 form-date-talent input-talent"
                    :date-format-options="{
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit',
                    }"
                    locale="en"
                    placeholder="Choose Project Started"
                    v-model="project.from"
                  ></b-form-datepicker>
                </div>
              </div>
              <!-- Project Until -->
              <div class="mb-2">
                <label for="project-until" class="fs-12"> Project Until </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-calendar mx-auto my-auto"></i>
                  </div>
                  <b-form-datepicker
                    id="project-until"
                    class="mb-2 form-date-talent input-talent"
                    :date-format-options="{
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit',
                    }"
                    locale="en"
                    placeholder="Choose Project End"
                    v-model="project.until"
                  ></b-form-datepicker>
                </div>
              </div>
              <!-- Client -->
              <div class="mb-2">
                <label for="client" class="fs-12"> Client </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-person-workspace mx-auto my-auto"></i>
                  </div>
                  <b-form-input
                    type="text"
                    id="client"
                    class="input-talent ml-auto"
                    placeholder="Input Project Client"
                    v-model="project.client"
                  />
                </div>
              </div>
              <!-- App Type -->
              <div class="mb-2">
                <label for="app-type" class="fs-12"> App Type </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-app-indicator mx-auto my-auto"></i>
                  </div>
                  <b-form-input
                    type="text"
                    id="app-type"
                    class="input-talent ml-auto"
                    placeholder="Input Project Application Type"
                    v-model="project.app_type"
                  />
                </div>
              </div>
              <!-- Dev Language -->
              <div class="mb-2">
                <label for="dev-language" class="fs-12"> Dev Language </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-motherboard mx-auto my-auto"></i>
                  </div>
                  <b-form-input
                    type="text"
                    id="dev-language"
                    class="input-talent ml-auto"
                    placeholder="Input Project Development Language"
                    v-model="project.dev_language"
                  />
                </div>
              </div>
              <!-- Role -->
              <div class="mb-2">
                <label for="role" class="fs-12"> Role </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-toggles2 mx-auto my-auto"></i>
                  </div>
                  <b-form-input
                    type="text"
                    id="role"
                    class="input-talent ml-auto"
                    placeholder="Input Your Project Role"
                    v-model="project.role"
                  />
                </div>
              </div>
            </div>

            <!-- Right Collumn -->
            <div class="col-md-6 col-sm-12">
              <!-- Framework -->
              <div class="mb-2">
                <label for="framework" class="fs-12"> Framework </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-pc-display-horizontal mx-auto my-auto"></i>
                  </div>
                  <b-form-input
                    type="text"
                    id="framework"
                    class="input-talent ml-auto"
                    placeholder="Input Project Development Framework"
                    v-model="project.framework"
                  />
                </div>
              </div>
              <!-- Dev Tools -->
              <div class="mb-2">
                <label for="dev-tools" class="fs-12"> Dev Tools </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-gear mx-auto my-auto"></i>
                  </div>
                  <b-form-input
                    type="text"
                    id="dev-tools"
                    class="input-talent ml-auto"
                    placeholder="Input Project Development Tools"
                    v-model="project.dev_tools"
                  />
                </div>
              </div>
              <!-- Server OS -->
              <div class="mb-2">
                <label for="server-os" class="fs-12"> Server OS </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-hdd-stack mx-auto my-auto"></i>
                  </div>
                  <b-form-input
                    type="text"
                    id="server-os"
                    class="input-talent ml-auto"
                    placeholder="Input Project Server OS"
                    v-model="project.server_os"
                  />
                </div>
              </div>
              <!-- Database -->
              <div class="mb-2">
                <label for="database" class="fs-12"> Database </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-database mx-auto my-auto"></i>
                  </div>
                  <b-form-input
                    type="text"
                    id="database"
                    class="input-talent ml-auto"
                    placeholder="Input Project Database"
                    v-model="project.database"
                  />
                </div>
              </div>
              <!-- App Server -->
              <div class="mb-2">
                <label for="app-server" class="fs-12"> App Server </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-hdd-rack mx-auto my-auto"></i>
                  </div>
                  <b-form-input
                    type="text"
                    id="app-server"
                    class="input-talent ml-auto"
                    placeholder="Input Project Application Server"
                    v-model="project.app_server"
                  />
                </div>
              </div>
              <!-- Descriptions -->
              <div class="mb-2">
                <label for="descriptions" class="fs-12"> Descriptions </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-card-heading mx-auto my-auto"></i>
                  </div>
                  <b-form-textarea
                    type="text"
                    id="descriptions"
                    rows="4"
                    class="ml-auto input-area-talent"
                    placeholder="Input Project Descriptions"
                    v-model="project.descriptions"
                  />
                </div>
              </div>
              <!-- Other Info -->
              <div class="mb-2">
                <label for="other-info" class="fs-12"> Other Info </label>
                <div class="d-flex">
                  <div class="icon-talent d-flex p-0 form-control mr-1">
                    <i class="bi bi-info-circle mx-auto my-auto"></i>
                  </div>
                  <b-form-textarea
                    type="text"
                    id="other-info"
                    rows="3"
                    class="ml-auto input-area-talent"
                    placeholder="Input Project Other Information"
                    v-model="project.other_info"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Action Button -->
          <div class="d-flex mt-3">
            <b-button
              size="xs"
              variant="danger"
              class="ml-auto mr-2"
              @click="closeModal"
            >
              <span>Cancel</span>
            </b-button>
            <b-button
              size="xs"
              variant="secondary"
              class="btn-talent"
              type="submit"
            >
              <span>Save</span>
            </b-button>
          </div>
        </form>
      </ValidationObserver>
    </b-card>
  </b-modal>
</template>
<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This Field is Required",
});

export default {
  name: "add_project_modal",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      project: {
        name: "",
        site: "",
        from: "",
        until: "",
        client: "",
        app_type: "",
        dev_language: "",
        role: "",
        framework: "",
        dev_tools: "",
        server_os: "",
        database: "",
        app_server: "",
        descriptions: "",
        other_info: "",
      },
    };
  },
  methods: {
    addToCart() {
      alert("submitted");
      this.closeModal();
    },
    resetModal() {
      this.start_date = null;
      this.end_date = null;
    },
    closeModal() {
      this.resetModal();
      this.$bvModal.hide("add-project-modal");
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
</style>
