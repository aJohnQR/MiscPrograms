const state = {
  event: {
    Name: "",
    User: "",
    Organization: "",
    Category: "",
    Location: "",
    Attending: 0,
    Capacity: 0,
    StartTime: "",
    EndTime: "",
    Date: "",
    Comment: ""
  }
};

const getters = {
  Event: state => state.event
};

const actions = {
  fetchEvent({ commit }, newEvent) {
    commit("setEvent", newEvent);
  }
};

const mutations = {
  setEvent(state, newEvent){
    state.event = newEvent;
  } 
};

export default {
  state,
  getters,
  actions,
  mutations
};
