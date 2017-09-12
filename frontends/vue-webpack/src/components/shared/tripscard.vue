<template>
  <div class="card dashboard-card">
    <div class="card-header">
      Trips
    </div>
    <div class="card-block">
      <div class="row">
        <div class="col-md-12">
          <addtripform v-if="editable"></addtripform>
          <tripstable :trips="trips" :editable="editable"></tripstable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tripstable from './tripstable.vue'
import addtripform from '../dashboard/addtripform.vue'

export default {
  name: 'tripscard',
  props: {
    trips: {type: Array},
    editable: {
      default: false,
      type: Boolean
    }
  },
  components: {
    tripstable,
    addtripform
  }
}
</script>

<style>

</style>
