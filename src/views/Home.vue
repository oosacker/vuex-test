<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Photos />
  </div>
</template>

<script>
// @ is an alias to /src
import Photos from '@/components/Photos.vue'

export default {
  name: 'Home',
  components: {
    Photos
  }
}
</script>

<style>
</style>
