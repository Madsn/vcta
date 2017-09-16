<template>
  <b-navbar sticky toggleable type="light" variant="faded">
    <div class="container">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="/">
        <img src="../assets/cykel-logo.png"/>
      </b-link>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item to="/dashboard">Dashboard</b-nav-item>
          <b-nav-item to="/scoreboard">Scoreboard</b-nav-item>
          <b-nav-item to="/rules">Rules</b-nav-item>
        </b-nav>
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item to="/login" v-if="!isAuthenticated">Login</b-nav-item>
          <b-nav-item v-if="isAuthenticated" @click.native="triggerLogout">Log out</b-nav-item>
        </b-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'navbar',
    computed: {
      ...mapGetters({
        isAuthenticated: 'isAuthenticated'
      })
    },
    methods: {
      ...mapActions([
        'logout'
      ]),
      triggerLogout: function() {
        this.logout()
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="less">
  .navbar {
    height: 61px;
    border-color: #e7e7e7;
    border-width: 0 0 1px;
    border-style: solid;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .navbar-brand {
    margin-top: 6px;
  }

  ul.navbar-nav li.nav-item > a.nav-link {
    padding: 19px 16px 19px 16px;

    &.active {
      color: #fff;
      background-color: #009dde;
    }
  }
</style>
