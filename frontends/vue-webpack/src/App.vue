<template>
  <div id="app">
    <navbar></navbar>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>
</style>
