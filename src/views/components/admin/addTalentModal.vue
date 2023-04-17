<template>
  <b-modal
    id="add-talent"
    size="lg"
    ref="modal"
    title="Submit Your Name"
    @show="resetModal"
    @hidden="resetModal"
    @ok="handleOk"
    ok-title="Save"
  >
    <template #modal-title>
      <i class="bi bi bi-person-fill-add"></i>
      Add New Talent
    </template>
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group label="Name" label-for="name-input" :state="nameState">
            <template #invalid-feedback>
              <i class="bi bi-exclamation-circle"></i>
              Name is required
            </template>
            <b-form-input
              id="name-input"
              v-model="name"
              :state="nameState"
              required
              placeholder="Input Talent Name"
              class="input-talent"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Date of Birth"
            label-for="date-of-birth"
            :state="nameState"
          >
            <template #invalid-feedback>
              <i class="bi bi-exclamation-circle"></i>
              Date of birth is required
            </template>
            <b-form-datepicker
              id="date-of-birth"
              :state="nameState"
              size="lg"
              required
              class="input-talent"
            ></b-form-datepicker>
          </b-form-group>
          <b-form-group
            label="Place of Birth"
            label-for="place-of-birth"
            :state="nameState"
          >
            <template #invalid-feedback>
              <i class="bi bi-exclamation-circle"></i>
              Place of Birth is required
            </template>
            <b-form-input
              id="place-of-birth"
              v-model="name"
              :state="nameState"
              required
              type="email"
              class="input-talent"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            label="Gender"
            label-for="Gender-input"
            :state="nameState"
          >
            <template #invalid-feedback>
              <i class="bi bi-exclamation-circle"></i>
              Gender is required
            </template>
            <b-form-select
              id="Gender-input"
              v-model="name"
              :options="['Male', 'Female']"
              :state="nameState"
              required
              class="input-talent"
            ></b-form-select>
          </b-form-group>
          <b-form-group
            label="Email"
            label-for="Email-input"
            :state="nameState"
          >
            <template #invalid-feedback>
              <i class="bi bi-exclamation-circle"></i>
              Email is required
            </template>
            <b-form-input
              id="Email-input"
              v-model="name"
              :state="nameState"
              required
              class="input-talent"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Company" label-for="company" :state="nameState">
            <template #invalid-feedback>
              <i class="bi bi-exclamation-circle"></i>
              Company is required
            </template>
            <b-form-select
              id="company"
              :options="['PT Jayandra', 'CV Garuda Infinity', 'Padepokan 79']"
              :state="nameState"
              required
              placeholder="Pilih Company"
              class="input-talent"
            ></b-form-select>
          </b-form-group>
        </div>
      </div>
    </form>
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      nameState: null,
      submittedNames: [],
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>