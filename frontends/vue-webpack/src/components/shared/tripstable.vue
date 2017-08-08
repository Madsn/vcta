<template>
  <div>
    <div class="float-sm-left" v-if="!trips || trips.length == 0">
      <p>No trips registered</p>
    </div>
    <table class="table table-striped table-hover" v-else>
      <thead>
      <tr>
        <th>Day</th>
        <th>Distance</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="trip in trips" v-bind:key="trip.id">
        <td>{{trip.date | moment("DD MMM YY")}}</td>
        <td>{{trip.distance}}</td>
        <td>
          <icon name="trash" @click.native="submitDelete(trip.id)" aria-label="Delete trip" title="Delete"
                class="clickable"></icon>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'tripstable',
    props: [
      'trips'
    ],
    methods: {
      ...mapActions([
        'deleteTrip'
      ]),
      submitDelete: function(id) {
        this.deleteTrip(id)
      }
    }
  }
</script>

<style>

</style>
