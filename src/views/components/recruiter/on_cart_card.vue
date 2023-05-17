<template>
  <div id="on-cart-card">
    <!-- card container -->
    <b-card no-body class="shadow-sm border p-3">
      <!-- identity -->
      <div class="d-flex">
        <i class="bi bi-person-circle fs-30"></i>
        <div class="ml-2">
          <span class="fs-14"> {{ data.full_name }} </span> <br />
          <div class="fs-12">
            <i class="bi bi-toggles2"></i>
            {{ data.role }}
          </div>
        </div>
        <b-form-checkbox
          class="ml-auto"
          :value="data.checked"
        ></b-form-checkbox>
      </div>
      <!-- Work From -->
      <div class="d-flex align-items-center">
        <div class="mr-2 w-50">
          <label for="start-date" class="fs-12">Work From</label>
          <b-form-datepicker
            size="sm"
            class="mb-2 form-date-talent"
            v-model="data.work_from"
            :date-format-options="{
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            }"
            locale="en"
            placeholder="Work From"
          ></b-form-datepicker>
        </div>
        <!-- Work Until -->
        <div class="w-50">
          <label for="start-date" class="fs-12">Work Until</label>
          <b-form-datepicker
            size="sm"
            class="mb-2 form-date-talent"
            v-model="data.work_until"
            :date-format-options="{
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            }"
            locale="en"
            placeholder="Work Until"
          ></b-form-datepicker>
        </div>
      </div>
      <!-- delete button -->
      <div class="d-flex align-items-center">
        <b-button
          variant="warning"
          class="btn-xs mr-2 ml-auto d-flex align-items-center"
          @click="viewDetail()"
        >
          <i class="bi bi-info-circle mr-1"></i>
          <span class="fs-12">View Detail</span>
        </b-button>
        <b-button
          size="xs"
          variant="danger"
          class="d-flex align-items-center"
          @click="deleteCart(data.full_name)"
        >
          <i class="bi bi-trash"></i>
          <small>Delete</small>
        </b-button>
      </div>
    </b-card>
    <detail-talent-component :id="data.id" />
  </div>
</template>
<script>
import Swal from "sweetalert2";
import detail_talent_modal from "../detail_talent_modal.vue";

export default {
  name: "on_cart_card",
  components: {
    "detail-talent-component": detail_talent_modal,
  },
  props: {
    data: Object,
  },
  methods: {
    viewDetail() {
      this.$bvModal.show("detail-talent-" + this.data.id.toString());
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
          this.$toast.success("Success! Talent has been deleted.");
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