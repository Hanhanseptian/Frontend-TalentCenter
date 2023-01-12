<template>
  <b-card class="shadow sticky-top">
    <div class="d-flex">
      <span class="mx-auto text-talent">TALENT CENTER</span>
    </div>
    <div
      style="position: absolute; right: 0; top: 0"
      class="d-flex align-items-center mt-2 mr-2"
    >
      <i class="bi bi-bell h5"></i>
      <b-badge
        variant="warning"
        class="text-white bg-warning"
        style="
          margin-left: -10px;
          margin-top: -20px;
          font-size: 8px;
          margin-right: 1rem;
        "
        >10</b-badge
      >
      <span class="mr-2 text-talent fs-12">Admin</span>
      <i class="bi bi-person-circle h4 mt-1 text-talent"></i>
    </div>
  </b-card>
</template>
<script>
import { BCard, BBadge } from "bootstrap-vue";

export default {
  name: "sidebar",
  components: {
    BCard,
    BBadge,
  },
};
</script>