<template>
  <div>
    <div v-if="dashboard.loading">Loading</div>
    <div class="row" v-if="!dashboard.loading">
      <div class="col-md-5">
        <userstats header="My Stats" :userInfo="dashboard.userInfo"></userstats>
        <teaminvitations></teaminvitations>
      </div>
      <div class="col-md-7">
        <tripscard :trips="dashboard.trips" :editable="true"></tripscard>
      </div>
    </div>
  </div>
</template>

<script>
import userstats from '../components/shared/userstats.vue'
import teaminvitations from '../components/dashboard/teaminvitations.vue'
import tripscard from '../components/shared/tripscard.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters({
      dashboard: 'dashboard'
    })
  },
  created() {
    this.$store.dispatch('getDashboard')
  },
  methods: {
    ...mapActions([
      'getDashboard'
    ])
  },
  components: {
    userstats,
    teaminvitations,
    tripscard
  }
}
</script>

<style lang="less">
.card {
  margin-bottom: 16px;
}
</style>
