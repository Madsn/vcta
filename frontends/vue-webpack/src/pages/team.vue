<template>
  <div>
    {{teampage}}
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import PacmanLoader from 'vue-spinner/src/PacmanLoader'

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
      'vue-spinner': PacmanLoader
    }
  }
</script>
