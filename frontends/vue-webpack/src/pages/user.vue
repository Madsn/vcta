<template>
  <div>
    {{userpage}}
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'user',
    props: [],
    computed: {
      ...mapGetters({
        userpage: 'userpage'
      })
    },
    mounted: function() {
      this.getUser()
    },
    methods: {
      ...mapActions([
        'getUser'
      ])
    }
  }
</script>
