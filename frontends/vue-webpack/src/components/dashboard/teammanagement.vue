<template>
  <div v-if="isTeamCaptain">is team captain</div>
  <div v-else>is not team captain</div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'teammanagement',
    computed: {
      ...mapGetters({
        isTeamCaptain: 'isTeamCaptain'
      })
    }
  }
</script>

<style>

</style>
