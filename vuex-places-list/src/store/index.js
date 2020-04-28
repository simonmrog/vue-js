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
    actualPlace: {},
  },
  getters: {
    placesList: state => state.placesList,
    message: state => state.message
  },
  actions: {
    getPlacesFromAPI: async context => {
      const placesList = await places();
      context.commit("addPlaces", placesList);
    },
    deletePlace: (context, placeId) => {
      context.commit("deletePlace", placeId);
    }
  },
  mutations: {
    addPlaces: (state, places) => {
      state.placesList = state.placesList.concat(places);
    },
    deletePlace: (state, placeId) => {
      state.placesList = state.placesList.filter(place => place.id !== placeId);
    }
  }
});

export default store;
