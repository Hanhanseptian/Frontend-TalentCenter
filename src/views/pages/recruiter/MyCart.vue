<template>
  <div id="my-cart">
    <div class="container">
      <b-card>
        <b-card-header>
          <b-card-title class="fs-20">
            <i class="bi bi-cart-fill"></i> My Cart
          </b-card-title>
          <span class="fs-14 text-muted">Show Talent List on Cart</span>
        </b-card-header>
        <loader-component v-if="is_loading" />
        <b-card-body v-else>
          <b-input-group class="form-search ml-auto">
            <b-input-group-text class="bg-white">
              <i class="bi bi-search fs-12"></i>
            </b-input-group-text>
            <b-form-input
              type="text"
              class="form-talent"
              placeholder="Search..."
            />
          </b-input-group>
          <b-form-checkbox
            class="mt-3"
            v-model="is_all_selected"
            @change="selectAll"
            >Select All</b-form-checkbox
          >
          <div class="row mt-2">
            <div
              v-for="item in cart_data"
              :key="item.id"
              class="col-md-6 col-sm-12 mb-4"
            >
              <!-- card container -->
              <on-cart-card-component :data="item" />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <b-button size="sm" class="float-right btn-talent">
                Checkout Request
              </b-button>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>
<script>
import loader from "../../components/loader.vue";
import on_cart_card from "../../components/recruiter/on_cart_card.vue";
import cookie from "js-cookie";

export default {
  name: "MyCart",
  components: {
    "on-cart-card-component": on_cart_card,
    "loader-component": loader,
  },
  data() {
    return {
      account_id: this.$store.getters.user.user_id,
      is_all_selected: false,
      is_loading: true,
      cart_data: [],
      selected_items: [],
    };
  },
  watch: {
    selected_items(newVal, oldVal) {
      if (newVal.length === this.cart_data.length) {
        this.is_all_selected = true;
      } else {
        this.is_all_selected = false;
      }
    },
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.is_loading = true;
      let api = process.env.VUE_APP_API_URL + "cart/" + this.account_id;
      this.$url
        .get(api)
        .then((res) => {
          this.cart_data = res.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.is_loading = false;
        });
    },
    selectAll() {
      if (this.is_all_selected) {
        this.selected_items = this.cart_data;
      } else {
        this.selected_items = [];
      }
    },
  },
};
</script>