<template>
  <div id="request-list">
    <!-- BREADCUMB -->
    <div class="d-flex align-items-center mb-3">
      <span class="fs-22">Manage Talents |</span>
      <i class="bi bi-clipboard-check-fill mx-1 fs-14 mt-1"></i>
      <i class="bi bi-chevron-right fs-14 mt-1"></i>
      <small class="fs-14 mt-1">
        <router-link
          to="request-list"
          class="text-decoration-none text-dark link"
          >Request List</router-link
        >
        <i class="bi bi-chevron-right fs-14 mt-1"></i>
        Detail Request List
      </small>
    </div>

    <!-- MAIN CONTENT -->
    <b-card no-body>
      <b-card-header class="d-flex align-items-center pt-4">
        <!-- CARD TITLE -->
        <b-card-title>
          <span>
            <i class="bi bi-info-circle-fill"></i> Detail Request List
          </span>
          <br />
          <span class="text-muted fs-14"> Showing Detail of Request List </span>
        </b-card-title>
      </b-card-header>

      <!-- LOADER COMPONENT -->
      <loader-component v-if="is_loading" class="mb-5" />

      <!-- CARD ITEM -->
      <div v-else class="row px-4 mb-3">
        <!-- RECRUITER INFORMATION -->
        <div class="col-md-5">
          <b-card no-body class="shadow p-3 h-100">
            <span>Recruiter Information</span>
            <div class="fs-12 mt-3">
              <!-- PIC NAME -->
              <div>
                <span>PIC Name :</span>
                <div class="d-flex">
                  <div
                    class="mb-3 d-flex border shadow-sm rounded-lg mr-2"
                    style="width: 2.5rem"
                  >
                    <i
                      class="bi bi-person-lines-fill mx-auto my-auto fs-18 my-auto"
                    ></i>
                  </div>
                  <div class="mb-3 border shadow-sm p-2 rounded-lg w-100">
                    {{ recruiter.full_name }}
                  </div>
                </div>
              </div>
              <!-- COMPANY NAME -->
              <div>
                <span>Company Name :</span>
                <div class="d-flex">
                  <div
                    class="mb-3 d-flex border shadow-sm rounded-lg mr-2"
                    style="width: 2.5rem"
                  >
                    <i
                      class="bi bi-building-fill mx-auto my-auto fs-18 my-auto"
                    ></i>
                  </div>
                  <div class="mb-3 border shadow-sm p-2 rounded-lg w-100">
                    {{ recruiter.company_name }}
                  </div>
                </div>
              </div>
              <!-- COMPANY ADDRESS -->
              <div>
                <span>Company Address :</span>
                <div class="d-flex">
                  <div
                    class="mb-3 d-flex border shadow-sm rounded-lg mr-2"
                    style="width: 2.5rem"
                  >
                    <i
                      class="bi bi-geo-alt-fill mx-auto my-auto fs-18 my-auto"
                    ></i>
                  </div>
                  <div class="mb-3 border shadow-sm p-2 rounded-lg w-100">
                    {{ recruiter.company_address }}
                  </div>
                </div>
              </div>
              <!-- COMPANY SUBJECT -->
              <div>
                <span>Company Subject :</span>
                <div class="d-flex">
                  <div
                    class="mb-3 d-flex border shadow-sm rounded-lg mr-2"
                    style="width: 2.5rem"
                  >
                    <i
                      class="bi bi-info-circle-fill mx-auto my-auto fs-18 my-auto"
                    ></i>
                  </div>
                  <div class="mb-3 border shadow-sm p-2 rounded-lg w-100">
                    {{ recruiter.company_subject }}
                  </div>
                </div>
              </div>
              <!-- EMAIL -->
              <div>
                <span>Email :</span>
                <div class="d-flex">
                  <div
                    class="mb-3 d-flex border shadow-sm rounded-lg mr-2"
                    style="width: 2.5rem"
                  >
                    <i
                      class="bi bi-envelope-at-fill mx-auto my-auto fs-18 my-auto"
                    ></i>
                  </div>
                  <div class="mb-3 border shadow-sm p-2 rounded-lg w-100">
                    {{ recruiter.email }}
                  </div>
                </div>
              </div>
              <!-- PHONE NUMBER -->
              <div>
                <span>Phone Number :</span>
                <div class="d-flex">
                  <div
                    class="mb-3 d-flex border shadow-sm rounded-lg mr-2"
                    style="width: 2.5rem"
                  >
                    <i
                      class="bi bi-telephone-fill mx-auto my-auto fs-18 my-auto"
                    ></i>
                  </div>
                  <div class="mb-3 border shadow-sm p-2 rounded-lg w-100">
                    {{ recruiter.phone_number }}
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </div>

        <!-- TALENT INFORMATION -->
        <div class="col-md-7">
          <b-card no-body class="shadow p-3 h-100">
            <span class="mb-3"> Talent Information </span>
            <div class="scroller">
              <!-- LIST CARD COMPONENT -->
              <div v-for="item in request_data" :key="item.id" class="mb-4">
                <request-card :data="item" />
              </div>
              <!-- ACTION BUTTON -->
              <div class="d-flex align-items-center">
                <!-- REJECT ALL BUTTON -->
                <b-button
                  size="xs"
                  variant="danger"
                  class="ml-auto mr-2"
                  @click="rejectRequest"
                >
                  <i class="bi bi-x-circle"></i>
                  Reject All
                </b-button>
                <!-- APPROVE ALL BUTTON -->
                <b-button
                  size="xs"
                  variant="info"
                  class="btn-talent"
                  @click="approveRequest"
                >
                  <i class="bi bi-check-circle"></i>
                  Approve All
                </b-button>
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </b-card>
    <!-- REJECTION MODAL COMPONENT -->
    <rejection-component
      :id="'reject-all'"
      :data="reject_data"
      :is_all="true"
    />
  </div>
