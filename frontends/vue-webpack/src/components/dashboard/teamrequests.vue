<template>
  <b-card header="Team membership requests">
    <p v-if="!requests">You currently have no pending team membership requests</p>
    <table class="table table-striped" v-else>
      <thead>
      <tr>
        <th></th>
        <th>Team</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(request, index) in requests" v-bind:key="request.id">
        <td>{{index + 1}}</td>
        <td>
          <router-link :to="{name: 'teamdetails', params: {id: request.team}}">{{request.teamName}}</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </b-card>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'teamrequests',
    computed: {
      ...mapGetters({
        requests: 'requests'
      })
    },
    created() {
      this.getTeamMembershipRequests()
    },
    methods: {
      ...mapActions([
        'getTeamMembershipRequests'
      ])
    }
  }
</script>

<style>

</style>
