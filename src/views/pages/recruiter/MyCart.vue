<template>
  <div id="my-cart">
    <div class="container">
      <b-card>
        <b-card-header>
          <b-card-title>
            <i class="bi bi-cart-fill mr-1"></i> My Cart
          </b-card-title>
          <span>Show Talent to Recruite</span>
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
              v-for="(item, index) in cart_data"
              :key="item.id"
              class="col-md-6 col-sm-12 mb-4"
            >
              <!-- card container -->
              <b-card no-body class="shadow-sm border p-3">
                <!-- identity -->
                <div class="d-flex">
                  <i class="bi bi-person-circle fs-30"></i>
                  <div class="ml-2">
                    <span class="fs-14">Muhammad Afzaki</span> <br />
                    <div class="fs-12">
                      <i class="bi bi-toggles2"></i>
                      Frontend Developer
                    </div>
                  </div>
                  <b-form-checkbox
                    class="ml-auto"
                    :id="`item-${index}`"
                    :value="item.checked"
                    v-model="selected_items"
                  ></b-form-checkbox>
                </div>
                <!-- start date -->
                <div class="d-flex align-items-center">
                  <div class="mr-2">
                    <label for="start-date" class="fs-12">Start Date</label>
                    <b-form-datepicker
                      size="sm"
                      class="mb-2 form-date-talent"
                      v-model="item.start_date"
                      placeholder="Start Date"
                    ></b-form-datepicker>
                  </div>
                  <!-- end date -->
                  <div class="mr-2">
                    <label for="start-date" class="fs-12">End Date</label>
                    <b-form-datepicker
                      size="sm"
                      class="mb-2 form-date-talent"
                      v-model="item.end_date"
                      placeholder="End Date"
                    ></b-form-datepicker>
                  </div>
                  <!-- delete button -->
                  <div class="mt-4 ml-auto">
                    <b-button
                      size="xs"
                      variant="danger"
                      @click="deleteCart(item.talent_name)"
                    >
                      <i class="bi bi-trash fs-12"></i>
                      <small>Delete</small>
                    </b-button>
                  </div>
                </div>
              </b-card>
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
import Swal from "sweetalert2";

export default {
  name: "MyCart",
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
    deleteCart(name) {
      Swal.fire({
        title: "Are you sure?",
        text: `You want to delete ${name} from Cart`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Talent has been deleted.", "success");
        }
      });
    },
  },
};
</script>
<style>
.item-container {
  overflow: auto;
}
</style>