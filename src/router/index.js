import Vue from 'vue';
import Router from 'vue-router';
import Presentation from '@/components/Presentation';
import Drawings from '@/components/Drawings';
import Upload from '@/components/uploadDrawing';
import Update from '@/components/updateDrawing';
import Filbur from '@/components/Filbur';
import store from '@/store';

Vue.use(Router);
// TODO
/*
	update resizable/orderable
	Aspect ratio
	multiple per lign
	nicer upload
*/
const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Presentation',
      component: Presentation
    },
    {
      path: '/oeuvres/:name',
      name: 'Drawings',
      component: Drawings,
      beforeEnter: (to, from, next) => {
        store.dispatch('filterByCat', to.params.name);
        next();
      }
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload,
      meta: { requiresAuth: true }
    },
    {
      path: '/update',
      name: 'update',
      component: Update,
      meta: { requiresAuth: true }
    },
    {
      path: '/Filbur',
      name: 'Filbur',
      component: Filbur,
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
        name: 'Presentation',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;