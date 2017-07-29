<template>
  <div id="app">
    <navbar></navbar>
    <div class="container content-container">
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
.content-container {
  padding-top: 16px;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
