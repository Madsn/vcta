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
  import userstats from '../components/shared/userstats.vue'
  import teaminvitations from '../components/dashboard/teaminvitations.vue'
  import tripscard from '../components/dashboard/tripscard.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 'dashboard',
    computed: {
      ...mapGetters({
        trips: 'trips',
        userInfo: 'userInfo'
      })
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
