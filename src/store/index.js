import { createStore } from 'vuex';
import blogModule from './blogStore.js'; // Import your blog Vuex module
import serviceModule from './serviceStore.js'; // Import your blog Vuex module

// Create Vuex store instance
const store = createStore({
  modules: {
    blog: blogModule, // Register your blog Vuex module
    service: serviceModule,
    // You can add more modules here if you have them
  }
});

export default store; // Export the Vuex store instance
