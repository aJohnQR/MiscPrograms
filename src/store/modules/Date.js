const state = {
  Date: new Date().toISOString().substr(0, 10)
};

const getters = {
  Date: state => state.Date
};

const actions = {
  updateDate({ commit }) {
    commit("updateDate");
  }
};

const mutations = {
  updateDate: (state, Date) => (state.Date = Date)
};

export default {
  state,
  getters,
  actions,
  mutations
};
