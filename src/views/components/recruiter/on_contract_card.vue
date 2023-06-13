<template>
  <div id="on-contract-card">
    <b-card no-body class="shadow-sm border p-3">
      <!-- IDENTITY -->
      <div class="d-flex">
        <i class="bi bi-person-circle fs-30"></i>
        <div class="ml-2">
          <!-- FULL NAME -->
          <span class="fs-14"> {{ data.full_name }} </span>
          <!-- CONTRACT TYPE -->
          <span class="fs-12 ml-1">
            <b-badge
              style="position: absolute"
              :variant="data.type == 'new_contract' ? 'success' : 'warning'"
            >
              {{
                data.type == "new_contract" ? "New Contract" : "Extend Contract"
              }}
            </b-badge>
          </span>
          <br />
          <!-- ROLE -->
          <div class="fs-12">
            <i class="bi bi-toggles2"></i>
            {{ data.role }} Developer
          </div>
        </div>
      </div>
      <!-- CONTRACT WORK DATE -->
      <div class="d-flex align-items-center mt-2">
        <!-- WORK FROM -->
        <div class="mr-2 w-50">
          <label for="work-from" class="fs-12">Work From</label>
          <b-form-datepicker
            id="work-from"
            size="sm"
            class="mb-2 form-date-talent"
            v-model="data.work_from"
            :date-format-options="{
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            }"
            locale="en"
            disabled
          ></b-form-datepicker>
        </div>
        <!-- WORK UNTIL -->
        <div class="w-50">
          <label for="work-until" class="fs-12">Work Until</label>
          <b-form-datepicker
            id="work-until"
            size="sm"
            class="mb-2 form-date-talent"
            v-model="data.work_until"
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
    </b-card>
  </div>
</template>
<script>
export default {
  name: "on_contract_card",
  props: {
    data: Object,
  },
};
</script>