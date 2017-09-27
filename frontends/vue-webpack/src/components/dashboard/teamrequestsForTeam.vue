<template>
  <b-card header="Requests for team membership received">
    <table class="table table-striped" v-if="requestsForTeam.list && requestsForTeam.list.length > 0">
      <thead>
      <tr>
        <th>Team</th>
        <th>Sent</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(request, index) in requestsForTeam.list" v-bind:key="request.id">
        <td>
          <router-link :to="{name: 'teamdetails', params: {id: request.team}}">{{request.teamName}}</router-link>
        </td>
        <td>{{request.createdAt | moment('HH:mm DD MMM YYYY') }}</td>
      </tr>
      </tbody>
    </table>
    <p v-else>No pending team membership requests</p>
  </b-card>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'teamrequestsforteam',
    computed: {
      ...mapGetters({
        requestsForTeam: 'requestsForTeam'
      })
    }
  }
</script>

<style>

</style>
