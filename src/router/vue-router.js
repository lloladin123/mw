// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import BlogEntryPage from '../components/BlogEntryPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/blog', component: BlogEntryPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
