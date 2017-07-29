<template>
  <div class="row">
    <div class="col-md-5">
      <userstats header="My Stats" :userInfo="userInfo"></userstats>
      <teaminvitations></teaminvitations>
    </div>
    <div class="col-md-7">
      <tripscard :trips="trips"></tripscard>
    </div>
  </div>
</template>

<script>
import userstats from '../components/userstats.vue'
import teaminvitations from '../components/teaminvitations.vue'
import tripscard from '../components/tripscard.vue'
export default {
  name: 'dashboard',
  data() {
    return {
      trips: [
        { id: 1, date: '2015-05-01', distance: 5 },
        { id: 2, date: '2015-05-03', distance: 33 }
      ],
      userInfo: {
        full_name: 'John Smith',
        total_distance: 55,
        number_trips: 12,
        cycling_days: 6,
        team: null
      }
    }
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
