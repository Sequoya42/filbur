import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../services/axios';
import drawings from './modules/drawings';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: true,
  state: {
    filbur: ''
  },
  actions: {
    setFilbur: ({ commit }, t) => {
      console.log('setFilbur called');
      localStorage.setItem('filbur', t);
      commit('set_filbur');
      axios.defaults.headers.common['authorization'] = localStorage.getItem('filbur');
    }
  },
  mutations: {
    set_filbur: (state, t) => {
      state.filbur = t;
    }
  },
  modules: {
    drawings,
  }
});