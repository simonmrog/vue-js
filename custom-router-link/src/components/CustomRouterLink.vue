<template>
  <span class="custom-router-link" @click="goTo"><slot></slot></span>
</template>

<script>
export default {
  name: "CustomRouterLink",
  props: {
    to: Object,
  },
  methods: {
    goTo: function () {
      if (this.$route.name === this.to.name) this.$router.go(this.to);
      else
        this.$router.push(this.to).catch((err) => {
          if (
            err.name !== "NavigationDuplicated" &&
            !err.message.includes(
              "Avoided redundant navigation to current location"
            ) &&
            !err.message.includes("Redirected when going from")
          )
            console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.custom-router-link {
  cursor: pointer;
}
</style>
