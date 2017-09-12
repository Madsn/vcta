<template>
  <div>
    <div v-if="userpage.loading">
      <div class="d-flex justify-content-center pt-5">
        <vue-spinner :loading="userpage.loading" :color="'#009dde'"></vue-spinner>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-5">
          <userstats header="Stats" :userInfo="userpage.userInfo"></userstats>
        </div>
        <div class="col-md-7">
          <tripscard :trips="userpage.trips"></tripscard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import PacmanLoader from 'vue-spinner/src/PacmanLoader'
  import userstats from '../components/shared/userstats.vue'
  import tripscard from '../components/shared/tripscard.vue'

  export default {
    name: 'user',
    computed: {
      ...mapGetters({
        userpage: 'userpage'
      })
    },
    mounted: function() {
      this.getUserDetails(this.$route.params.id)
    },
    methods: {
      ...mapActions([
        'getUserDetails'
      ])
    },
    components: {
      'vue-spinner': PacmanLoader,
      userstats,
      tripscard
    }
  }
</script>
