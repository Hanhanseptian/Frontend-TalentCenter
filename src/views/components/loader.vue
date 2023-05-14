<template>
  <div class="w-100">
    <center>
      <div id="preloader">
        <div id="loader"></div>
      </div>
      Loading...
    </center>
  </div>
</template>
<script>
export default {
  name: "loader",
};
</script>
<style lang="css" scoped>
#preloader {
  width: 100%;
  height: 100%;
}
#loader {
  display: flex;
  width: 75px;
  height: 75px;
  margin: 0 0 0 0;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #0173a7;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
#loader:before {
  content: "";
  position: absolute;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #73aadd;
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
}
#loader:after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #73aadd;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>