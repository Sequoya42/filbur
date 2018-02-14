import Vue from 'vue';
import Router from 'vue-router';
import Presentation from '@/components/Presentation';
import Drawings from '@/components/Drawings';
import Upload from '@/components/uploadDrawing';
import Update from '@/components/updateDrawing';
import Filbur from '@/components/Filbur';
import BackOffice from '@/components/BackOffice';
import store from '@/store';
import axios from '@/services/axios';

Vue.use(Router);
const scrollBehavior = function(to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
      if (document.querySelector(to.hash)) {
        return position
      }
      return false
    }
  }
}

const router = new Router({
  mode: 'history',
  scrollBehavior,
  routes: [{
      path: '/',
      name: 'Presentation',
      component: Presentation
    },
    {
      path: '/oeuvres/:category',
      name: 'Drawings',
      component: Drawings,
      beforeEnter: (to, from, next) => {
        store.dispatch('filterByCat', to.params.category);
        next();
      }
    },
    {
      path: '/Filbur',
      name: 'Filbur',
      component: Filbur,
    },
    {
      path: '/BackOffice',
      name: 'BackOffice',
      component: BackOffice,
      meta: { requiresAuth: true }
    },
    {
      path: '*',
      redirect: { name: 'Presentation' }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const logged = localStorage.getItem('filbur');
    if (!logged) {
      next({
        name: 'Filbur',
        query: { redirect: to.fullPath }
      })
    } else {
      return axios.get('/verifyToken').then(res => {
        next();
      }).catch(err => {
        next({
          name: 'Filbur',
          query: { redirect: to.fullPath }
        })
      })
    }
  } else {
    next()
  }
})

export default router;