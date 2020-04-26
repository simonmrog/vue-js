import shop from "@/api/shop";

export default {
  namespaced: true,
  state: {
    items: [],
    checkoutStatus: ""
  },
  getters: {
    cart: (state, getters, rootState) => {
      return state.items.map(cartItem => {
        const product = rootState.products.items.find(
          product => product.id === cartItem.id
        );
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        };
      });
    },
    cartTotals: (state, getters) => {
      return getters.cart.reduce((totals, cartItem) => {
        return totals + cartItem.price * cartItem.quantity;
      }, 0);
    },
    checkoutStatus: (state, getters) => {
      return state.checkoutStatus;
    }
  },
  actions: {
    addProductToCart: (context, product) => {
      const cartItem = context.state.items.find(item => item.id === product.id);
      if (context.rootGetters["products/productInStock"](product) && !cartItem) {
        context.commit("pushProductToCart", product);
      } else context.commit("incrementProductQuantity", cartItem);
      context.commit("products/decrementProductIventory", product, { root: true });
    },
    checkout: context => {
      shop.buyProducts(context.state.items,
        () => {
          context.commit("emptyCart");
          context.commit("setCheckoutStatus", "success");
        },
        () => {
          context.commit("setCheckoutStatus", "failed");
        });
    }
  },
  mutations: {
    pushProductToCart: (state, product) => {
      state.items.push({
        id: product.id,
        quantity: 1
      });
    },
    incrementProductQuantity: (state, cartItem) => {
      cartItem.quantity++;
    },
    setCheckoutStatus: (state, status) => {
      state.checkoutStatus = status;
    },
    emptyCart: state => {
      state.items = [];
    }
  }
};
