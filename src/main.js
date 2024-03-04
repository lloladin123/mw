import { createApp } from 'vue';
import App from './App.vue';
import router from './router/vue-router.js';
import store from './store'; // Import your Vuex store
import '../src/assets/css/global.css'; // Import the global stylesheet

createApp(App).use(router).use(store).mount('#app');
