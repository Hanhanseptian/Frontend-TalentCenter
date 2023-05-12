<template>
  <div id="dashboard">
    <!-- BREADCUMB -->
    <div class="d-flex align-items-center mb-3">
      <span class="fs-22">Dashboard |</span>
      <i class="bi bi-speedometer mx-1 fs-14 mt-1"></i>
      <i class="bi bi-chevron-right fs-14 mt-1"></i>
      <small class="fs-14 mt-1">Dashboard</small>
    </div>
    <!-- TALENT STATISTICS -->
    <b-card>
      <b-card-header>
        <b-card-title>Talent Statistics</b-card-title>
        <span>Showing Statistics of Talent / Status</span>
      </b-card-header>
      <b-card-body class="mt-3">
        <div class="row">
          <div class="col-4">
            <div class="d-flex align-items-center">
              <div class="icon-container icon-info">
                <i class="bi bi-person-fill-up fs-26 m-auto text-talent"></i>
              </div>
              <span class="ml-2 fs-20">
                57 <br />
                <small class="fs-14">Talent Available</small>
              </span>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex align-items-center">
              <div class="icon-container icon-warning">
                <i class="bi bi-hourglass-top fs-26 m-auto text-warning"></i>
              </div>
              <span class="ml-2 fs-20">
                39 <br />
                <small class="fs-14">Talent on Request List</small>
              </span>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex align-items-center">
              <div class="icon-container icon-success">
                <i
                  class="bi bi-building-fill-check fs-26 m-auto text-success"
                ></i>
              </div>
              <span class="ml-2 fs-20">
                250 <br />
                <small class="fs-14">Talent on Job</small>
              </span>
            </div>
          </div>
        </div>
      </b-card-body>
    </b-card>
    <!-- TOP 3 PROGRAMMING LANGUAGE -->
    <b-card class="mt-3">
      <b-card-header>
        <b-card-title>Top 3 Favourite Programming Language</b-card-title>
        <span> Showing Top 3 Programming Language Favourite of Recruiter</span>
      </b-card-header>
      <b-card-body class="mt-3">
        <div class="row">
          <div class="col-4">
            <div class="d-flex align-items-center icon-info p-3 rounded-talent">
              <div class="img-container icon-info">
                <img src="../../../assets/img-programming/javascript.png" class="rounded-talent" width="150">
              </div>
              <span class="ml-2 fs-30">
                100 <span class="fs-18">Request</span> <br />
                <small class="fs-14">Javascript</small>
              </span>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex align-items-center icon-info p-3 rounded-talent">
              <div class="img-container icon-warning">
                <img src="../../../assets/img-programming/javascript.png" class="rounded-talent" width="150">
              </div>
              <span class="ml-2 fs-30">
                100 <span class="fs-18">Request</span> <br />
                <small class="fs-14">Javascript</small>
              </span>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex align-items-center icon-info p-3 rounded-talent">
              <div class="img-container icon-success">
                <img src="../../../assets/img-programming/javascript.png" class="rounded-talent" width="150">
              </div>
              <span class="ml-2 fs-30">
                100 <span class="fs-18">Request</span> <br />
                <small class="fs-14">Javascript</small>
              </span>
            </div>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
};
</script>
<style scoped>
.icon-container {
  padding: 1rem;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-info {
  background-color: #eff2f4;
}
.icon-warning {
  background-color: #f5f1e1;
}
.icon-success {
  background-color: #e7fbea;
}
</style>
