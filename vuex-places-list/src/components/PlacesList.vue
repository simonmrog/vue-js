<template>
  <div id="places-list">
    <h1>My Places</h1>
    <ul>
      <li :key="place.id" v-for="place in placesList">
        <PlaceDetails :place="place"/>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PlaceDetails from "@/components/PlaceDetails";

export default {
  name: "PlacesList",
  components: {
    PlaceDetails
  },
  computed: {
    ...mapGetters([
      "placesList"
    ])
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
