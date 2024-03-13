import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FamilyView from '@/views/FamilyView.vue';
import FavoritesView from '@/views/FavoriteView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/specimen/:family',
      name: 'family',
      component: FamilyView,
    },
    {
      path: '/selection',
      name: 'favorites',
      component: FavoritesView,
    },
  ],
});

export default router;
