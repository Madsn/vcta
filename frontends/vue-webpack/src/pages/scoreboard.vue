<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" href="javascript:void(0)" v-bind:class="{active: showTeams}" @click="showTeams = true">Teams</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="javascript:void(0)" v-bind:class="{active: !showTeams}" @click="showTeams = false">Individuals</a>
      </li>
    </ul>
    <div class="table-responsive">
      <table class="table table-striped" v-if="showTeams">
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
            <td>{{team.captain}}</td>
            <td>{{team.memberCount}}</td>
            <td>{{team.totalKm}}</td>
            <td>{{team.avgKm}}</td>
            <td>{{team.avgDays}}</td>
          </tr>
        </tbody>
      </table>
      <individuals :individuals="individuals" v-else></individuals>
    </div>
  </div>
</template>

<script>
import individuals from '../components/scoreboard/individuals.vue'

export default {
  name: 'scoreboard',
  data() {
    return {
      showTeams: true,
      individuals: [
        { id: 1, name: 'John', team: 'Alpha', totalKm: 10, days: 5 }
      ],
      teams: [
        { id: 1, name: 'Alpha', captain: 'John', memberCount: 1, totalKm: 10, avgKm: 10, avgDays: 5 }
      ]
    }
  },
  components: {
    individuals
  }
}
</script>

<style>

</style>
