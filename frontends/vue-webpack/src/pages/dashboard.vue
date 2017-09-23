<template>
  <div>
    <div v-if="dashboard.loading">Loading</div>
    <div class="row" v-if="!dashboard.loading">
      <div class="col-md-5">
        <userstats header="My Stats" :userInfo="dashboard.userInfo"></userstats>
        <teamrequests></teamrequests>
        <div v-if="isTeamCaptain">is team captain</div>
        <div v-else>is not team captain</div>
      </div>
      <div class="col-md-7">
        <tripscard :trips="dashboard.trips" :editable="true"></tripscard>
      </div>
    </div>
  </div>
</template>

<script>
import userstats from '../components/shared/userstats.vue'
import teamrequests from '../components/dashboard/teamrequests.vue'
import tripscard from '../components/shared/tripscard.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters({
      dashboard: 'dashboard'
    }),
    isTeamCaptain: function() {
      return this.dashboard.userInfo.teamCaptain !== null &&
        this.dashboard.userInfo.teamCaptain === this.dashboard.userInfo.id
    }
  },
  created() {
    this.getDashboard()
  },
  methods: {
    ...mapActions([
      'getDashboard'
    ])
  },
  components: {
    userstats,
    teamrequests,
    tripscard
  }
}
</script>

<style lang="less">
.card {
  margin-bottom: 16px;
}
</style>
