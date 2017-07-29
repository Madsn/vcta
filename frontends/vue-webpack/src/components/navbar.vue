<template>
  <b-navbar sticky toggleable type="light" variant="faded">
    <div class="container">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="/">
        <img src="../assets/cykel-logo.png" />
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
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar'
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

ul.navbar-nav li.nav-item>a.nav-link {
  padding: 18px 16px 18px 16px;

  &.active {
    color: #fff;
    background-color: #009dde;
  }
}
</style>
