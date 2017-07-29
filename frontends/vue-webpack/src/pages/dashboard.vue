<template>
  <div class="row">
    <div class="col-md-5">
      <userstats header="My Stats"></userstats>
      <teaminvitations></teaminvitations>
    </div>
    <div class="col-md-7">

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
    </div>
  </div>
</template>

<script>
import userstats from '../components/userstats.vue'
import teaminvitations from '../components/teaminvitations.vue'
import tripstable from '../components/tripstable.vue'
export default {
  name: 'dashboard',
  data() {
    return {
      trips: [
        { date: '2015-05-01', distance: 5 },
        { date: '2015-05-03', distance: 33 }]
    }
  },
  components: {
    userstats,
    teaminvitations,
    tripstable
  }
}
</script>

<style lang="less">
.card {
  margin-bottom: 16px;
}
</style>
