// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import BlogEntryPage from '../components/BlogEntryPage.vue';
import BlogPost from '../components/BlogPost.vue';
import ServiceList from '../components/ServiceList.vue';
import ContactPage from '../components/ContactPage.vue';
import CreatePost from '../components/CreatePost.vue';
import UpdatePost from '../components/UpdatePost.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/blog', component: BlogEntryPage },
  { path: '/BlogPost', component: BlogPost},
  { path: '/ServiceList', component: ServiceList},
  { path: '/ContactPage', component: ContactPage},
  { path: '/CreatePost', component: CreatePost},
  { path: '/UpdatePost', component: UpdatePost},


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
