<template>
  <div id="on-contract">
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

      <!-- IS EMPTY DATA IMAGE  -->
      <center v-if="on_contract_data.length == 0">
        <img src="../../../../public/is_empty.png" width="70%" />
      </center>

      <!-- IS NOT EMPTY DATA -->
      <div v-else class="row">
        <div
          v-for="item in on_contract_data"
          :key="item.id"
          class="col-md-6 col-sm-12 mb-3"
        >
          <!-- ON CONTRACT CARD COMPONENT -->
          <on-contract-card-component :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import on_contract_card from "../../components/recruiter/on_contract_card.vue";
import loader from "../../components/loader.vue";

export default {
  name: "OnContract",
  components: {
    "loader-component": loader,
    "on-contract-card-component": on_contract_card,
  },
  data() {
    return {
      account_id: this.$store.getters.user.user_id,
      is_loading: true,
      on_contract_data: [],
    };
  },
  created() {
    this.getOnContract();
  },
  methods: {
    getOnContract() {
      this.is_loading = true;
      let api =
        process.env.VUE_APP_API_URL + "contract/" + this.account_id + "/on";
      this.$url
        .get(api)
        .then((res) => {
          this.on_contract_data = res.data;
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