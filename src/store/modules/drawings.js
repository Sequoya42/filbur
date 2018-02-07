import axios from 'axios';

const state = {
  selected: 'none',
  all: []
};

const getters = {
  getAll: state => state.all,
  drawLength: state => state.all.length,
  selected: state => state.selected
};

const actions = {
  getDrawings({ commit }) {
    return axios.get('http://localhost:4200/api/drawings').then(d => {
      commit('fetchDrawings', d);
    });
  }
};

const mutations = {
  fetchDrawings: (state, d) => {
    console.log('Should be updated', d.data.length);
    d.data.forEach(e => e.path = `http://localhost:4200/${e.path}`)
    state.all = d.data;
  },
  selectDrawing: (state, d) => {
    state.selected = d;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};