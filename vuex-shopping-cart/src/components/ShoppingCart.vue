<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul class="product-list">
      <li :key="product.id" v-for="product in products">
        {{ product.title }} - ${{ product.price }} - {{ product.quantity }}
      </li>
      <br />
      <strong>Total Price: ${{ totalPrice.toFixed(2) }}</strong>
      <button @click="checkout">Checkout</button>
      <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters("cart", {
    products: "cart",
    totalPrice: "cartTotals",
    checkoutStatus: "checkoutStatus"
  }),
  methods: {
    // Maps de actions object and then we use destructuring
    // to added it in the component
    ...mapActions("cart", {
      checkout: "checkout"
    })
    // checkout: function() {
    //   this.$store.dispatch("checkout");
    // }
  }
};
</script>

<style scoped>
.product-list li {
  list-style: none;
}
</style>
