// State object containing categories and services
const state = {
  categories: {
    list: ['All Categories', 'Category1', 'Category2', 'Category3', 'Category4'],
    selected: "Category1"
  },
  services: {
    list: [
      {
        id: 1,
        name: 'Service 1',
        description: 'Description of service 1.',
        price: 200,
        category: 'Category1',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        name: 'Service 2',
        description: 'Description of service 2.',
        price: 200,
        category: 'Category2',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        name: 'Service 3',
        description: 'Description of service 3.',
        price: 200,
        category: 'Category3',
        image: 'https://via.placeholder.com/150'
      }
    ],
    selected: null
  }
};

const getters = {
  // Getter to retrieve all services
  allServices: state => state.services.list,
  // Getter to retrieve a service by ID
  getServiceById: state => id => {
    return state.services.list.find(service => service.id === id);
  },
  // Getter to retrieve all categories
  allCategories: state => state.categories.list,
  // Getter to retrieve selected category
  selectedCategory: state => state.categories.selected
};


const actions = {
  // Example action to fetch services from an API
  fetchServices({ commit }) {
    // Simulate fetching data from an API
    // Replace this with actual API call
    setTimeout(() => {
      const fetchedServices = [
        {
          id: 4,
          name: 'New Service',
          description: 'This is a new service fetched from an API.',
          price: 300,
          category: 'Category4',
          image: 'https://via.placeholder.com/150'
        }
      ];
      
      // Set the fetched services
      commit('setServices', fetchedServices);
    }, 1000);
  },
  // Action to select a category
  selectCategory({ commit }, category) {
    commit('setSelectedCategory', category);
    // Additional logic if needed
  }
};

const mutations = {
  // Mutation to set services
  setServices: (state, services) => (state.services.list = services),
  // Mutation to set a single service by ID
  setService: (state, service) => (state.services.selected = service),
  // Mutation to set the selected category
  setSelectedCategory: (state, category) => {
    state.categories.selected = category;
  }
};

// Export the state object, getters, actions, and mutations
export default { state, getters, actions, mutations };
