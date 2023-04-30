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
          <b-input-group style="width: 30%" class="ml-auto">
            <b-input-group-text class="bg-white">
              <i class="bi bi-search fs-12"></i>
            </b-input-group-text>
            <b-form-input
              type="text"
              class="form-talent-md"
              placeholder="Search..."
            />
          </b-input-group>
          <b-form-checkbox class="mt-3">Select All</b-form-checkbox>
          <div class="row mt-2">
            <div
              v-for="item in item"
              :key="item.id"
              class="col-md-6 col-sm-12 mb-4"
            >
              <b-card no-body class="shadow-sm border p-3">
                <div class="d-flex">
                  <i class="bi bi-person-circle fs-30"></i>
                  <div class="ml-2">
                    <span class="fs-14">Muhammad Afzaki</span> <br />
                    <div class="fs-12">
                      <i class="bi bi-toggles2"></i>
                      Frontend Developer
                    </div>
                  </div>
                  <b-form-checkbox class="ml-auto" variant=""></b-form-checkbox>
                </div>
                <div class="d-flex align-items-center">
                  <div class="mr-2">
                    <label for="start-date" class="fs-12">Start Date</label>
                    <b-form-datepicker
                      id="start-date"
                      size="sm"
                      class="mb-2"
                    ></b-form-datepicker>
                  </div>
                  <div class="mr-2">
                    <label for="start-date" class="fs-12">End Date</label>
                    <b-form-datepicker
                      id="start-date"
                      size="sm"
                      class="mb-2"
                    ></b-form-datepicker>
                  </div>
                  <div class="mt-4 ml-auto">
                    <b-button size="xs" variant="danger" @click="deleteCart">
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
import Swal from "sweetalert2"

export default {
  name: "MyCart",
  data() {
    return {
      item: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
      ],
    };
  },
  methods: {
    deleteCart() {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this Talent on Cart",
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