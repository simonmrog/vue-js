import shop from "@/api/shop";

export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    getProducts: (state, getters) => {
      return state.items;
    },
    availableProducts: (state, getters) => {
      return state.items.filter(product => product.inventory > 0);
    },
    productInStock: () => {
      return product => product.inventory > 0;
    }
  },
  actions: {
    fetchProducts: context => {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          context.commit("setProducts", products);
          resolve();
        });
      });
    },
  },
  mutations: {
    setProducts: (state, products) => {
      state.items = products;
    },
    decrementProductIventory: (state, product) => {
      product.inventory--;
    }
  }
};
