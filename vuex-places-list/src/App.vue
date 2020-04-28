<template>
  <div id="app">
    <PlacesList />
  </div>
</template>

<script>
import PlacesList from "@/components/PlacesList";

export default {
  name: 'App',
  components: {
    PlacesList
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}
</style>
