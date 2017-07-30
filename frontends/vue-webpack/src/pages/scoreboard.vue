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
      <teams :teams="teams" v-if="showTeams"></teams>
      <individuals :individuals="individuals" v-else></individuals>
    </div>
  </div>
</template>

<script>
import individuals from '../components/scoreboard/individuals.vue'
import teams from '../components/scoreboard/teams.vue'

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
    individuals,
    teams
  }
}
</script>

<style>

</style>
