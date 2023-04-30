<template>
  <div>
    <b-table
      hover
      responsive
      :per-page="per_page"
      :current-page="current_page"
      :fields="data.fields"
      :items="data.items"
      :filter="data.filter"
      show-empty
    >
      <!-- SHOW EMPTY DATA -->
      <template #empty="scope">
        <center>
          <span class="text-talent">{{ scope.emptyText }}</span>
        </center>
      </template>

      <!-- SHOW EMPTY FILTERED -->
      <template #emptyfiltered="scope">
        <center>
          <span class="text-talent">{{ scope.emptyFilteredText }}</span>
        </center>
      </template>

      <!-- CELL NO -->
      <template #cell(no)="data">
        {{ data.index + 1 }}
      </template>

      <!-- CELL GENDER -->
      <template #cell(gender)="data">
        <b-badge pill v-if="data.value == 'Male'" style="width:90%" class="bg-talent">
          <i class="bi bi-gender-male"></i>
          Male
        </b-badge>
        <b-badge pill v-else style="width:90%" class="bg-pink">
          <i class="bi bi-gender-female"></i>
          Female
        </b-badge>
      </template>

      <!-- CELL STATUS -->
      <template #cell(status)="data">
        <b-badge
          v-if="data.value == 'on_job'"
          variant="success"
          style="width: 100%"
        >
          On Job
        </b-badge>
        <b-badge
          v-if="data.value == 'on_request'"
          variant="warning"
          style="width: 100%"
        >
          On request
        </b-badge>
        <b-badge
          v-if="data.value == 'available'"
          class="bg-talent text-white"
          style="width: 100%"
        >
          Available
        </b-badge>
      </template>

      <!-- CELL START DATE -->
      <template #cell(start_date)>
        <span>01 April 2023</span>
      </template>

      <!-- CELL START DATE -->
      <template #cell(end_date)>
        <span>01 April 2023</span>
      </template>

      <!-- CELL START DATE -->
      <template #cell(terminate_date)>
        <span>01 April 2023</span>
      </template>

      <!-- CELL REQUEST TYPE -->
      <template #cell(request_type)="data">
        <b-badge v-if="data.value=='recruite'" variant="success" style="width:85%">Recruite</b-badge>
        <b-badge v-else variant="warning" style="width:85%">Extend Contract</b-badge>
      </template>

      <!-- CELL ACTION -->
      <template #cell(action)="data">
        <div class="d-flex">
          <button
            class="btn btn-outline-success btn-xs ml-auto"
            v-b-tooltip.hover="{ variant: 'info' }"
            title="Lihat Detail"
            @click="showDetail(data.item.id)"
          >
            <i class="bi bi-eye"></i>
          </button>
          <button
            class="btn btn-outline-info btn-xs mx-1"
            v-b-tooltip.hover="{ variant: 'info' }"
            title="Edit"
            @click="editItem(data.item.id)"
          >
            <i class="bi bi-pencil-square"></i>
          </button>
          <button
            class="btn btn-outline-danger btn-xs mr-auto"
            v-b-tooltip.hover="{ variant: 'info' }"
            title="Delete"
            @click="deleteItem(data.item.id)"
          >
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </template>

      <!-- CELL ACTION REWUEST -->
      <template #cell(action_hired)>
        <b-button size="sm" variant="outline-info">
          View Detail
        </b-button>
      </template>
    </b-table>

    <div class="d-flex align-items-center mt-2 mb-2">
      <!-- ROW INFORMATION AND SELECT ROW -->
      <div class="d-flex align-items-center mr-auto ml-3 fs-12">
        <div>Showing {{ current_page }} to</div>
        <div class="mr-1 ml-1">
          <b-form-select
            v-model="per_page"
            :options="page_options"
            size="sm"
          ></b-form-select>
        </div>
        <div>
          of
          {{ data.items.length }} Entries
        </div>
      </div>

      <!-- PAGINATION -->
      <div class="ml-auto mr-3 mt-1">
        <b-pagination
          v-model="current_page"
          :total-rows="data.items.length"
          :per-page="per_page"
          size="sm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  BTable,
  BFormSelect,
  BAvatar,
  BPagination,
  BButton,
  VBTooltip,
} from "bootstrap-vue";

export default {
  name: "data_table",
  components: {
    BTable,
    BFormSelect,
    BPagination,
    BAvatar,
    BButton,
  },

  props: {
    data: Object,
    deleteItem: Function,
    editItem: Function,
    showDetail: Function,
  },

  data() {
    return {
      per_page: this.data.row,
      page_options: [3, 5, 10],
      current_page: 1,
    };
  },
  directives: {
    "b-tooltip": VBTooltip,
  },
};
</script>
