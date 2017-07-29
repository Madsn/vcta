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
                  datepicker
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

export default {
  name: 'tripscard',
  props: [
    'trips'
  ],
  components: {
    tripstable
  }
}
</script>

<style>

</style>
