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
        <b-badge
          pill
          v-if="data.value == 'Male'"
          style="width: 6rem"
          class="bg-talent"
        >
          <i class="bi bi-gender-male"></i>
          Male
        </b-badge>
        <b-badge pill v-else style="width: 6rem" class="bg-pink">
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
          class="p-1"
        >
          On Job
        </b-badge>
        <b-badge
          v-if="data.value == 'on_request'"
          variant="warning"
          style="width: 100%"
          class="p-1"
        >
          On request
        </b-badge>
        <b-badge
          v-if="data.value == 'available'"
          class="bg-talent text-white p-1"
          style="width: 100%"
        >
          Available
        </b-badge>
      </template>

      <!-- CELL DATE -->
      <template #cell(date)="data">
        <b-badge variant="success" style="width: 6rem" class="p-1">
          {{ data.value }}
        </b-badge>
      </template>

      <!-- CELL WORK FROM -->
      <template #cell(work_from)="data">
        <b-badge variant="success" style="width: 6rem" class="p-1">
          {{ data.value }}
        </b-badge>
      </template>

      <!-- CELL WORK UNTIL -->
      <template #cell(work_until)="data">
        <b-badge variant="warning" style="width: 6rem" class="p-1">
          {{ data.value }}
        </b-badge>
      </template>

      <!-- CELL FROM -->
      <template #cell(from)="data">
        <b-badge variant="success" style="width: 100%" class="p-1">
          {{ data.value }}
        </b-badge>
      </template>

      <!-- CELL TO -->
      <template #cell(to)="data">
        <b-badge variant="warning" style="width: 6rem" class="p-1">
          {{ data.value }}
        </b-badge>
      </template>

      <!-- CELL START DATE -->
      <template #cell(terminate_date)="data">
        <b-badge variant="danger" style="width: 6rem" class="p-1">
          {{ data.value }}
        </b-badge>
      </template>

      <!-- CELL REQUEST TYPE -->
      <template #cell(request_type)="data">
        <b-badge
          v-if="data.value == 'recruite'"
          variant="success"
          style="width: 85%"
          class="p-1"
        >
          Recruite
        </b-badge>
        <b-badge v-else variant="warning" style="width: 85%" class="p-1">
          Extend Contract
        </b-badge>
      </template>

      <!-- CELL ACTION -->
      <template #cell(action)="data">
        <div class="d-flex">
          <button
            v-if="!hide_show"
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

      <!-- CELL ACTION REQUEST -->
      <template #cell(action_hired)>
        <b-button size="sm" variant="outline-info"> View Detail </b-button>
      </template>
    </b-table>

    <div v-if="!no_pagination" class="d-flex align-items-center mt-2 mb-2 mx-3">
      <!-- ROW INFORMATION AND SELECT ROW -->
      <div class="d-flex align-items-center mr-auto fs-12">
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
      <div class="ml-auto mt-1">
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
    hide_show: {
      type: Boolean,
      default() {
        return false;
      },
    },
    no_pagination: {
      type: Boolean,
      default() {
        return false;
      },
    },
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
