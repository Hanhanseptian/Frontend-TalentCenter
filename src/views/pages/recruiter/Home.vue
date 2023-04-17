<template>
  <div id="recruiter-home">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-12 mb-3">
          <b-card class="h-100">
            <b-card-header>
                <b-card-title>Requirements</b-card-title>
            </b-card-header>
            <b-card-body>
              <form action="">
                <!-- usename -->
                <div>
                  <label for="username" class="fs-12">Username</label>
                  <div class="d-flex">
                    <input
                      type="text"
                      id="username"
                      placeholder="Input Username or Email"
                      class="form-control input-talent"
                    />
                    <input type="number" min="0" max="100" class="ml-2 input-persent" v-model="requirements.programming_language.percent"/>
                  </div>
                </div>
                <!-- usename -->
                <div>
                  <label for="Role" class="fs-12">Role</label>
                  <div class="d-flex">
                    <input
                      type="text"
                      id="Role"
                      placeholder="Input Role or Email"
                      class="form-control input-talent"
                    />
                    <input type="number" min="0" :max="maxPercent" class="ml-2 input-persent" v-model="requirements.role.percent"/>
                  </div>
                </div>
                <!-- usename -->
                <div>
                  <label for="Framework" class="fs-12">Framework Skills</label>
                  <div class="d-flex">
                    <input
                      type="text"
                      id="Framework"
                      placeholder="Input Framework or Email"
                      class="form-control input-talent"
                    />
                    <input type="number" min="0" :max="maxPercent" class="ml-2 input-persent" v-model="requirements.framework_skills.percent"/>
                  </div>
                </div>
              </form>
            </b-card-body>
          </b-card>
        </div>

        <div class="col-md-7 col-sm-12 mb-3">
          <b-card class="h-100">
            <b-card-header>
                <b-card-title>Talent with Relevan Requirements</b-card-title>
            </b-card-header>
            <b-card-body>
                <b-card class="shadow mb-3">
                    ini hasilnya
                </b-card>
                <b-card class="shadow mb-3">
                    ini hasilnya
                </b-card>
                <b-card class="shadow mb-3">
                    ini hasilnya
                </b-card>
                <b-card class="shadow mb-3">
                    ini hasilnya
                </b-card>
                <b-card class="shadow mb-3">
                    ini hasilnya
                </b-card>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
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
};
</script>
<style>
.input-persent {
  height: 2.5rem;
  width: 3rem;
  border-radius: 5px;
  border-color: #0173a7;
}
</style>