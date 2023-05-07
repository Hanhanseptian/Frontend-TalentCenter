<template>
  <div id="on-cart-card">
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
          :value="data.checked"
        ></b-form-checkbox>
      </div>
      <!-- start date -->
      <div class="d-flex align-items-center">
        <div class="mr-2 w-50">
          <label for="start-date" class="fs-12">Start Date</label>
          <b-form-datepicker
            size="sm"
            class="mb-2 form-date-talent"
            v-model="data.start_date"
            :date-format-options="{
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            }"
            locale="en"
            placeholder="Start Date"
          ></b-form-datepicker>
        </div>
        <!-- end date -->
        <div class="w-50">
          <label for="start-date" class="fs-12">End Date</label>
          <b-form-datepicker
            size="sm"
            class="mb-2 form-date-talent"
            v-model="data.end_date"
            :date-format-options="{
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            }"
            locale="en"
            placeholder="End Date"
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
          @click="deleteCart(data.talent_name)"
        >
          <i class="bi bi-trash"></i>
          <small>Delete</small>
        </b-button>
      </div>
    </b-card>
    <detail_talent_modal :id="data.id" />
  </div>
</template>
<script>
import Swal from "sweetalert2";
import detail_talent_modal from "../detailTalentModal.vue";

export default {
  name: "onCartCard",
  components: {
    detail_talent_modal,
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