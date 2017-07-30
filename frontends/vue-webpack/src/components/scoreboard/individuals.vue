<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th></th>
        <th>Username</th>
        <th>Team</th>
        <th>Total Km</th>
        <th>Cycling days</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(individual, index) in individuals" v-bind:key="individual.id">
        <th>{{index+1}}</th>
        <td>{{individual.name}}</td>
        <td>{{individual.team}}</td>
        <td>{{individual.totalKm}}</td>
        <td>{{individual.days}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'individuals',
  props: [
    'individuals'
  ]
}
</script>

<style>

</style>
