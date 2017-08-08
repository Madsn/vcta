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
      <teams :teams="scoreboard.teams" v-if="showTeams"></teams>
      <individuals :individuals="scoreboard.individuals" v-else></individuals>
    </div>
    <button v-on:click="getScoreboard()">Get scoreboard</button>
  </div>
</template>

<script>
import individuals from '../components/scoreboard/individuals.vue'
import teams from '../components/scoreboard/teams.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'scoreboard',
  computed: {
    ...mapGetters({
      scoreboard: 'scoreboard'
    })
  },
  data() {
    return {
      showTeams: true
    }
  },
  components: {
    individuals,
    teams
  },
  methods: {
    ...mapActions([
      'getScoreboard'
    ])
  }
}
</script>

<style>

</style>
