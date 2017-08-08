<template>
  <div class="card dashboard-card">
    <div class="card-header">
      Trips
    </div>
    <div class="card-block">
      <div class="row">
        <div class="col-md-12">
          <addtripform></addtripform>
          <tripstable :trips="trips"></tripstable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tripstable from '../shared/tripstable.vue'
import addtripform from './addtripform.vue'

export default {
  name: 'tripscard',
  props: [
    'trips'
  ],
  components: {
    tripstable,
    addtripform
  }
}
</script>

<style>

</style>
