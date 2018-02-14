import axios from 'axios';
import store from '../store';
import router from '../router';

let ax = axios.create({
  baseURL: 'http://localhost:4200/api'
});

ax.interceptors.request.use(config => {
  config.headers.common['authorization'] = localStorage.getItem('filbur') || '';
  return config
}, function(error) {
  return Promise.reject(error);
})

ax.interceptors.response.use((response) => {
  return response
}, function(error) {
  if (error.response.status === 401) {
    store.dispatch('setFilbur');
    router.push({ name: 'Filbur' });
  } else {
    return Promise.reject(error);
  }
})

export default ax;