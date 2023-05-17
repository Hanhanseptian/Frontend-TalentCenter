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
      <b-card-header>
        <b-card-title class="d-flex align-items-center">
          Detail Request List
        </b-card-title>
        <span class="text-muted">Showing Detail of Request List</span>
      </b-card-header>
      <div class="row p-2">
        <!-- Recruiter Information -->
        <div class="col-md-5">
          <b-card no-body class="shadow p-3 h-100">
            <span>Recruiter Information</span>
            <div class="fs-12 mt-3">
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
                  Hanhan Septian
                </div>
              </div>
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
                  PT Len Indonesia
                </div>
              </div>
              <span>Company Address :</span>
              <div class="d-flex">
                <div
                  class="mb-3 d-flex border shadow-sm rounded-lg mr-2"
                  style="width: 2.5rem"
                >
                  <i class="bi bi-geo-alt mx-auto my-auto fs-18 my-auto"></i>
                </div>
                <div class="mb-3 border shadow-sm p-2 rounded-lg w-100">
                  Jl Indonesia Indah Blok M
                </div>
              </div>
              <span>Company Subject :</span>
              <div class="d-flex">
                <div
                  class="mb-3 d-flex border shadow-sm rounded-lg mr-2"
                  style="width: 2.5rem"
                >
                  <i
                    class="bi bi-info-circle mx-auto my-auto fs-18 my-auto"
                  ></i>
                </div>
                <div class="mb-3 border shadow-sm p-2 rounded-lg w-100">
                  Teknologi Informasi
                </div>
              </div>
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
                  ptlenindonesia@gmail.com
                </div>
              </div>
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
                  082938293849
                </div>
              </div>
            </div>
          </b-card>
        </div>
        <!-- Talent Information -->
        <div class="col-md-7">
          <b-card no-body class="shadow p-3 h-100">
            <span class="mb-3"> Talent Information </span>
            <div class="scroller">
              <div v-for="item in request_data" :key="item.id" class="mb-4">
                <!-- card container -->
                <request-card :data="item" />
              </div>
              <div class="d-flex align-items-center">
                <b-button
                  size="sm"
                  variant="danger"
                  class="ml-auto mr-2"
                  @click="rejectAll"
                >
                  <i class="bi bi-x-circle"></i>
                  Reject All
                </b-button>
                <b-button
                  size="sm"
                  variant="info"
                  class="btn-talent"
                  @click="approveAll"
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
  </div>
</template>
<script>
import Swal from "sweetalert2";
import request_list_card from "../../components/bizdev/request_list_card.vue";

export default {
  name: "DetailRequestList",
  components: {
    "request-card": request_list_card,
  },
  data() {
    return {
      request_data: [
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
    };
  },
  methods: {
    approveAll() {
      Swal.fire({
        title: "Are you sure?",
        text: `You want to approve this all request`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Approve it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.$toast.success("Success! Request has been approved.");
        }
      });
    },
    rejectAll() {
      Swal.fire({
        title: "Are you sure?",
        text: `You want to reject this all request`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Reject it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.$toast.success("Success! Request has been rejected.");
        }
      });
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
