const state = {
  ShowList: false
};

const getters = {
  ShowList: state => state.ShowList
};

const actions = {
  changeView({ commit }) {
    commit("changeView");
  }
};

const mutations = {
  changeView: state => (state.ShowList = !state.ShowList)
};

export default {
  state,
  getters,
  actions,
  mutations
};
