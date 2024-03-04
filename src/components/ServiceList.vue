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

    <!-- Service cards -->
    <div v-if="filteredServices.length > 0" class="row mt-4">
      <div class="col-md-4" v-for="service in filteredServices" :key="service.id">
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
export default {
  name: 'ServiceList',
  data() {
    return {
      selectedCategory: ""
    };
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
    }
  },
methods: {
  async selectCategory(category) {
    await this.$store.dispatch('selectCategory', category); // Wait for the action to complete
    console.log(this.$store.getters.selectedCategory); // Now it should have the updated value
    this.$store.commit('setSelectedCategory', category);
    this.selectedCategory = this.$store.getters.selectedCategory
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
