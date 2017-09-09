<template>
  <div>
    <div v-if="userpage.loading">
      loading..
    </div>
    <div v-else>
      {{userpage.info}}
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'user',
    computed: {
      ...mapGetters({
        userpage: 'userpage'
      })
    },
    mounted: function() {
      this.getUser(this.$route.params.id)
    },
    methods: {
      ...mapActions([
        'getUser'
      ])
    }
  }
</script>
