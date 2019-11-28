const state = {
  FilteredEventList: []
};

const getters = {
  FilteredEventList: state => state.FilteredEventList
};

const actions = {
  updateFilteredEventList({ commit }) {
    commit("updateFilteredEventList");
  }
};

const mutations = {
  updateFilteredEventList: (state, FilteredEventList) => (state.FilteredEventList = FilteredEventList)
};

export default {
  state,
  getters,
  actions,
  mutations
};
