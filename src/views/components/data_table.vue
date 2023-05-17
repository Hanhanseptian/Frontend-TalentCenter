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
          <span>{{ scope.emptyText }}</span>
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
        <div
          v-if="data.value == 'on_job'"
          class="p-1 shadow rounded-lg fs-12 border border-success text-success"
        >
          On Job
        </div>
        <div
          v-if="data.value == 'not_available'"
          class="p-1 shadow rounded-lg fs-12 border border-warning text-warning"
        >
          Not Available
        </div>
        <div
          v-if="data.value == 'available'"
          class="p-1 shadow rounded-lg fs-12 border border-info text-talent"
        >
          Available
        </div>
      </template>

      <!-- CELL WORK FROM -->
      <template #cell(work_from)="data">
        <center>
          <div
            class="p-1 shadow rounded-lg border border-success text-success"
            :class="is_detail ? 'fs-10' : ' fs-12'"
            style="width: 10rem"
          >
            {{ parseDate(data.value) }}
          </div>
        </center>
      </template>

      <!-- CELL WORK UNTIL -->
      <template #cell(work_until)="data">
        <center>
          <div
            class="p-1 shadow rounded-lg border border-danger text-danger"
            :class="is_detail ? 'fs-10' : ' fs-12'"
            style="width: 10rem"
          >
            {{ parseDate(data.value) }}
          </div>
        </center>
      </template>

      <!-- CELL TYPE -->
      <template #cell(type)="data">
        <div
          v-if="data.value == 'discontinue'"
          class="p-1 shadow rounded-lg border border-info text-talent fs-12"
        >
          Discontinue
        </div>
        <div
          v-else
          class="p-1 shadow rounded-lg border border-danger text-danger fs-12"
        >
          Terminating
        </div>
      </template>

      <!-- CELL EMAIL -->
      <template #cell(email)="data">
        <div
          class="p-1 shadow rounded-lg border border-info fs-12"
          style="word-break: break-all"
        >
          <i class="bi bi-envelope-at-fill"></i>
          {{ data.value }}
        </div>
      </template>

      <!-- CELL PHONE NUMBER -->
      <template #cell(phone_number)="data">
        <div class="p-1 shadow rounded-lg border border-info fs-12">
          <i class="bi bi-telephone-fill"></i>
          {{ data.value }}
        </div>
      </template>

      <!-- CELL PROJECT START -->
      <template #cell(project_start)="data">
        <center>
          <div
            class="p-1 shadow rounded-lg border border-success text-success fs-10"
            style="width: 8rem"
          >
            {{ parseDate(data.value) }}
          </div>
        </center>
      </template>

      <!-- CELL PROJECT END -->
      <template #cell(project_end)="data">
        <center>
          <div
            class="p-1 shadow rounded-lg border border-danger text-danger fs-10"
            style="width: 8rem"
          >
            {{ parseDate(data.value) }}
          </div>
        </center>
      </template>

      <!-- CELL DATE -->
      <template #cell(date)="data">
        <center>
          <div
            class="p-1 shadow rounded-lg border border-success text-success fs-10"
            style="width: 8rem"
          >
            {{ parseDate(data.value) }}
          </div>
        </center>
      </template>

      <!-- CELL DEV LANGUAGE -->
      <template #cell(dev_language)="data">
        <div style="width: 10rem" class="d-flex align-items-center">
          <div
            v-for="item in data.value"
            :key="item"
            class="p-1 shadow rounded-lg border border-info text-talent fs-10 mb-1 mr-1"
          >
            {{ item }}
          </div>
        </div>
      </template>

      <!-- CELL FRAMEWORK -->
      <template #cell(framework)="data">
        <div style="width: 10rem" class="d-flex align-items-center">
          <div
            v-for="item in data.value"
            :key="item"
            class="p-1 shadow rounded-lg border border-info text-talent fs-10 mb-1 mr-1"
          >
            {{ item }}
          </div>
        </div>
      </template>

      <!-- CELL DEV TOOLS -->
      <template #cell(dev_tools)="data">
        <div style="width: 10rem" class="d-flex align-items-center">
          <div
            v-for="item in data.value"
            :key="item"
            class="p-1 shadow rounded-lg border border-info text-talent fs-10 mb-1 mr-1"
          >
            {{ item }}
          </div>
        </div>
      </template>

      <!-- CELL SERVER OS -->
      <template #cell(server_os)="data">
        <div style="width: 7rem" class="d-flex align-items-center">
          <div
            v-for="item in data.value"
            :key="item"
            class="p-1 shadow rounded-lg border border-info text-talent fs-10 mb-1 mr-1"
          >
            {{ item }}
          </div>
        </div>
      </template>

      <!-- CELL DATABASE -->
      <template #cell(database)="data">
        <div style="width: 7rem" class="d-flex align-items-center">
          <div
            v-for="item in data.value"
            :key="item"
            class="p-1 shadow rounded-lg border border-info text-talent fs-10 mb-1 mr-1"
          >
            {{ item }}
          </div>
        </div>
      </template>

      <!-- CELL APP SERVER -->
      <template #cell(app_server)="data">
        <div style="width: 7rem" class="d-flex align-items-center">
          <div
            v-for="item in data.value"
            :key="item"
            class="p-1 shadow rounded-lg border border-info text-talent fs-10 mb-1 mr-1"
          >
            {{ item }}
          </div>
        </div>
      </template>

      <!-- CELL DESCTIPTIONS -->
      <template #cell(description)="data">
        <div style="width: 10rem !important">
          <span>{{ data.value }}</span>
        </div>
      </template>

      <!-- CELL OTHER INFO -->
      <template #cell(other_info)="data">
        <div style="width: 10rem !important">
          <span>{{ data.value }}</span>
        </div>
      </template>

      <!-- CELL APP TYPE -->
      <template #cell(app_type)="data">
        <div style="width: 5rem !important">
          <span>{{ data.value }}</span>
        </div>
      </template>

      <!-- CELL ACTION -->
      <template #cell(action)="data">
        <div class="d-flex">
          <button
            v-if="!hide_show"
            class="btn btn-outline-success btn-xs ml-auto"
            v-b-tooltip.hover="{ variant: 'info' }"
            title="Lihat Detail"
            @click="showDetail(data.item._id)"
          >
            <i class="bi bi-eye"></i>
          </button>
          <button
            class="btn btn-outline-info btn-xs"
            :class="hide_show ? 'ml-auto mr-1' : 'mx-1'"
            v-b-tooltip.hover="{ variant: 'info' }"
            title="Edit"
            @click="editItem(data.item._id)"
          >
            <i class="bi bi-pencil-square"></i>
          </button>
          <button
            class="btn btn-outline-danger btn-xs mr-auto"
            v-b-tooltip.hover="{ variant: 'info' }"
            title="Delete"
            @click="deleteItem(data.item._id, data.item.full_name)"
          >
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </template>

      <!-- CELL ACTION REQUEST -->
      <template #cell(action_hired)="data">
        <b-button
          size="sm"
          variant="outline-info"
          @click="showDetail(data.item.id)"
        >
          View Detail
        </b-button>
      </template>
    </b-table>

    <!-- PAGINATION -->
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
import { VBTooltip } from "bootstrap-vue";

export default {
  name: "data_table",
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
    is_detail: {
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
  methods: {
    parseDate(date) {
      let val = new Date(date);
      return val.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
  directives: {
    "b-tooltip": VBTooltip,
  },
};
</script>
