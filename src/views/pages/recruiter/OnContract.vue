<template>
  <div id="on-contract">
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
        v-for="item in on_contract_data"
        :key="item.id"
        class="col-md-6 col-sm-12 mb-3"
      >
        <on-contract-card :data="item" />
      </div>
    </div>
  </div>
</template>
<script>
import onContractCardVue from "../../components/recruiter/onContractCard.vue";

export default {
  name: "OnContract",
  components: {
    "on-contract-card": onContractCardVue,
  },
  data() {
    return {
      on_contract_data: [
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
};
</script>