<template>
  <div>
    <b-card :header="header">
      <table class="table table-hover">
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>Full name</td>
            <td>{{userInfo.full_name}}</td>
          </tr>
          <tr>
            <td>Total distance</td>
            <td>{{userInfo.total_distance}}</td>
          </tr>
          <tr>
            <td>Number of trips</td>
            <td>{{userInfo.number_trips}}</td>
          </tr>
          <tr>
            <td>Cycling days</td>
            <td>{{userInfo.cycling_days}}</td>
          </tr>
          <tr>
            <td>Team</td>
            <td>{{userInfo.team}}</td>
          </tr>
        </tbody>
      </table>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'userstats',
  props: [
    'header',
    'userInfo'
  ]
}
</script>

<style>

</style>
