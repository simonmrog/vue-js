<template>
  <div>
    <h1>Product List</h1>
    <span v-if="loading">Loading....</span>
    <ul  v-else class="product-list">
      <li :key="product.id" v-for="product in products">
        {{ product.title }} - ${{ product.price }} - {{ product.inventory }}
        <button
          :disabled="!productInStock(product)"
          @click="addProductToCart(product)"
        >
          Add To Cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapGetters("products", {
      products: "getProducts",
      productInStock: "productInStock"
    })
  },
  methods: {
    addProductToCart: function(product) {
      this.$store.dispatch("cart/addProductToCart", product);
    }
  },
  created: function() {
    this.$store.dispatch("products/fetchProducts")
      .then(() => {
        this.loading = false
      });
  }
};
</script>

<style scoped>
.product-list li {
  list-style: none;
}
</style>
