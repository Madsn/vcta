<template>
  <div>
    <b-card header="Team details">
      <table class="table table-hover">
        <thead>
        </thead>
        <tbody>
        <tr>
          <td>Team name</td>
          <td>{{teamInfo.name}}</td>
        </tr>
        <tr>
          <td>Member count</td>
          <td>{{teamInfo.memberCount}}</td>
        </tr>
        <tr>
          <td>Captain</td>
          <td>
            <router-link :to="{name: 'userdetails', params: {id: teamInfo.captain}}">
              {{teamInfo.captainName}}
            </router-link>
          </td>
        </tr>
        <tr>
          <td>Total distance</td>
          <td>{{teamInfo.distance}}</td>
        </tr>
        <tr>
          <td>Average distance/member</td>
          <td>{{teamInfo.avgDistance}}</td>
        </tr>
        <tr>
          <td>Average days/member</td>
          <td>{{teamInfo.avgDays}}</td>
        </tr>
        </tbody>
      </table>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'teamstats',
    props: [
      'teamInfo'
    ]
  }
</script>
