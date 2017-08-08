<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th></th>
        <th>Team name</th>
        <th>Captain</th>
        <th># of Members</th>
        <th>Total Km</th>
        <th>Km/members</th>
        <th>Cycling days/members</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(team, index) in teams" v-bind:key="team.id">
        <th>{{index+1}}</th>
        <td>{{team.name}}</td>
        <td>{{team.captainName}}</td>
        <td>{{team.memberCount}}</td>
        <td>{{team.distance}}</td>
        <td>{{team.avgDistance}}</td>
        <td>{{team.avgDays}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'teams',
  props: [
    'teams'
  ]
}
</script>

<style>

</style>
