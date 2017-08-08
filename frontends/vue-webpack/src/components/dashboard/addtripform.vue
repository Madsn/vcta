<template>
  <div id="addtripform" style="display: block;">
    <form name="trip-add-form" id="trip-add-form" v-if="showForm">
      <div class="form-group row">
        <label for="tripDate" class="col-sm-2 col-form-label">Date</label>
        <div class="col-sm-10">
          <datepicker :disabled="disabled" v-model="datePickerDate"
                      inline bootstrapStyling monday-first day-view-only required></datepicker>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Distance</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" v-model.number="distance" id="distanceKm" name="distanceKm"
                 value="">
        </div>
      </div>
      <div class="form-group row">
        <div class="offset-sm-2 col-sm-10">
          <input type="button" class="btn btn-danger" @click="cancel()" value="Cancel">
          <input type="button" @click="submitTrip()" class="btn btn-primary" value="Submit"></button>
        </div>
      </div>
    </form>
    <button class="btn btn-primary float-sm-right" style="margin-bottom: 10px;" @click="showForm=true" v-else>
      <icon name="plus" aria-hidden="true"></icon>
      Add a new trip
    </button>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'
  import {mapActions} from 'vuex'

  export default {
    name: 'addtripform',
    data() {
      return {
        disabled: {
          to: new Date(2017, 4, 1), // Disable all dates up to specific date
          from: new Date(2017, 4, 31), // Disable all dates after specific date
          days: [6, 0] // Disable Saturday's and Sunday's
        },
        showForm: false,
        datePickerDate: this.getInitialDatePickerValue(),
        distance: null
      }
    },
    components: {
      Datepicker
    },
    methods: {
      getInitialDatePickerValue: function() {
        const now = new Date()
        const d = new Date(now.getFullYear(), 4, now.getDate())
        return d
      },
      ...mapActions([
        'addTrip'
      ]),
      submitTrip: function() {
        console.log(this.distance)
        if (this.distance === null || isNaN(this.distance) || this.distance === '') {
          console.error('Distance is not a number')
          this.distance = null
        } else {
          this.addTrip({date: new Date(this.datePickerDate), distance: this.distance})
          this.distance = null
          this.showForm = false
        }
      },
      cancel: function() {
        this.showForm = false
      }
    }
  }
</script>

<style>

</style>
