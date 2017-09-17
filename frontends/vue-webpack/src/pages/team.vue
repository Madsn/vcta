<template>
  <div>
    <div v-if="teampage.loading">
      <div class="d-flex justify-content-center pt-5">
        <vue-spinner :loading="teampage.loading" :color="'#009dde'"></vue-spinner>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-5">
          <teamstats header="Stats" :teamInfo="teampage.teamInfo"></teamstats>
        </div>
        <div class="col-md-7">
          <memberslist :members="teampage.members"></memberslist>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import PacmanLoader from 'vue-spinner/src/PacmanLoader'
  import teamstats from '../components/teamdetails/teamstats.vue'
  import memberslist from '../components/teamdetails/memberslist.vue'

  export default {
    name: 'team',
    computed: {
      ...mapGetters({
        teampage: 'teampage'
      })
    },
    mounted: function() {
      this.getTeamDetails(this.$route.params.id)
    },
    methods: {
      ...mapActions([
        'getTeamDetails'
      ])
    },
    components: {
      'vue-spinner': PacmanLoader,
      teamstats,
      memberslist
    }
  }
</script>
