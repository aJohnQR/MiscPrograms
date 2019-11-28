const state = {
  newEventDialog: false
};

const getters = {
  NewEventDialog: state => state.newEventDialog
};

const actions = {
  changeNewEventDialog({ commit }) {
    commit("changeNewEventDialog");
  }
};

const mutations = {
  changeNewEventDialog: state => (state.newEventDialog = !state.newEventDialog)
};

export default {
  state,
  getters,
  actions,
  mutations
};
