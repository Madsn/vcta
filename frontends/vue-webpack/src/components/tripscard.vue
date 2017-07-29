<template>
  <div class="card dashboard-card">
    <div class="card-header">
      Trips
    </div>
    <div class="card-block">
      <div class="row">
        <div class="col-md-12">
          <div id="addtripform" style="display: block;">
            <form name="trip-add-form" id="trip-add-form">
              <div class="form-group row">
                <label for="tripDate" class="col-sm-2 col-form-label">Date</label>
                <div class="col-sm-10">
                  <datepicker :disabled="disabled" :value="date()" inline bootstrapStyling monday-first required>
                    test
                  </datepicker>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Distance</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="distanceKm" name="distanceKm" value="">
                </div>
              </div>
              <div class="form-group row">
                <div class="offset-sm-2 col-sm-10">
                  <input type="button" class="btn btn-danger" value="Cancel">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <button class="btn btn-primary float-sm-right" style="margin-bottom: 10px;">
            <icon name="plus" aria-hidden="true"></icon> Add a new trip
          </button>
          <tripstable :trips="trips"></tripstable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tripstable from './tripstable.vue'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'tripscard',
  data() {
    return {
      disabled: {
        to: new Date(2017, 4, 1), // Disable all dates up to specific date
        from: new Date(2017, 4, 31), // Disable all dates after specific date
        days: [6, 0] // Disable Saturday's and Sunday's
      },
      date: function() {
        var now = new Date()
        var d = new Date(now.getFullYear(), 4, now.getDate())
        return d
      }
    }
  },
  props: [
    'trips'
  ],
  components: {
    tripstable,
    Datepicker
  }
}
</script>

<style>

</style>
