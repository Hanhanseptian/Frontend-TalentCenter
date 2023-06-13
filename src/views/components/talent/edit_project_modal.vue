<template>
  <b-modal
    id="edit-project-modal"
    size="lg"
    hide-footer
    @hidden="resetModal"
    no-close-on-backdrop
  >
    <!-- MODAL TITLE -->
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi bi-pencil-square"></i>
        Edit Project Experience
      </span>
    </template>

    <!-- MODAL ITEM -->
    <b-card no-body class="shadow p-2">
      <!-- PROJECT EXPERIENCE FORM -->
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(updateProject)">
          <div class="row">
            <!-- LEFT COLUMN -->
            <div class="col-md-6 col-sm-12">
              <!-- PROJECT NAME -->
              <ValidationProvider rules="required" v-slot="{ errors }">
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
              <!-- PROJECT SITE -->
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
              <!-- PROJECT FROM -->
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
                    v-model="project.project_start"
                  ></b-form-datepicker>
                </div>
              </div>
              <!-- PROJECT UNTIL -->
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
                    v-model="project.project_end"
                  ></b-form-datepicker>
                </div>
              </div>
              <!-- CLIENT -->
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
              <!-- APP TYPE -->
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
              <!-- DEV LANGUAGE -->
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
              <!-- ROLE -->
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

            <!-- RIGHT COLUMN -->
            <div class="col-md-6 col-sm-12">
              <!-- FRAMEWORK -->
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
              <!-- DEV TOOLS -->
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
              <!-- SERVER OS -->
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
              <!-- DATABASE -->
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
              <!-- APP SERVER -->
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
              <!-- DESCRIPTIONS -->
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
                    v-model="project.description"
                  />
                </div>
              </div>
              <!-- OTHER INFO -->
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

          <!-- ACTION BUTTON -->
          <div class="d-flex mt-3">
            <!-- CANCEL BUTTON -->
            <b-button
              size="xs"
              variant="danger"
              class="ml-auto mr-2"
              @click="closeModal"
            >
              <span>Cancel</span>
            </b-button>
            <!-- SAVE BUTTON -->
            <b-button
              size="xs"
              variant="secondary"
              class="btn-talent"
              type="submit"
            >
              Save <b-spinner v-if="is_process" small></b-spinner>
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
      account_id: this.$store.getters.user.user_id,
      _id: "",
      is_process: false,
      project: {
        name: "",
        site: "",
        project_start: "",
        project_end: "",
        client: "",
        description: "",
        app_type: "",
        dev_language: "",
        role: "",
        framework: "",
        dev_tools: "",
        server_os: "",
        database: "",
        app_server: "",
        other_info: "",
      },
    };
  },
  methods: {
    updateProject() {
      this.is_process = true;
      let api =
        process.env.VUE_APP_API_URL +
        "talent/" +
        this.account_id +
        "/projectexp/" +
        this._id;
      this.$url
        .post(api, {
          name: this.project.name,
          site: this.project.site,
          project_start: this.project.project_start,
          project_end: this.project.project_end,
          client: this.project.client,
          description: this.project.description,
          app_type: this.project.app_type,
          dev_language: this.project.dev_language.split(","),
          role: this.project.role,
          framework: this.project.framework.split(","),
          dev_tools: this.project.dev_tools.split(","),
          server_os: this.project.server_os.split(","),
          database: this.project.database.split(","),
          app_server: this.project.app_server.split(","),
          other_info: this.project.other_info,
        })
        .then(() => {
          this.$toast.success(`Success! Project successfully updated.`);
          this.$parent.getProfile(false, false, false, false, true);
        })
        .catch(() => {
          this.$toast.error(`Error! An Error occured while updating project.`);
        })
        .finally(() => {
          this.is_process = false;
          this.closeModal();
        });
    },
    resetModal() {
      this.project = {
        name: "",
        site: "",
        project_start: "",
        project_end: "",
        client: "",
        description: "",
        app_type: "",
        dev_language: "",
        role: "",
        framework: "",
        dev_tools: "",
        server_os: "",
        database: "",
        app_server: "",
        other_info: "",
      };
    },
    closeModal() {
      this.resetModal();
      this.$bvModal.hide("edit-project-modal");
    },
  },
};
</script>
