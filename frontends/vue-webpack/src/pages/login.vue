<template>
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <b-card header="Sign in or register">
        <form class="form-signin">
          <div class="form-group">
            <div class="input-group">
              <label for="inputUsername" class="sr-only">{{loginUsernameLabel}}</label>
              <span class="input-group-addon" id="username-addon">
                <icon name="user" scale="1" width="16px"></icon>
              </span>
              <input type="text" id="inputUsername" class="form-control" :placeholder="loginUsernameLabel" aria-describedby="username-addon">
            </div>
            <div class="input-group" v-if="registering">
              <label for="inputUsername" class="sr-only">Email</label>
              <span class="input-group-addon" id="email-addon">
                <icon name="envelope" scale="1" width="16px"></icon>
              </span>
              <input type="text" id="inputUsername" class="form-control" placeholder="Email - xxx@systematic.com" aria-describedby="email-addon">
            </div>
            <div class="input-group">
              <label for="inputPassword" class="sr-only">Password</label>
              <span class="input-group-addon" id="password-addon">
                <icon name="lock" scale="1" width="16px"></icon>
              </span>
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" aria-describedby="password-addon">
            </div>
          </div>
          <div class="form-group" v-if="registering">
            <button class="btn btn-md btn-danger" @click="login" type="submit">Cancel</button>
            <button class="btn btn-md btn-primary" @click="signUp">Submit</button>
          </div>
          <div class="form-group" v-else>
            <button class="btn btn-md btn-secondary" @click="signUp">Register</button>
            <button class="btn btn-md btn-primary" type="submit">Sign in</button>
          </div>
        </form>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      registering: false
    }
  },
  computed: {
    loginUsernameLabel: function() {
      return this.registering ? 'Username' : 'Username or email'
    }
  },
  methods: {
    signUp: function() {
      this.registering = true
    },
    login: function() {
      this.registering = false
    }
  }
}
</script>

<style lang="less">
</style>
