<template>
  <div id="extent-contract">
    <div class="input-group input-group-sm ml-auto mb-3" style="width: 30%">
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
      <div v-for="i in item" :key="i.id" class="col-md-6 col-sm-12 mb-3">
        <b-card no-body class="shadow-sm border p-3">
          <div class="d-flex">
            <i class="bi bi-person-circle fs-30"></i>
            <div class="ml-2">
              <span class="fs-14"> Muhammad Afzaki </span>
              <span class="fs-12 ml-1">
                <b-badge
                  style="position: absolute"
                  :variant="i.id == 2 || i.id == 4 ? 'warning' : 'success'"
                >
                  {{ i.id == 2 || i.id == 4 ? "Extend" : "New Contract" }}
                </b-badge>
              </span>
              <br />
              <div class="fs-12">
                <i class="bi bi-toggles2"></i>
                Frontend Developer
              </div>
            </div>

            <span
              v-if="i.id == 3 || i.id == 5"
              class="text-danger ml-auto fs-14"
            >
              Rejected
            </span>
            <span v-else class="text-talent ml-auto fs-14"> Waiting </span>
          </div>
          <div class="d-flex align-items-center">
            <div class="mr-2">
              <label for="start-date" class="fs-12">Start Date</label>
              <b-form-datepicker
                id="start-date"
                size="sm"
                class="mb-2"
                disabled
              ></b-form-datepicker>
            </div>
            <div class="mr-2">
              <label for="start-date" class="fs-12">End Date</label>
              <b-form-datepicker
                id="start-date"
                size="sm"
                class="mb-2"
                disabled
              ></b-form-datepicker>
            </div>
            <div class="mt-4 ml-auto">
              <b-button size="xs" variant="danger" @click="cancelRequest">
                <small>Cancel</small>
              </b-button>
            </div>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2"

export default {
  name: "MyRequest",
  data() {
    return {
      item: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
      ],
    };
  },
  methods:{
    cancelRequest(){
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
    }
  }
};
</script>