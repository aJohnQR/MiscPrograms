const state = {
  UserInfo: { username: "gagos007", password: "", organization: "Student" }
};

const getters = {
  UserInfo: state => state.UserInfo
};

const actions = {
  updateUserInfo({ commit }) {
    commit("updateUserInfo");
  }
};

const mutations = {
  updateUserInfo(state, username, password) {
    state.UserInfo = { username, password };
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
