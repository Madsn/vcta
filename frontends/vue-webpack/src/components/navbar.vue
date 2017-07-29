<template>
  <b-navbar toggleable type="inverse" variant="primary">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="/">
      <span>BootstrapVue</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item to="/dashboard">Dashboard</b-nav-item>
        <b-nav-item to="/scoreboard">Scoreboard</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">

        <b-nav-item-dropdown right>

          <!-- Using button-content slot -->
          <template slot="button-content">
            <span style="font-weight: bold;">User</span>
          </template>

          <b-dropdown-item>Profile</b-dropdown-item>
          <b-dropdown-item>Signout</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>

</style>
