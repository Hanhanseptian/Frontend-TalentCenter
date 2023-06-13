<template>
  <b-card class="shadow sticky-top">
    <!-- APPS NAME -->
    <div class="d-flex">
      <span class="mx-auto">TALENT CENTER</span>
    </div>
    <!-- USER LOGGED -->
    <div
      style="position: absolute; right: 0; top: 0"
      class="d-flex align-items-center mt-2 mr-2"
    >
      <span class="mr-2 fs-14">Admin</span>
      <i class="bi bi-person-circle fs-30 mt-1 mr-3"></i>
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