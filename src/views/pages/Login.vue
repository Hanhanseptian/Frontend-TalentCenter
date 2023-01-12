<template>
  <div class="login container">
    <div class="row">
      <div class="col-md-6">
        <div class="d-flex">
          <img
            src="../../../public/logo.png"
            width="500"
            class="mt-5 mb-4 mx-auto"
          />
        </div>
        <div class="d-flex">
          <img
            src="../../../public/image.png"
            width="600"
            class="mt-5 mb-4 mx-auto"
          />
        </div>
      </div>
      <div class="col-md-6" style="vertical-align: middle !important">
        <div class="login-form">
          <div class="text-center">
            <img src="../../../public/logo.png" width="180" class="mt-5 mb-4" />
            <br />
            <div class="px-5 text-talent">
              <span>LOGIN FORM</span>
              <hr />
            </div>
          </div>
          <div class="px-5 text-talent">
            <div>
              <label for="username" class="fs-12">Username</label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control">
                  <i class="bi bi-person-fill mx-auto my-auto"></i>
                </div>
                <input
                  type="text"
                  id="username"
                  placeholder="Masukkan Username"
                  class="form-control input-talent ml-auto text-talent"
                />
              </div>
            </div>
            <div class="mt-4">
              <label for="password" class="fs-12">Password</label>
              <div class="d-flex">
                <div class="icon-talent d-flex p-0 form-control">
                  <i class="bi bi-lock-fill mx-auto my-auto"></i>
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Masukkan Password"
                  class="form-control input-talent ml-auto text-talent"
                />
              </div>
            </div>
            <div class="d-flex mt-3">
              <span class="fs-12 ml-auto clickable link">Forgot Password?</span>
            </div>
            <button
              class="form-control mt-3 mb-1 text-center btn-login"
              @click="login"
            >
              Login
            </button>
            <center>
              <span class="text-talent fs-12"
                >Don't have an Account?
                <u class="clickable link">Sign Up</u></span
              >
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {},
  methods: {
    login() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.login-form {
  height: 35rem;
  width: 28rem;
  border-radius: 1.5rem;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}
.input-talent {
  border-radius: 15px !important;
  border-color: #0173a7 !important;
  color: #0173a7 !important;
  font-size: 12px !important;
  height: 2.5rem !important;
  width: 18rem !important;
  background-color: #eff2f4;
}
.input-talent:focus {
  box-shadow: 2px 2px 2px #0173a7 !important;
  border-color: none !important;
}
.icon-talent {
  border-radius: 15px !important;
  color: #0173a7 !important;
  border-color: #0173a7 !important;
  background-color: #eff2f4;
  font-size: 20px !important;
  height: 2.5rem !important;
  width: 2.5rem !important;
}
.btn-login {
  border-radius: 10px !important;
  background-color: #0173a7;
  color: white;
}
.btn-login:hover {
  opacity: 0.8;
}
.link:hover {
  opacity: 0.8;
}
</style>