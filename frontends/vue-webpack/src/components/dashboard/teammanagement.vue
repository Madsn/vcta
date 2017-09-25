<template>
  <div v-if="isTeamCaptain">
    <teamrequests header="Received membership requests" :requests="requests"></teamrequests>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import teamrequests from './teamrequests.vue'

  export default {
    name: 'teammanagement',
    computed: {
      ...mapGetters({
        isTeamCaptain: 'isTeamCaptain',
        // TODO - replace with requests for the team, not the user
        requests: 'requests'
      })
    },
    components: {
      teamrequests
    }
  }
</script>

<style>

</style>
