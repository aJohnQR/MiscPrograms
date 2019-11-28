const state = {
  LogInStatus: true
};

const getters = {
  LogInStatus: state => state.LogInStatus
};

const actions = {
  changeLoginState({ commit }){
    commit("changeLoginState");
  }
};

const mutations = {
  changeLoginState: state => (state.LogInStatus = !state.LogInStatus)
};

export default {
  state,
  getters,
  actions,
  mutations
};
