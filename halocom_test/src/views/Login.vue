<template>
  <div id="login">
    <h3 class="text-center text-white pt-5">Login form</h3>
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <form id="login-form" class="form">
              <h3 class="text-center text-primary-hn">Welcome</h3>
              <div class="form-group">
                <label for="username" class="text-primary-hn">Username:</label>
                <br />
                <input type="text" name="username" id="username" class="form-control" />
              </div>
              <div class="form-group">
                <label for="password" class="text-primary-hn">Password:</label>
                <br />
                <input type="text" name="password" id="password" class="form-control" />
              </div>
              <div class="form-group">
                <br />
                <input
                  @click="redirectLogin()"
                  type="button"
                  name="submit"
                  class="btn btn-primary-hn btn-md"
                  value="Login"
                />
              </div>
              <div id="register-link" class="text-right">
                <a @click="redirectLogin()" class="text-primary-hn">Register here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    redirectLogin() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.text-primary-hn {
  color: #fe742c;
}
.btn-primary-hn {
  color: #fff;
  background-color: #fe742c;
  border-color: #fe742c;
}
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  background-color: #eaeaea;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login
  .container
  #login-row
  #login-column
  #login-box
  #login-form
  #register-link {
  margin-top: -85px;
}
</style>