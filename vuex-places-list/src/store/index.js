import Vue from "vue";
import Vuex from "vuex";
import places from "@/api/places";

Vue.use(Vuex);

const myPlugin = store => {
  store.dispatch("getPlacesFromAPI");
  store.subscribe((mutation, state) => {
    if (mutation.type == "deletePlace" && state.placesList.length <= 2) {
      console.log("Pidiendo Correos")
      store.dispatch("getPlacesFromAPI");
    }
  });
};

const store = new Vuex.Store({
  plugins: [myPlugin],
  state: {
    placesList: [],
    isLoading: true,
    actualPlace: {},
  },
  getters: {
    placesList: state => state.placesList,
    isLoading: state => state.isLoading
  },
  actions: {
    getPlacesFromAPI: async context => {
      context.commit("setLoading", true);
      const placesList = await places();
      context.commit("addPlaces", placesList);
      context.commit("setLoading", false);
    },
    deletePlace: (context, placeId) => {
      context.commit("deletePlace", placeId);
    }
  },
  mutations: {
    setLoading: (state, isLoading) => {
      state.isLoading = isLoading;
    },
    addPlaces: (state, places) => {
      state.placesList = state.placesList.concat(places);
    },
    deletePlace: (state, placeId) => {
      state.placesList = state.placesList.filter(place => place.id !== placeId);
    }
  }
});

export default store;
