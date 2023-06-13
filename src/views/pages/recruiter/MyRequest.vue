<template>
  <div id="extent-contract">
    <!-- LOADER COMPONENT -->
    <loader-component v-if="is_loading" />

    <!-- ITEM PAGE -->
    <div v-else>
      <!-- SEARCH INPUT -->
      <div class="input-group input-group-sm ml-auto mb-3 form-search">
        <span class="input-group-text bg-white">
          <i class="bi bi-search fs-12"></i>
        </span>
        <input
          type="text"
          class="form-control form-talent"
          placeholder="Search..."
        />
      </div>

      <!-- IS EMPTY DATA IMAGE -->
      <center v-if="!request_data || request_data.length == 0">
        <img src="../../../../public/is_empty.png" width="70%" />
      </center>

      <!-- IS NOT EMPTY DATA -->
      <div v-else class="row">
        <div
          v-for="item in request_data"
          :key="item.id"
          class="col-md-6 col-sm-12 mb-3"
        >
          <!-- ON REQUEST CARD COMPONENT -->
          <on-request-card-component :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import on_request_card from "../../components/recruiter/on_request_card.vue";
import loader from "../../components/loader.vue";

export default {
  name: "MyRequest",
  components: {
    "on-request-card-component": on_request_card,
    "loader-component": loader,
  },
  data() {
    return {
      account_id: this.$store.getters.user.user_id,
      is_loading: true,
      request_data: null,
    };
  },
  created() {
    this.getRequest();
  },
  methods: {
    getRequest() {
      this.is_loading = true;
      let api =
        process.env.VUE_APP_API_URL +
        "request/" +
        this.account_id +
        "?status=waiting";
      this.$url
        .get(api)
        .then((res) => {
          this.request_data = res.data;
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