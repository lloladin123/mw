// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/vue-router.js';
import '../src/assets/css/global.css'; // Import the global stylesheet


createApp(App).use(router).mount('#app');