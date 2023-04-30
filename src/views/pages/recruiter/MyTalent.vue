<template>
  <div id="recruiter-home">
    <div class="container">
      <b-card>
        <b-card-header>
          <b-card-title>
            <i class="bi bi-people-fill mr-1"></i> My Talent
          </b-card-title>
          <span>Showing History of Recruited Talents</span>
        </b-card-header>
        <b-card-body>
          <div class="btn-group mb-3">
            <div
              class="btn btn-sm"
              :class="is_my_request ? 'btn-talent' : 'btn-outline-talent'"
              @click="changePage('my_request')"
            >
              My Request
            </div>
            <div
              class="btn btn-sm"
              :class="is_on_contract ? 'btn-talent' : 'btn-outline-talent'"
              @click="changePage('on_contract')"
            >
              On Contract
            </div>
            <div
              class="btn btn-sm"
              :class="
                is_terminate_contract ? 'btn-talent' : 'btn-outline-talent'
              "
              @click="changePage('terminate_contract')"
            >
              Terminate Contract
            </div>
          </div>
          <MyRequest v-if="is_my_request" />
          <OnContract v-else-if="is_on_contract" />
          <TerminateContract v-else-if="is_terminate_contract" />
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>
<script>
import OnContract from "./OnContract.vue";
import MyRequest from "./MyRequest.vue";
import TerminateContract from "./TerminateContract.vue";

export default {
  name: "MyTalent",
  components: {
    OnContract,
    MyRequest,
    TerminateContract,
  },
  data() {
    return {
      is_my_request: true,
      is_on_contract: false,
      is_terminate_contract: false,
    };
  },
  methods: {
    changePage(page) {
      if (page == "my_request") {
        this.is_my_request = true;
        this.is_on_contract = false;
        this.is_terminate_contract = false;
      } else if (page == "on_contract") {
        this.is_my_request = false;
        this.is_on_contract = true;
        this.is_terminate_contract = false;
      } else {
        this.is_my_request = false;
        this.is_on_contract = false;
        this.is_terminate_contract = true;
      }
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .btn-sm {
    font-size: 10px;
  }
}
</style>