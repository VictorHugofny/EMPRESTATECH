<template>
  <Navpainel/>
  <NewRequest/>
</template>

<style scoped>

</style>

<script>
// @ is an alias to /src
import Navpainel from '@/components/Navpainel.vue'
import NewRequest from '@/views/NewRequest.vue'

export default {
  name: 'HomeView',
  components: {
    Navpainel,
    NewRequest
    
  }
}
</script>


       

