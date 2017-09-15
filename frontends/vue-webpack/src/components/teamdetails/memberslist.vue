<template>
  <div>
    <div class="card dashboard-card">
      <div class="card-header">
        Members
      </div>
      <div class="card-block">
        <div class="row">
          <div class="col-md-12">
            <table class="table table-striped">
              <thead>
              <tr>
                <th></th>
                <th>Username</th>
                <th>Total Km</th>
                <th>Cycling days</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(individual, index) in members" v-bind:key="individual.id">
                <th>{{index + 1}}</th>
                <td>
                  <router-link :to="{name:'userdetails', params: { id: individual.id }}">{{individual.username}}</router-link>
                </td>
                <td>{{individual.distance}}</td>
                <td>{{individual.days}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'memberslist',
    props: [
      'members'
    ]
  }
</script>
