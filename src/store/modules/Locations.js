const state = {
  Locations: ["ECS", "PG6", "GC"]
};

const getters = {
  Locations: state => state.Locations
};

const actions = {
  updateLocations({ commit }) {
    commit("updateLocations");
  }
};

const mutations = {
  updateLocations: (state, Locations) => (state.Locations = Locations)
};

export default {
  state,
  getters,
  actions,
  mutations
};
