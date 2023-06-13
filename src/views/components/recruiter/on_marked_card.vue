<template>
  <div id="on-cart-card">
    <b-card no-body class="shadow-sm border p-3">
      <!-- IDENTITY -->
      <div class="d-flex">
        <i class="bi bi-person-circle fs-30"></i>
        <div class="ml-2">
          <!-- FULL NAME -->
          <span class="fs-14"> {{ data.full_name }} </span> <br />
          <!-- ROLE -->
          <div class="fs-12">
            <i class="bi bi-toggles2"></i>
            {{ data.role }}
          </div>
        </div>
      </div>

      <!-- MARKED WORK DATE -->
      <div class="d-flex align-items-center">
        <!-- WORK FROM -->
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
        <!-- WORK UNTIL -->
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

      <!-- ACTION BUTTON -->
      <div class="d-flex align-items-center">
        <!-- VIEW DETAIL BUTTON -->
        <b-button
          variant="warning"
          class="btn-xs mr-2 ml-auto d-flex align-items-center"
          @click="viewDetail()"
        >
          <i class="bi bi-info-circle mr-1"></i>
          <span class="fs-12">View Detail</span>
        </b-button>
        <!-- DELETE BUTTON -->
        <b-button
          size="xs"
          variant="danger"
          class="d-flex align-items-center"
          @click="deleteMarkedTalent(data.full_name)"
        >
          <i class="bi bi-trash"></i>
          <small>Delete</small>
        </b-button>
      </div>
    </b-card>

    <!-- DETAIL TALENT MODAL COMPONENT -->
    <detail-talent-component :id="data.id_talent" ref="detail_talent" />
  </div>
</template>
<script>
import Swal from "sweetalert2";
import detail_talent_modal from "../detail_talent_modal.vue";

export default {
  name: "on_marked_card",
  components: {
    "detail-talent-component": detail_talent_modal,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      account_id: this.$store.getters.user.user_id,
    };
  },
  methods: {
    viewDetail() {
      this.$refs.detail_talent.getDetailTalent(this.data.id_talent);
      this.$bvModal.show("detail-talent-" + this.data.id_talent);
    },
    deleteMarkedTalent(name) {
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
          let api =
            process.env.VUE_APP_API_URL + "cart/" + this.account_id + "/delete";
          this.$url
            .post(api, {
              talents: [
                {
                  talent_id: this.data.id_talent,
                },
              ],
            })
            .then(() => {
              this.$toast.success("Success! Request has been deleted.");
              this.$parent.getCart();
            })
            .catch(() => {
              this.$toast.error("Error! An Error occured while deleting data.");
            });
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