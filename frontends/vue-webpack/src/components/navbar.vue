<template>
  <md-toolbar>
    <md-layout md-align="start" md-hide-small-and-up>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
    </md-layout>
    <md-layout md-align="start">
      <router-link to="/"><h2 class="md-title">VCTA</h2></router-link>
    </md-layout>

    <md-layout md-align="center" md-hide-xsmall>
      <md-button class="md-button">
        <router-link to="/dashboard">Dashboard</router-link>
      </md-button>
    </md-layout>
    <md-layout md-align="center" md-hide-xsmall>
      <md-button class="md-button">
        <router-link to="/scoreboard">Scoreboard</router-link>
      </md-button>
    </md-layout>

    <md-layout md-align="end">
      <md-button class="md-icon-button">
        <md-icon>lock</md-icon>
      </md-button>
    </md-layout>
  </md-toolbar>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>

</style>
