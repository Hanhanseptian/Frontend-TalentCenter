<template>
  <div id="dashboard">
    <!-- BREADCUMB -->
    <div class="d-flex align-items-center mb-3">
      <span class="fs-22">Dashboard |</span>
      <i class="bi bi-speedometer mx-1 fs-14 mt-1"></i>
      <i class="bi bi-chevron-right fs-14 mt-1"></i>
      <small class="fs-14 mt-1">Dashboard</small>
    </div>

    <!-- TALENT STATISTICS -->
    <b-card>
      <b-card-header>
        <b-card-title>
          <span> Talent Statistics </span>
          <br />
          <span class="text-muted fs-14">
            Showing Statistics of Talent per Status
          </span>
        </b-card-title>
      </b-card-header>
      <loader-component v-if="is_loading" />
      <b-card-body v-else>
        <div class="row">
          <div class="col-4">
            <div class="d-flex align-items-center">
              <div class="icon-container icon-info">
                <i class="bi bi-person-fill-up fs-26 m-auto text-talent"></i>
              </div>
              <span class="ml-2 fs-20">
                {{ talent.available }} <br />
                <small class="fs-14">Talent Available</small>
              </span>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex align-items-center">
              <div class="icon-container icon-warning">
                <i class="bi bi-hourglass-top fs-26 m-auto text-warning"></i>
              </div>
              <span class="ml-2 fs-20">
                {{ talent.on_request }} <br />
                <small class="fs-14">Talent on Request List</small>
              </span>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex align-items-center">
              <div class="icon-container icon-success">
                <i
                  class="bi bi-building-fill-check fs-26 m-auto text-success"
                ></i>
              </div>
              <span class="ml-2 fs-20">
                {{ talent.on_job }} <br />
                <small class="fs-14">Talent on Job</small>
              </span>
            </div>
          </div>
        </div>
      </b-card-body>
    </b-card>

    <!-- TOP 3 PROGRAMMING LANGUAGE -->
    <b-card class="mt-3">
      <b-card-header>
        <b-card-title>
          <span> Top 3 Favourite Programming Language </span>
          <br />
          <span class="text-muted fs-14">
            Showing Top 3 Programming Language Favourite of Recruiter</span
          >
        </b-card-title>
      </b-card-header>
      <loader-component v-if="is_loading" />
      <b-card-body v-else>
        <div
          v-if="top_programming_language.length == 0"
          class="alert alert-warning"
        >
          <i class="bi bi-info-circle-fill"></i> The top 3 Programming Language
          is Not Available.
        </div>
        <div v-else class="row">
          <div
            class="col-4"
            v-for="item in top_programming_language"
            :key="item[0]"
          >
            <div class="d-flex align-items-center icon-info p-3 rounded-talent">
              <div class="img-container icon-warning">
                <img
                  src="../../../assets/img-programming/pemrograman.jpg"
                  class="rounded-talent"
                  width="120"
                />
              </div>
              <span class="ml-2 fs-30">
                {{ item[1] }} <span class="fs-18">Request</span> <br />
                <p class="fs-22">{{ item[0] }}</p>
              </span>
            </div>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
import loader from "../../components/loader.vue";

export default {
  name: "Dashboard",
  components: {
    "loader-component": loader,
  },
  data() {
    return {
      is_loading: false,
      talent: {
        available: 0,
        on_request: 0,
        on_job: 0,
      },
      top_programming_language: [],
    };
  },
  created() {
    this.getFavoriteLanguage();
  },
  methods: {
    getFavoriteLanguage() {
      this.is_loading = true;
      this.$url
        .get("requirement/recap")
        .then((res) => {
          if (res.data.result.talentStatistic.available) {
            this.talent.available = res.data.result.talentStatistic.available;
          }
          if (res.data.result.talentStatistic.waiting) {
            this.talent.on_request = res.data.result.talentStatistic.waiting;
          }
          if (res.data.result.talentStatistic.on_job) {
            this.talent.on_job = res.data.result.talentStatistic.on_job;
          }
          let top_3 = Object.entries(res.data.result.programmingLanguages);
          top_3.sort(function (a, b) {
            return b[1] - a[1];
          });
          this.top_programming_language = top_3.slice(0, 3);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.is_loading = false;
        });
    },
  },
};
</script>
<style scoped>
.icon-container {
  padding: 1rem;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-info {
  background-color: #eff2f4;
}
.icon-warning {
  background-color: #f5f1e1;
}
.icon-success {
  background-color: #e7fbea;
}
</style>
