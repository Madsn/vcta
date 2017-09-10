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
          <userstats header="Stats" :userInfo="userpage.info"></userstats>
        </div>
      </div>
    </div>
    {{userpage.info}}
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import PacmanLoader from 'vue-spinner/src/PacmanLoader'
  import userstats from '../components/shared/userstats.vue'

  export default {
    name: 'user',
    computed: {
      ...mapGetters({
        userpage: 'userpage'
      })
    },
    mounted: function() {
      this.getUser(this.$route.params.id)
    },
    methods: {
      ...mapActions([
        'getUser'
      ])
    },
    components: {
      'vue-spinner': PacmanLoader,
      userstats
    }
  }
</script>
