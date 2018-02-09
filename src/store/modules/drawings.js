import axios from '../../services/axios';

const state = {
  selected: 'none',
  all: [],
  filtered: [],
  categories: []
};

const getters = {
  getAll: state => state.all,
  filtered: state => state.filtered,
  drawLength: state => state.all.length,
  selected: state => state.selected,
  categories: state => state.categories,

};

const actions = {
  getDrawings({ commit }) {
    return axios.get('/drawings').then(d => {
      commit('fetch_drawings', d);
    });
  },

  selectDrawing({ commit }, d) {
    commit('select_drawing', d);
  },

  filterByCat({ commit }, c) {
    commit('filter_by_cat', c);
  }
};

const mutations = {
  fetch_drawings: (state, d) => {
    d.data.forEach(e => e.fpath = `http://localhost:4200/${e.path}`)
    state.all = d.data;
    state.filtered = d.data;
    state.categories = d.data.map(e => e.category);
    state.categories.unshift('all');
    state.categories = state.categories.filter((e, i) => state.categories.indexOf(e) == i)
  },

  select_drawing: (state, d) => {
    state.selected = d;
  },

  filter_by_cat: (state, c) => {
    if (c === 'all')
      state.filtered = state.all;
    else
      state.filtered = state.all.filter(e => e.category == c);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};