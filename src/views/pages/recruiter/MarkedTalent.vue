<template>
  <div id="my-cart">
    <div class="container">
      <b-card>
        <!-- CARD TITLE -->
        <b-card-header>
          <b-card-title class="fs-20">
            <i class="bi bi-bookmark-check-fill"></i> Marked Talent
          </b-card-title>
          <span class="fs-14 text-muted">Show Marked Talent List</span>
        </b-card-header>

        <!-- LOADER COMPONENT -->
        <loader-component v-if="is_loading" />

        <!-- CARD ITEM -->
        <b-card-body v-else>
          <!-- SEARCH INPUT -->
          <b-input-group class="form-search ml-auto">
            <b-input-group-text class="bg-white">
              <i class="bi bi-search fs-12"></i>
            </b-input-group-text>
            <b-form-input
              type="text"
              class="form-talent"
              placeholder="Search..."
              v-model="search"
            />
          </b-input-group>
          <!-- IS EMPTY DATA IMAGE -->
          <center v-if="temp_item.length == 0">
            <img src="../../../../public/is_empty.png" width="70%" />
          </center>
          <!-- IS NOT EMPTY DATA -->
          <div v-else>
            <!-- SELECT ALL BUTTON -->
            <b-form-checkbox class="mt-3" v-model="is_all_selected">
              Select All
            </b-form-checkbox>
            <!-- ITEM DATA -->
            <div class="row mt-2">
              <div
                v-for="item in temp_item"
                :key="item.id_talent"
                class="col-md-6 col-sm-12 mb-4"
              >
                <!-- SELECT ITEM -->
                <b-form-checkbox
                  v-model="item.is_checked"
                  style="
                    position: absolute;
                    right: 0;
                    margin-right: 1.5rem;
                    margin-top: 0.5rem;
                  "
                ></b-form-checkbox>
                <!-- ON MARKED CARD COMPONENT -->
                <on-marked-card-component :data="item" />
              </div>
            </div>
            <!-- SEND REQUEST BUTTON -->
            <div class="row">
              <div class="col-12">
                <b-button
                  size="sm"
                  class="float-right btn-talent"
                  @click="sendRequest"
                >
                  Send Request
                </b-button>
              </div>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import loader from "../../components/loader.vue";
import on_marked_card from "../../components/recruiter/on_marked_card.vue";

export default {
  name: "MarkedTalent",
  components: {
    "on-marked-card-component": on_marked_card,
    "loader-component": loader,
  },
  data() {
    return {
      account_id: this.$store.getters.user.user_id,
      search: "",
      is_all_selected: false,
      is_loading: true,
      marked_data: [],
      temp_item: [],
      selected_items: [],
    };
  },
  created() {
    this.getMarkedTalent();
  },
  watch: {
    is_all_selected() {
      this.marked_data.forEach((item) => {
        item.is_checked = this.is_all_selected;
      });
    },
    search() {
      if (this.search.length == 0 || this.search.length > 1) {
        this.temp_item = this.marked_data.filter((item) =>
          item.full_name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
  },
  methods: {
    getMarkedTalent() {
      this.is_loading = true;
      this.marked_data = [];
      this.temp_item = [];
      let api =
        process.env.VUE_APP_API_URL +
        "request/" +
        this.account_id +
        "?status=pending";
      this.$url
        .get(api)
        .then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            this.marked_data[i] = res.data[i];
            this.marked_data[i].is_checked = false;
          }
          this.temp_item = this.marked_data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.is_loading = false;
        });
    },
    sendRequest() {
      let id_selected = [];
      let selected = this.temp_item.filter((el) => el.is_checked == true);
      for (let i = 0; i < selected.length; i++) {
        let id = {
          talent_id: selected[i].id_talent,
        };

        id_selected.push(id);
      }
      if (selected.length == 0) {
        this.$toast.error(
          `Error! Please select Talent before sending request.`
        );
      } else {
        Swal.fire({
          title: "Are you sure?",
          text: `You want to submit this request.`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, submit it!",
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            let api =
              process.env.VUE_APP_API_URL +
              "request/" +
              this.account_id +
              "/send";
            this.$url
              .post(api, {
                talents: id_selected,
              })
              .then(() => {
                this.$toast.success(`Success! Request successfully sending.`);
                this.getMarkedTalent();
              })
              .catch(() => {
                this.$toast.error(
                  `Error! An Error occured while submitting request.`
                );
              })
              .finally(() => {
                this.getMarkedTalent();
              });
          }
        });
      }
    },
  },
};
</script>