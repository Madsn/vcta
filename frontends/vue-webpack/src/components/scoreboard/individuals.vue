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
      <th>{{index + 1}}</th>
      <td>
        <router-link :to="{name:'userdetails', params: { id: individual.id }}">{{individual.username}}</router-link>
      </td>
      <td>
        <router-link :to="{name:'teamdetails', params: { id: individual.team }}">{{individual.teamName}}</router-link>
      </td>
      <td>{{individual.distance}}</td>
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
