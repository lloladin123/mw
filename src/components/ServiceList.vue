<template>
  <div class="container">
    <!-- Category buttons -->
    <div class="text-center mt-3 blog-post-edit">
      <button 
        v-for="category in categories" 
        :key="category"
        class="btn btn-primary m-1" 
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>

    <h1 class="text-center mt-5">Our Services</h1>
    <!-- Use the GenericPagination component -->
    <GenericPagination 
      :current-page="currentPage" 
      :total-pages="totalPages" 
      @nextPage="nextPage" 
      @previousPage="previousPage" 
      @goToPage="goToPage"
      :visiblePageCount="visiblePageCount"  
    />

    <!-- Display the paginated service items -->
    <div v-if="paginatedServices.length > 0" class="row mt-4">
      <div class="col-md-4" v-for="service in paginatedServices" :key="service.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ service.name }}</h5>
            <p class="card-text">{{ service.description }}</p>
            <p class="card-text">Price: {{ service.price }} kr</p>
            <p class="card-text">Category: {{ service.category }}</p>
          </div>
          <img class="card-img-top" :src="service.image" :alt="service.name + ' Image'">
          <div class="blog-post-edit w-100">
            <button class="btn btn-md btn-primary">Create</button>
            <button class="btn btn-md btn-primary">Delete</button>
            <button class="btn btn-md btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      No service with that category
    </div>
  </div>
</template>

<script>
import GenericPagination from './GenericPagination.vue';

export default {
  name: 'ServiceList',
  data() {
    return {
      selectedCategory: "",
      currentPage: 1, // Current page number
      totalPages: 0, // Total number of pages
      visiblePageCount: 2, // Set the value you want for visiblePageCount
    };
  },
  components: {
    GenericPagination
  },
  computed: {
    categories() {
      return this.$store.getters.allCategories;
    },
    filteredServices() {
      const allServices = this.$store.getters.allServices;

      if (!this.selectedCategory || this.selectedCategory === 'All Categories') {
        return allServices;
      } else {
        return allServices.filter(service => service.category === this.selectedCategory);
      }
    },
    // Calculate paginated services
    paginatedServices() {
      const startIndex = (this.currentPage - 1) * this.visiblePageCount;
      const endIndex = startIndex + this.visiblePageCount;
      return this.filteredServices.slice(startIndex, endIndex);
    }
  },
  methods: {
    async selectCategory(category) {
      await this.$store.dispatch('selectCategory', category);
      this.$store.commit('setSelectedCategory', category);
      this.selectedCategory = this.$store.getters.selectedCategory;
      this.currentPage = 1; // Reset to the first page when category changes
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    }
  },
  watch: {
    // Watch for changes in filteredServices and recalculate total pages
    filteredServices: {
      handler() {
        this.totalPages = Math.ceil(this.filteredServices.length / this.visiblePageCount);
        if (this.currentPage > this.totalPages) {
          this.currentPage = this.totalPages;
        }
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
p {
  color: black;
}
a {
  color: black;
}
.card {
  margin-bottom: 20px;
}
</style>
