import Vue from 'vue';
import Router from 'vue-router';
import Presentation from '@/components/Presentation';
import Drawings from '@/components/Drawings';
import Upload from '@/components/uploadDrawing';
import Update from '@/components/updateDrawing';
import Filbur from '@/components/Filbur';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Presentation',
      component: Presentation
    },
    {
      path: '/drawings',
      name: 'Drawings',
      component: Drawings
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