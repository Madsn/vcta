<template>
  <div>
    <nav>
      <b-nav tabs>
        <b-nav-item :active="showTeams" @click="showTeams = true">Teams</b-nav-item>
        <b-nav-item :active="!showTeams" @click="showTeams = false">Individuals</b-nav-item>
        <li class="ml-auto">
          <button class="btn btn-xs btn-secondary">
            <icon class="align-middle" name="refresh" aria-hidden="true" :scale="1" @click.native="getScoreboard()"></icon>
          </button>
        </li>
      </b-nav>
    </nav>
    <div class="d-flex justify-content-center" style="padding-top: 56px" v-if="scoreboard.loading" >
      <vue-spinner :loading="scoreboard.loading" :color="'#009dde'"></vue-spinner>
    </div>
    <div class="table-responsive" v-if="!scoreboard.loading">
      <teams :teams="scoreboard.teams" v-if="showTeams"></teams>
      <individuals :individuals="scoreboard.individuals" v-else></individuals>
    </div>
  </div>
</template>

<script>
import individuals from '../components/scoreboard/individuals.vue'
import teams from '../components/scoreboard/teams.vue'
import {mapGetters, mapActions} from 'vuex'
import PacmanLoader from 'vue-spinner/src/PacmanLoader'

export default {
  name: 'scoreboard',
  computed: {
    ...mapGetters({
      scoreboard: 'scoreboard'
    })
  },
  created() {
    this.$store.dispatch('getScoreboard')
  },
  data() {
    return {
      showTeams: true
    }
  },
  components: {
    individuals,
    teams,
    'vue-spinner': PacmanLoader
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
