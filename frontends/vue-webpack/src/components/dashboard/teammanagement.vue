<template>
  <div v-if="isTeamCaptain">
    <teamrequestsForTeam></teamrequestsForTeam>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import teamrequestsForTeam from './teamrequestsForTeam.vue'

  export default {
    name: 'teammanagement',
    computed: {
      ...mapGetters({
        isTeamCaptain: 'isTeamCaptain'
      })
    },
    components: {
      teamrequestsForTeam
    }
  }
</script>

<style>

</style>