</template>
<script>
import Swal from "sweetalert2";
import request_list_card from "../../components/bizdev/request_list_card.vue";
import rejection_modal from "../../components/bizdev/rejection_modal.vue";
import loader from "../../components/loader.vue";

export default {
  name: "DetailRequestList",
  components: {
    "request-card": request_list_card,
    "rejection-component": rejection_modal,
    "loader-component": loader,
  },
  data() {
    return {
      is_loading: true,
      recruiter: null,
      request_data: null,
      reject_data: [],
    };
  },
  created() {
    this.getDetailRequest();
  },
  methods: {
    getDetailRequest() {
      this.is_loading = true;
      let api =
        process.env.VUE_APP_API_URL +
        "bizdev/request/" +
        atob(this.$route.query.id) +
        "/talent";
      this.$url
        .get(api)
        .then((res) => {
          this.recruiter = res.data.result.recruiter;
          this.request_data = res.data.result.talent;
          if (this.request_data.length == 0) {
            this.$router.push("/bizdev/request-list");
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.is_loading = false;
        });
    },
    approveRequest() {
      let list_id = [];
      for (let i = 0; i < this.request_data.length; i++) {
        let temp = {
          talent_id: this.request_data[i].talent_id,
        };
        list_id.push(temp);
      }
      Swal.fire({
        title: "Are you sure?",
        text: `You want to approve this request`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Approve it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          let api =
            process.env.VUE_APP_API_URL +
            "bizdev/request/" +
            atob(this.$route.query.id) +
            "/approve";
          this.$url
            .post(api, {
              talents: list_id,
            })
            .then(() => {
              this.$toast.success("Success! Request has been approved.");
              this.getDetailRequest();
            })
            .catch(() => {
              this.$toast.error("Error! An Error while approved this request.");
            });
        }
      });
    },
    rejectRequest() {
      let reject_list = [];
      for (let i = 0; i < this.request_data.length; i++) {
        let temp = {
          talent_id: this.request_data[i].talent_id,
          reason: null,
        };
        reject_list.push(temp);
      }
      this.reject_data = reject_list;
      this.$bvModal.show("rejection-modal-reject-all");
    },
  },
};
</script>
<style scoped>
.scroller {
  max-height: 50vh;
  overflow: auto;
  padding-right: 0.5rem;
}
.scroller::-webkit-scrollbar {
  width: 10px;
}
.scroller::-webkit-scrollbar-thumb {
  background-color: #cdd0d1;
  border-radius: 10px;
}

.scroller::-webkit-scrollbar-track {
  background-color: #f8fafa;
  border-radius: 10px;
}
.scroller::-webkit-scrollbar-corner {
  background-color: #d3eeff;
}
</style>
