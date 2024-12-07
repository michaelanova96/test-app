import { createRouter, createWebHistory } from 'vue-router';
import { getCategoryView } from '../views/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { path: '/category/for-dogs' }
    },
    {
      path: '/category/:id',
      name: 'category',
      component: getCategoryView
    },
    {
      path: '/category',
      redirect: { path: '/category/for-dogs' }
    }
  ]
});

export default router;
