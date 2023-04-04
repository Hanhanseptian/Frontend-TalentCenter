<template>
  <div class="landing-page bg-info">
    <div class="d-flex nav">
      <img src="../../../public/logo.png" class="logo" />
      <span class="text-white ml-auto btn-hover" @click="$router.push('login')"
        >Sign In</span
      >
      <span class="text-white ml-3 btn-hover" @click="$router.push('register')"
        >Sign Up</span
      >
    </div>
    <div class="text-white text-landing text-justify">
      Find the professional “Talent” for your success IT project
    </div>
    <div class="text-white text-how">How to Get Talents?</div>
    <div class="row row-get">
      <div class="col-4">
        <div class="d-flex align-items-center text-white">
          <div class="icon-container">
            <i class="bi bi-card-checklist fs-26 m-auto icon-get"></i>
          </div>
          <span class="ml-2 fs-20"
            >Set Your <br />
            Requirements</span
          >
        </div>
      </div>
      <div class="col-4">
        <div class="d-flex align-items-center text-white">
          <div class="icon-container">
            <i class="bi bi-cart-plus fs-26 icon-get"></i>
          </div>
          <span class="ml-2 fs-20"
            >Add Talents <br />
            to Cart</span
          >
        </div>
      </div>
      <div class="col-4">
        <div class="d-flex align-items-center text-white ml-auto">
          <div class="icon-container">
            <i class="bi bi-check2-square fs-26 m-auto icon-get"></i>
          </div>
          <span class="ml-2 fs-20"
            >Checkout Your <br />
            Talents</span
          >
        </div>
      </div>
    </div>
    <div class="footer text-white">
      <i class="bi bi-telephone fs-20 mr-2"></i>
      <span class="mr-4 text-footer">Call Center : (021) 12345</span>
      <i class="bi bi-envelope fs-20 mr-2"></i>
      <span class="text-footer">Email : jayandracompany@gmail.com</span>
      <i class="bi bi-facebook fs-26 ml-auto text-facebook"></i>
      <i class="bi bi-twitter fs-26 ml-2 text-twitter"></i>
      <i class="bi bi-instagram fs-26 ml-2 text-instagram"></i>
      <i class="bi bi-linkedin fs-26 ml-2 text-linkedin"></i>
    </div>
  </div>
</template>
  <script>
import { BCard, BBadge } from "bootstrap-vue";

export default {
  name: "LandingPage",
  components: {
    BCard,
    BBadge,
  },
};
</script>
<style>
.landing-page {
  background-image: url("../../../public/landing-page.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.nav {
  background-color: rgba(255, 255, 255, 0.2);
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.btn-hover:hover {
  color: #0173a7 !important;
  cursor: pointer;
  border-radius: 10px;
}
.text-landing {
  font-size: 60px;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 5%;
}
.text-how {
  font-size: 35px;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 5%;
}
.row-get {
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 3rem;
}
.icon-container {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  padding-left: 10%;
  padding-right: 10%;
  margin-bottom: 1rem;
  width: 100%;
}
.logo {
  width: 250px;
}
@media only screen and (max-width: 600px) {
  .nav {
    padding-left: 5%;
    padding-right: 5%;
  }
  .logo {
    width: 100px;
  }
  .btn-hover {
    font-size: 10px;
  }
  .text-landing {
    font-size: 20px;
    margin-top: 5rem;
    padding-left: 5%;
    padding-right: 5%;
  }
  .text-how {
    font-size: 16px;
    margin-top: 3rem;
    padding-left: 5%;
    padding-right: 5%;
  }
  .row-get{
    padding-left: 5%;
    padding-right: 5%;
  }
  .footer {
    padding-left: 5%;
    padding-right: 5%;
  }
  .icon-container {
    padding: 5px;
    height: 1.5rem;
    width: 1.5rem;
  }
  .icon-get {
    font-size: 12px;
  }
  .fs-20 {
    font-size: 6px;
  }
  .text-footer {
    font-size: 6px;
  }
  .fs-26 {
    font-size: 10px;
  }
}
</style>