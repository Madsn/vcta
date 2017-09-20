<template>
  <b-card header="Team invitations">
    <p v-if="!invitations">You currently have no team invitations</p>
    <table class="table table-striped" v-else>
      <thead>
      <tr>
        <th></th>
        <th>Team</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(invitation, index) in invitations" v-bind:key="invitation.id">
        <td>{{index + 1}}</td>
        <td>
          <router-link :to="{name: 'teamdetails', params: {id: invitation.team}}">{{invitation.teamName}}</router-link>
        </td>
        <td>Accept - Reject (TODO)</td>
      </tr>
      </tbody>
    </table>
  </b-card>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'teaminvitations',
    computed: {
      ...mapGetters({
        invitations: 'invitations'
      })
    },
    created() {
      this.getInvitations()
    },
    methods: {
      ...mapActions([
        'getInvitations'
      ])
    }
  }
</script>

<style>

</style>
