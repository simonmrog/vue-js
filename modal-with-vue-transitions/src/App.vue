<template>
  <div class="app">
    <transition name="fade">
      <div class="modal-overlay" v-if="showModal"></div>
    </transition>

    <transition name="fade">
      <div class="modal" v-if="showModal">
        <h1>Title</h1>
        <p>Modal content</p>
        <button @click="toggleModal">CloseModal</button>
      </div>
    </transition>
    <button @click="toggleModal">Open Modal</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      showModal: false
    };
  },
  methods: {
    toggleModal: function() {
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body,
html,
.app {
  width: 100%;
  height: 100vh;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 15px;
  padding: 15px 20px;
  background-color: #005f70;
  color: #fff;
  font-weight: bold;
  z-index: 1;
}

button:hover {
  background-color: #03788d;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal {
  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 3px 3px grey;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 400ms;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
