import Vue from 'vue';
import Vuex from 'vuex';
import drawings from './modules/drawings';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: true,
  state: {},
  modules: {
    drawings,
  }
});