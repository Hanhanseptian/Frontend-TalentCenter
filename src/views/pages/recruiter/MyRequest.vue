<template>
  <div id="extent-contract">
    <!-- search form -->
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
    <div class="row">
      <div
        v-for="item in request_data"
        :key="item.id"
        class="col-md-6 col-sm-12 mb-3"
      >
        <!-- talent card -->
        <on-request-card-component :data="item" />
      </div>
    </div>
  </div>
</template>
<script>
import on_request_card from "../../components/recruiter/on_request_card.vue";
import Swal from "sweetalert2";

export default {
  name: "MyRequest",
  components: {
    "on-request-card-component": on_request_card,
  },
  data() {
    return {
      request_data: [
        {
          id: 1,
          talent_name: "Elon Musk",
          role: "Frontend Developer",
          type: "new_contract",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          status: "waiting",
          reason: "",
        },
        {
          id: 2,
          talent_name: "Elon Musk Junior",
          role: "Backend Developer",
          type: "extend_contract",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          status: "rejected",
          reason: "Talent has been recruited",
        },
        {
          id: 3,
          talent_name: "Ayah Elon Musk",
          role: "Frontend Developer",
          type: "extend_contract",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          status: "waiting",
          reason: "",
        },
        {
          id: 4,
          talent_name: "Kakak Elon Musk",
          role: "Backend Developer",
          type: "new_contract",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          status: "rejected",
          reason: "Talent has been recruited",
        },
        {
          id: 5,
          talent_name: "Keponakan Elon Musk",
          role: "Fullstack Developer",
          type: "extend_contract",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          status: "rejected",
          reason: "Talent has been recruited",
        },
        {
          id: 6,
          talent_name: "Ibu Elon Musk",
          role: "Frontend Developer",
          type: "new_contract",
          start_date: "2023-10-01",
          end_date: "2024-20-01",
          status: "waiting",
          reason: "",
        },
      ],
    };
  },
  methods: {
    cancelRequest() {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to cancel this request",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Cancel it!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Talent has been deleted.", "success");
        }
      });
    },
    deleteRequest() {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this request",
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