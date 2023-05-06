<template>
  <div id="recommendation-card">
    <b-card class="shadow-md border mb-3">
      <div class="row">
        <!-- profile -->
        <div class="col-md-6 col-sm-12 p-2">
          <b-card no-body class="shadow-sm h-100 p-2 border">
            <div class="d-flex align-items-center">
              <i class="bi bi-person-circle mr-1" style="font-size: 50px"></i>
              <div>
                <span class="fs-14"> Muhammad Afzaki </span>
                <span class="fs-12 ml-1">
                  <b-badge
                    :class="data.gender == 'male' ? 'bg-talent' : 'bg-pink'"
                    style="position: absolute"
                  >
                    <i
                      class="bi"
                      :class="
                        data.gender == 'male'
                          ? 'bi-gender-male'
                          : 'bi-gender-female'
                      "
                    ></i>
                    {{ data.gender }}
                  </b-badge>
                </span>
                <br />
                <div class="fs-12">
                  <i class="bi bi-toggles2"></i>
                  Frontend Developer
                </div>
                <div class="d-flex align-items-center fs-10">
                  <i class="bi bi-person-fill mr-1"></i> 22 Years Old
                  <i class="bi bi-person-workspace mr-1 ml-3"></i> 4 Years Work
                  Experience
                </div>
              </div>
            </div>
          </b-card>
        </div>
        <!-- descriptions -->
        <div class="col-md-6 col-sm-12 p-2">
          <b-card no-body class="shadow-sm h-100 p-2 border">
            <span class="fs-12">Descriptions</span>
            <div
              class="border px-1 py-1 rounded fs-10 border-container mt-1"
              style="border-color: #0173a7 !important; height: 4rem"
            >
              <p class="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus eveniet doloremque accusantium deleniti rerum. Et
                laudantium impedit inventore doloribus placeat excepturi
                commodi, velit laborum? Iure officia omnis neque. Facere, ullam.
              </p>
            </div>
          </b-card>
        </div>
      </div>
      <div class="row" style="margin-top: -15px">
        <!-- project experience -->
        <div class="col-md-3 col-sm-12 mt-3 p-2">
          <b-card no-body class="shadow-sm p-2 h-100 border">
            <span class="fs-12">Project Experience</span>
            <ul
              class="list-group fs-10 border-container mt-1"
              style="height: 9rem"
            >
              <li
                class="list-group-item p-1"
                style="border-color: #0173a7 !important"
              >
                <div class="d-flex">
                  <i class="bi bi-kanban fs-14 mr-1"></i>
                  <span class="text-justify"> Leslar Productions </span>
                </div>
              </li>
              <li
                class="list-group-item p-1"
                style="border-color: #0173a7 !important"
              >
                <div class="d-flex">
                  <i class="bi bi-kanban fs-14 mr-1"></i>
                  <span class="text-justify"> Machine Learning </span>
                </div>
              </li>
              <li
                class="list-group-item p-1"
                style="border-color: #0173a7 !important"
              >
                <div class="d-flex">
                  <i class="bi bi-kanban fs-14 mr-1"></i>
                  <span class="text-justify" style="word-break: break-all">
                    NLP Machine Learning untuk Gojek Company
                  </span>
                </div>
              </li>
              <li
                class="list-group-item p-1"
                style="border-color: #0173a7 !important"
              >
                <div class="d-flex">
                  <i class="bi bi-kanban fs-14 mr-1"></i>
                  <span class="text-justify" style="word-break: break-all">
                    NLP Machine Learning untuk Gojek Company
                  </span>
                </div>
              </li>
              <li
                class="list-group-item p-1"
                style="border-color: #0173a7 !important"
              >
                <div class="d-flex">
                  <i class="bi bi-kanban fs-14 mr-1"></i>
                  <span class="text-justify" style="word-break: break-all">
                    NLP Machine Learning untuk Gojek Company
                  </span>
                </div>
              </li>
              <li
                class="list-group-item p-1"
                style="border-color: #0173a7 !important"
              >
                <div class="d-flex">
                  <i class="bi bi-kanban fs-14 mr-1"></i>
                  <span class="text-justify" style="word-break: break-all">
                    NLP Machine Learning untuk Gojek Company
                  </span>
                </div>
              </li>
            </ul>
          </b-card>
        </div>
        <!-- educations -->
        <div class="col-md-4 col-sm-12 mt-3 p-2">
          <b-card no-body class="shadow-sm p-2 h-100 border">
            <span class="fs-12">Educations</span>
            <ul
              class="list-group fs-10 border-container mt-1"
              style="height: 9.5rem"
            >
              <li
                class="list-group-item p-1"
                style="border-color: #0173a7 !important"
              >
                <div class="d-flex">
                  <i class="bi bi-mortarboard fs-18 mr-1"></i>
                  <span class="text-justify">
                    S2 Informatics Engineering in Institut Teknologi Bandung
                  </span>
                </div>
              </li>
              <li
                class="list-group-item p-1"
                style="border-color: #0173a7 !important"
              >
                <div class="d-flex">
                  <i class="bi bi-mortarboard fs-18 mr-1"></i>
                  <span class="text-justify">
                    D4 Informatics Engineering in Politeknik Negeri Bandung
                  </span>
                </div>
              </li>
              <li
                class="list-group-item p-1"
                style="border-color: #0173a7 !important"
              >
                <div class="d-flex">
                  <i class="bi bi-mortarboard fs-18 mr-1"></i>
                  <span class="text-justify">
                    D3 Informatics Engineering in Politeknik Negeri Bandung
                  </span>
                </div>
              </li>
            </ul>
          </b-card>
        </div>
        <!-- skills and technology -->
        <div class="col-md-5 col-sm-12 mt-3 p-2">
          <b-card no-body class="shadow-sm p-2 h-100 border">
            <span class="fs-12">Skills and Technology</span>
            <b-card no-body class="shadow-sm p-1 border mb-1 mt-1">
              <div class="fs-10 mb-1">Programming Language :</div>
              <div class="d-flex align-center fs-12 skill-wrapper pb-1">
                <b-badge variant="info" class="ml-1 bg-talent"
                  >Javascript</b-badge
                >
                <b-badge variant="info" class="ml-1 bg-talent">Go</b-badge>
                <b-badge variant="info" class="ml-1 bg-talent">PHP</b-badge>
                <b-badge variant="info" class="ml-1 bg-talent">HTML</b-badge>
                <b-badge variant="info" class="ml-1 bg-talent">CSS</b-badge>
                <b-badge variant="info" class="ml-1 bg-talent">Java</b-badge>
                <b-badge variant="info" class="ml-1 bg-talent"
                  >Typescript</b-badge
                >
                <b-badge variant="info" class="ml-1 bg-talent">Kotlin</b-badge>
              </div>
            </b-card>

            <b-card no-body class="shadow-sm p-1 border mb-1">
              <div class="fs-10 mb-1">Framework Skills :</div>
              <div class="d-flex align-center fs-12 skill-wrapper pb-1">
                <b-badge variant="info" class="ml-1 bg-talent">Laravel</b-badge>
                <b-badge variant="info" class="ml-1 bg-talent"
                  >Code Igniter</b-badge
                >
                <b-badge variant="info" class="ml-1 bg-talent">ReactJS</b-badge>
                <b-badge variant="info" class="ml-1 bg-talent">VueJS</b-badge>
                <b-badge variant="info" class="ml-1 bg-talent">Flask</b-badge>
              </div>
            </b-card>
            <b-card no-body class="shadow-sm p-1 border mb-1">
              <div class="fs-10 mb-1">Database Skills :</div>
              <div class="d-flex align-center fs-12 skill-wrapper pb-1">
                <b-badge variant="info" class="ml-1 bg-talent">MySQL</b-badge>
                <b-badge variant="info" class="ml-1 bg-talent"
                  >SQL Server</b-badge
                >
                <b-badge variant="info" class="ml-1 bg-talent">MongoDB</b-badge>
                <b-badge variant="info" class="ml-1 bg-talent"
                  >Graph Database</b-badge
                >
              </div>
            </b-card>
          </b-card>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-12">
          <b-button class="btn-talent btn-xs float-right" @click="addToCart()">
            <i class="bi bi-cart-plus fs-12"></i>
            <span class="fs-12"> Add to Cart</span>
          </b-button>
        </div>
      </div>
      <request_date_modal :id="data.id" />
    </b-card>
  </div>
