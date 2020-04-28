<template>
  <div id="place-details">
    <h2>{{ place.title }}</h2>
    <!-- <img :src="require('@/assets/' + img)" /> -->
    <p><strong>Location:</strong>{{ place.location }}</p>
    <button @click="deletePlace">Delete Place</button>
  </div>
</template>

<script>
export default {
  name: "PlaceDetails",
  props: {
    place: Object
  },
  methods: {
    deletePlace: function() {
      this.$store.dispatch("deletePlace", this.place.id);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}
</style>
