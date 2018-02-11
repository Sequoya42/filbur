import axios from '../../services/axios';

const state = {
  selected: 'none',
  all: [],
  filtered: [],
  updated: [],
  order: [],
  categories: []
};

const getters = {
  getAll: state => state.all,
  filtered: state => state.filtered,
  drawLength: state => state.all.length,
  selected: state => state.selected,
  categories: state => state.categories,
  order: state => state.order,
  updated: state => state.updated,
};

const actions = {
  async getDrawings({ commit }) {
    let x = await axios.get('/drawings');
    x.data.forEach((e, i) => {
      if (e.filename == 'only_for_order_of_drawing.json') {
        commit('fill_order', e.order);
        x.data.splice(i, 1);
      }
    })
    commit('fetch_drawings', x);
  },

  async updateDrawings({ commit, state }) {
    let x = state.all.filter(e => state.updated.indexOf(e.order) !== -1);
    await x.forEach(async function(e) {
      let y = await axios.put('/drawings', e);
    });
    await axios.put('/drawings', { filename: 'only_for_order_of_drawing.json', order: state.order })
  },

  newOrder({ commit }, value) {
    commit('fill_order', value);
  },

  selectDrawing({ commit }, d) {
    commit('select_drawing', d);
  },

  filterByCat({ commit }, c) {
    commit('filter_by_cat', c);
  },

  updateItem({ commit }, d) {
    commit('update_item', d);
  },

};


const mutations = {
  fill_order: (state, d) => {
    const orderDrawing = (a, b) => state.order.indexOf(a.order) - state.order.indexOf(b.order);
    state.order = d;
    state.all = state.all.sort(orderDrawing)
  },

  fetch_drawings: (state, d) => {
    const orderDrawing = (a, b) => state.order.indexOf(a.order) - state.order.indexOf(b.order);
    d.data.forEach(e => e.fpath = `http://localhost:4200/${e.path}`)
    state.all = d.data.sort(orderDrawing);
    state.filtered = d.data;
    state.categories = d.data.map(e => e.category);
    state.categories.unshift('all');
    state.categories = state.categories.filter((e, i) => state.categories.indexOf(e) == i)
  },

  update_item: (state, d) => {
    if (state.updated.indexOf(d.index) === -1)
      state.updated.push(d.index);
    state.all.forEach(e => {
      if (e.order == d.index) {
        e[d.field] = d.value;
      }
    })
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