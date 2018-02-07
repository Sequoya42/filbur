import Vue from 'vue';
import Router from 'vue-router';
import Presentation from '@/components/Presentation';
import Drawings from '@/components/Drawings';
import Upload from '@/components/upload';
import Update from '@/components/update';
import Filbur from '@/components/Filbur';
Vue.use(Router);

export default new Router({
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
      component: Upload
    },
    {
      path: '/update',
      name: 'update',
      component: Update
    },
    {
      path: '/Filbur',
      name: 'Filbur',
      component: Filbur
    },
    {
      path: '*',
      name: '404',
      component: Presentation
    }
  ]
});