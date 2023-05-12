<template>
  <b-card class="shadow sticky-top">
    <div class="d-flex">
      <span class="mx-auto text-talent">TALENT CENTER</span>
    </div>
    <div
      style="position: absolute; right: 0; top: 0"
      class="d-flex align-items-center mt-2 mr-2"
    >
      <span class="mr-2 text-talent fs-14">Admin</span>
      <i class="bi bi-person-circle fs-30 mt-1 text-talent mr-3"></i>
    </div>
  </b-card>
</template>
<script>
import { BCard, BBadge } from "bootstrap-vue";

export default {
  name: "header_admin",
  components: {
    BCard,
    BBadge,
  },
};
</script>