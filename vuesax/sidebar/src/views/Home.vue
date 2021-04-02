<template>
  <div class="home">
    <vs-button @click="active = !active" color="primary"
      >Open Sidebar</vs-button
    >
    <vs-sidebar :parent="home" default-index="1" color="primary" v-model="active">
      <router-link>Hello</router-link>
      <vs-sidebar-item>
        Dashboard
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      active: false
    };
  }
};
</script>
