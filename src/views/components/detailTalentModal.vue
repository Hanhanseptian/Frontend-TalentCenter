<template>
  <b-modal
    :id="'detail-talent-' + id.toString()"
    size="md"
    hide-footer
    no-close-on-backdrop
  >
    <template #modal-title>
      <span class="fs-18">
        <i class="bi bi bi-info-circle"></i>
        Talent Detail
      </span>
    </template>
    <b-card no-body class="shadow p-2">
      Detail dari Talent
    </b-card>
  </b-modal>
</template>
<script>
export default {
  name: "detailTalentModal",
  props: {
    id: Number,
  },
  methods: {
    closeModal() {
      this.$bvModal.hide("detail-talent-" + this.id.toString());
    },
  },
};
</script>
<style scoped>
.date-talent {
  border-radius: 7px !important;
  border-color: #0173a7 !important;
  /* font-size: 16px !important; */
  height: 2.5rem !important;
  background-color: #eff2f4;
}
.date-talent:focus {
  box-shadow: 2px 2px 2px #0173a7 !important;
  border-color: none !important;
}
</style>