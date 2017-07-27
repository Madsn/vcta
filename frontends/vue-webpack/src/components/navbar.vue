<template>
  <md-toolbar>
    <md-layout md-flex="25">
      <h2 class="md-title">VCTA</h2>
    </md-layout>

    <md-layout md-flex="50" md-align="center" md-hide-xsmall>
      <md-column>
        <md-button class="md-button">
          Dashboard
        </md-button>
      </md-column>
      <md-column>
        <md-button class="md-button">
          Scoreboard
        </md-button>
      </md-column>
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
