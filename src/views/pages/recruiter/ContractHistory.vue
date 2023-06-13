<template>
  <div id="terminate-contract">
    <!-- search form -->
    <loader-component v-if="is_loading" />
    <div v-else>
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
      <div>
        <center v-if="history_data.length == 0">
          <img src="../../../../public/is_empty.png" width="70%" />
        </center>
        <div class="row">
          <div
            v-for="item in history_data"
            :key="item.id"
            class="col-md-6 col-sm-12 mb-3"
          >
            <!-- talent card -->
            <b-card no-body class="shadow-sm border p-3">
              <!-- identity -->
              <div class="d-flex">
                <i class="bi bi-person-circle fs-30"></i>
                <div class="ml-2">
                  <!-- talent name -->
                  <span class="fs-14"> {{ item.full_name }} </span>
                  <!-- type contract -->
                  <span class="fs-12 ml-1">
                    <b-badge
                      style="position: absolute"
                      :variant="item.type == 'discontinue' ? 'info' : 'danger'"
                    >
                      {{
                        item.type == "discontinue"
                          ? "Discontinue"
                          : "Termination"
                      }}
                    </b-badge>
                  </span>
                  <br />
                  <!-- role -->
                  <div class="fs-12">
                    <i class="bi bi-toggles2"></i>
                    {{ item.role }} Developer
                  </div>
                </div>
                <span class="ml-auto">
                  <b-button size="xs" variant="danger" @click="deleteItem">
                    <i class="bi bi-trash mr-1"></i>
                    <small>Delete</small>
                  </b-button>
                </span>
              </div>
              <!-- Work From -->
              <div class="d-flex align-items-center mt-2">
                <div class="mr-2 w-50">
                  <label for="work-from" class="fs-12">Work From</label>
                  <b-form-datepicker
                    id="work-from"
                    size="sm"
                    class="mb-2 form-date-talent"
                    v-model="item.work_from"
                    :date-format-options="{
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit',
                    }"
                    locale="en"
                    disabled
                  ></b-form-datepicker>
                </div>
                <!-- Work Until -->
                <div class="mr-auto w-50">
                  <label for="work-until" class="fs-12">Work Until</label>
                  <b-form-datepicker
                    id="work-until"
                    size="sm"
                    class="mb-2 form-date-talent"
                    v-model="item.work_until"
                    :date-format-options="{
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit',
                    }"
                    locale="en"
                    disabled
                  ></b-form-datepicker>
                </div>
              </div>
              <b-form-group class="mt-2">
                <label class="fs-12">Reason</label>
                <b-form-textarea
                  disabled
                  v-model="item.reason"
                  style="
                    font-size: 10px !important;
                    border-color: #0173a7 !important;
                  "
                  rows="3"
                ></b-form-textarea>
              </b-form-group>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import loader from "../../components/loader.vue";

export default {
  name: "ContractHistory",
  components: {
    "loader-component": loader,
  },
  data() {
    return {
      account_id: this.$store.getters.user.user_id,
      is_loading: true,
      history_data: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.is_loading = true;
      let api =
        process.env.VUE_APP_API_URL + "contract/" + this.account_id + "/off";
      this.$url
        .get(api)
        .then((res) => {
          let talent = [];
          for (let i = 0; i < res.data.length; i++) {
            talent.push(res.data[i].talents[0]);
          }
          this.history_data = talent;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.is_loading = false;
        });
    },
    deleteItem(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this contract history",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.$toast.success("Success! Contract history has been deleted.");
        }
      });
    },
  },
};
</script>