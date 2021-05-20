<template>
  <h3>Here are my photos</h3>
  <div class="photos">
    <div 
      v-for="photo in allPhotos"
      :key="photo.id"
      class="photo"
    >
      {{ photo.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Photos",
  computed: {
    allPhotos() {
      return this.$store.state.photos
    }
  },
  methods: {
    fetchPhotos() {
      this.$store.dispatch('fetchPhotos').then(() => {
        console.log('fetched data OK')
      })
    }
  },
  created() {
    this.fetchPhotos()
  }
}
</script>

<style>

</style>