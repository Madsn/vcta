<template>
  <div class="card dashboard-card">
    <div class="card-header">
      {{header}}
    </div>
    <div class="card-block">
      <table class="table table-hover">
        <thead>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userstats',
  props: [
    'header'
  ]
}
</script>

<style>

</style>
