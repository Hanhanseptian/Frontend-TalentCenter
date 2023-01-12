<template>
  <div>
    <b-table
      hover
      responsive
      small
      :per-page="per_page"
      :current-page="current_page"
      :fields="data.fields"
      :items="data.items"
      :filter="data.filter"
      sticky-header="700px"
      show-empty
    >
      <!-- SHOW EMPTY DATA -->
      <template #empty="scope">
        <center>
          <div class="fs-12 text-talent">{{ scope.emptyText }}</div>
        </center>
      </template>

      <!-- SHOW EMPTY FILTERED -->
      <template #emptyfiltered="scope">
        <center>
          <div class="fs-12 text-talent">{{ scope.emptyFilteredText }}</div>
        </center>
      </template>

      <!-- CELL NO -->
      <template #cell(no)="data">
        {{ data.index + 1 }}
      </template>

      <!-- CELL CONTACT -->
      <template #cell(contact)>
        <i
          class="bi bi-telegram"
          style="color: #00acee !important; font-size: 20px"
        ></i>
      </template>

      <!-- CELL STATUS -->
      <template #cell(status)="data">
        <div v-if="data.value == 'on_job'" class="badge badge-success px-2">
          On Job
        </div>
        <div v-if="data.value == 'waiting'" class="badge bgtl-warning px-2">
          Waiting Approve
        </div>
        <div
          v-if="data.value == 'free'"
          class="badge bg-talent text-white px-2"
        >
          Free
        </div>
      </template>

      <!-- CELL PASSWORD -->
      <template #cell(password)>
        <span>12h68902hjKASA</span>
      </template>

      <!-- CELL ACTION -->
      <template #cell(action)>
        <div class="d-flex">
          <button
            class="btn btn-outline-success btn-xs ml-auto"
            v-b-tooltip.hover="{ variant: 'info' }"
            title="Lihat Detail"
          >
            <i class="bi bi-eye"></i>
          </button>
          <button
            class="btn btn-outline-info btn-xs mx-1"
            v-b-tooltip.hover="{ variant: 'info' }"
            title="Edit"
          >
            <i class="bi bi-pencil-square"></i>
          </button>
          <button
            class="btn btn-outline-danger btn-xs mr-auto"
            v-b-tooltip.hover="{ variant: 'info' }"
            title="Delete"
          >
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </template>

      <!-- CELL ACTION WAITING -->
      <template #cell(action_hired)>
        <div class="d-flex">
          <button class="badge btn-success btn-sm btn ml-auto mr-1 px-2 py-1">
            <span class="fs-10">Approve</span>
          </button>
          <button class="badge btn-danger btn-sm btn mr-auto px-3 py-1">
            <span class="fs-10">Reject</span>
          </button>
        </div>
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
