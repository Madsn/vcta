<template>
  <div>
    {{userpage.key}} - {{userpage.name}}
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
