<template>
  <div id="recruiter-home">
    <div class="container">
      <b-card>
        <b-card-header>
          <b-card-title>My Talent</b-card-title>
          <span>Showing History of Recruited Talents</span>
        </b-card-header>
        <b-card-body>
          <div class="btn-group mb-3">
            <div class="btn btn-sm" :class="is_on_contract?'btn-talent':'btn-outline-talent'" @click="changePage('on_contract')">On Contract </div>
            <div class="btn btn-sm" :class="is_extend_contract?'btn-talent':'btn-outline-talent'" @click="changePage('extend_contract')">Extend Contract</div>
            <div class="btn btn-sm" :class="is_terminate_contract?'btn-talent':'btn-outline-talent'" @click="changePage('terminate_contract')">Terminate Contract</div>
          </div>
          <OnContract v-if="is_on_contract"/>
          <ExtendContract v-else-if="is_extend_contract"/>
          <TerminateContract v-else-if="is_terminate_contract"/>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>
<script>
import OnContract from './OnContract.vue';
import ExtendContract from './ExtendContract.vue';
import TerminateContract from './TerminateContract.vue';

export default {
  name: "MyTalent",
  components: {
    OnContract,
    ExtendContract,
    TerminateContract
  },
  data(){
    return {
      is_on_contract: true,
      is_extend_contract: false,
      is_terminate_contract: false,
    }
  },
  methods: {
    changePage(page){
      if(page == 'on_contract'){
        this.is_on_contract = true;
        this.is_extend_contract = false;
        this.is_terminate_contract = false;
      }else if( page == 'extend_contract'){
        this.is_on_contract = false;
        this.is_extend_contract = true;
        this.is_terminate_contract = false;
      }else{
        this.is_on_contract = false;
        this.is_extend_contract = false;
        this.is_terminate_contract = true;
      }
    }
  }
}
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .btn-sm {
    font-size: 10px;
  }
}
</style>