</template>
<script>
import request_date_modal from "./requestDateModal.vue";

export default {
  name: "recommendation-card",
  components: {
    request_date_modal,
  },
  props: {
    data: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$bvModal.show("set-date-modal-" + this.data.id.toString());
    },
  },
};
</script>
<style scoped>
.border-container {
  overflow: auto;
}
.border-container::-webkit-scrollbar {
  width: 5px;
}
.border-container::-webkit-scrollbar-thumb {
  background-color: #cdd0d1;
  border-radius: 10px;
}

.border-container::-webkit-scrollbar-track {
  background-color: #e8ecec;
  border-radius: 10px;
}
.border-container::-webkit-scrollbar-corner {
  background-color: #d3eeff;
}
.skill-wrapper {
  width: 100%;
  overflow-x: auto;
}
.skill-wrapper::-webkit-scrollbar {
  height: 5px;
}
.skill-wrapper::-webkit-scrollbar-thumb {
  background-color: #cdd0d1;
  border-radius: 10px;
}

.skill-wrapper::-webkit-scrollbar-track {
  background-color: #e8ecec;
  border-radius: 10px;
}
.skill-wrapper::-webkit-scrollbar-corner {
  background-color: #d3eeff;
}
.shadow-md {
  box-shadow: 2px 3px 2px #c7cbcd !important;
}
</style>