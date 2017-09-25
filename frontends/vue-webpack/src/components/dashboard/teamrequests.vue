<template>
  <b-card :header="header">
    <table class="table table-striped" v-if="requests.list && requests.list.length > 0">
      <thead>
      <tr>
        <th>Team</th>
        <th>Sent</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(request, index) in requests.list" v-bind:key="request.id">
        <td>
          <router-link :to="{name: 'teamdetails', params: {id: request.team}}">{{request.teamName}}</router-link>
        </td>
        <td>{{request.createdAt | moment('HH:mm DD MMM YYYY') }}</td>
      </tr>
      </tbody>
    </table>
    <p v-else>You currently have no pending team membership requests</p>
  </b-card>
</template>

<script>
  export default {
    name: 'teamrequests',
    props: [
      'header',
      'requests'
    ]
  }
</script>

<style>

</style>
