// import api from '../../api/loginHelper';
import axios from 'axios';

const state = {
    token: window.localStorage.getItem('token')
    // token: null
};

const getters = {
    // isLoggedIn: state => !!state.token
    isLoggedIn () {
        return !!state.token
    }
};

const actions =  {
    login: () => {
        window.localStorage.token = state.token;
    },
    async fetchSample({ commit }) {
        // const response = await axios.get(
        //   "http://localhost:8085/sample"
        // );
        commit("setToken", "true");
        console.log("hello from store fetchSample action");
        window.localStorage.token = state.token;
    },
    logout: ({ commit }) => {
        // 'commit' is used to call the mutation 'setToken'
        commit('setToken', null);
        window.localStorage.removeItem('token');
        console.log('logged out clicked')
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}