<template>
  <div id="app">
    {{ count }}
    <input type="number" value="1" />
    <button @click="changeCount">Change Count</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapActions(["changeCount"]),
    changeState() {
      const countDelta = parseInt(
        this.$el.querySelector("input[type='number']").value
      );
      this.changeCount(countDelta);
    }
  }
};
</script>

<style>
</style>
