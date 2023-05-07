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
        <b-card-body>
          <b-input-group class="form-search ml-auto">
            <b-input-group-text class="bg-white">
              <i class="bi bi-search fs-12"></i>
            </b-input-group-text>
            <b-form-input
              type="text"
              class="form-talent-md"
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
              <on_cart_card :data="item" />
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
import on_cart_card from "../../components/recruiter/onCartCard.vue";

export default {
  name: "MyCart",
  components: {
    on_cart_card,
  },
  data() {
    return {
      is_all_selected: false,
      cart_data: [
        {
          id: 1,
          talent_name: "Elon Musk",
          role: "Frontend Developer",
          start_date: "2023-10-01",
          end_date: "2024-10-01",
          checked: false,
        },
        {
          id: 2,
          talent_name: "Elon Musk Junior",
          role: "Backend Developer",
          start_date: "2023-10-01",
          end_date: "2024-10-01",
          checked: false,
        },
        {
          id: 3,
          talent_name: "Ayah Elon Musk",
          role: "Frontend Developer",
          start_date: "2023-11-01",
          end_date: "2024-08-01",
          checked: false,
        },
        {
          id: 4,
          talent_name: "Kakak Elon Musk",
          role: "Backend Developer",
          start_date: "2023-09-01",
          end_date: "2024-10-01",
          checked: false,
        },
        {
          id: 5,
          talent_name: "Keponakan Elon Musk",
          role: "Fullstack Developer",
          start_date: "2023-12-01",
          end_date: "2024-12-01",
          checked: false,
        },
        {
          id: 6,
          talent_name: "Ibu Elon Musk",
          role: "Frontend Developer",
          start_date: "2023-11-01",
          end_date: "2024-11-01",
          checked: false,
        },
      ],
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
  methods: {
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