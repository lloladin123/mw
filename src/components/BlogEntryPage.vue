<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Search Bar -->
      <div id="blogContainer" class="col-9">
        <div class="w-100">
          <div class="d-flex justify-content-between align-items-center m-3 mb-3">
            <router-link class="btn btn-md btn-primary" :to="'/CreatePost'">Create</router-link>
            <input v-model="searchQuery" @input="performSearch" type="text" placeholder="Search blog posts..."
              class="form-control blogSearch" />
          </div>
          <!-- Pagination -->
          <GenericPagination :current-page="currentPage" :total-pages="totalPages" @nextPage="nextPage"
            @previousPage="previousPage" @goToPage="goToPage" />
            <h1 class="ms-3" v-if="selectedYear">År {{ selectedYear }}</h1>
            <h1 class="ms-3" v-else>Blog side</h1>
        </div>
        <!-- Render blog posts based on the current page -->
        <div v-for="(blog, index) in paginatedPosts" :key="index" class="blog-post">
          <router-link :to="'/BlogPost?Id=' + blog.id">
            <div>
              <h2>{{ blog.title }}</h2>
              <img class="blogImg" :src="blog.image">
              <p class="text-muted">Published on {{ blog.date }}</p>
              <p>{{ blog.content }}</p>
              <div class="blog-post-edit w-100">
                <router-link class="btn btn-md btn-primary" :to="'/CreatePost'">Create</router-link>
                <button class="btn btn-md btn-primary" @click.prevent="showDeleteConfirmation(blog)">Delete</button>
                <router-link :to="'/UpdatePost?Id=' + blog.id" class="btn btn-md btn-primary">Update</router-link>
              </div>
            </div>
          </router-link>
          <DeletePost v-if="showConfirmation && blog === blogToDelete" :post="blog" @cancel="cancelDelete"
            @confirm="deletePost" />
        </div>
      </div>
      <div id="blogSideContainer" class="col-3">
        <div id="BlogSideInner" class="m-2">
          <h2>Seneste opslag</h2>
          <ul>
            <!-- Render links to recent blog posts -->
            <li v-for="(blog, index) in recentPosts" :key="index">
              <router-link :to="`/BlogPost?Id=${blog.id}`">{{ blog.title }}</router-link>
            </li>
          </ul>
          <h2>Arkiv</h2>
          <ul>
            <!-- Render links to blog posts grouped by year -->
            <li v-for="year in uniqueYears" :key="year">
              <a @click="filterPostsByYear(year)">{{ year }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeletePost from './DeletePost.vue';
import GenericPagination from './GenericPagination.vue';

export default {
  name: 'BlogEntryPage',
  props: {
    msg: String
  },
  components: {
    DeletePost,
    GenericPagination
  },
  data() {
    return {
      // Add data properties here
      showConfirmation: false,
      blogToDelete: null,
      searchQuery: '',
      currentPage: 1, // Current page number
      totalPages: 0, // Total number of pages
      itemsPerPage: 3, // Number of items per page
      filteredPosts: [], // Initialize filteredPosts array
      selectedYear: null // Store the selected year
    };
  },
  computed: {
    blogs() {
      return this.$store.getters.allBlogs;
    },
    // Example computed property to get recent blog posts (assuming sorted by date)
    recentPosts() {
      return this.blogs.slice(0, 5); // Get the first 5 recent posts
    },
    uniqueYears() {
      const years = new Set();
      this.blogs.forEach(blog => {
        const year = new Date(blog.date).getFullYear();
        years.add(year);
      });
      return Array.from(years).sort((a, b) => b - a); // Sort in descending order
    },
    // Filtered blog posts to display based on the current page
    paginatedPosts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredPosts.slice(startIndex, endIndex);
    }
  },
  methods: {
    // Example method for search functionality
    performSearch() {
      // Implement search functionality here
    },
    showDeleteConfirmation(blog) {
      // Show delete confirmation dialog
      this.blogToDelete = blog;
      this.showConfirmation = true;
    },
    cancelDelete() {
      // Cancel delete operation
      this.showConfirmation = false;
      this.blogToDelete = null;
    },
    deletePost() {
      this.$store.dispatch('deleteBlog', this.blogToDelete.id)
        .then(() => {
          // Blog post deleted successfully
          // Reset the values
          this.blogToDelete = null;
          this.showConfirmation = false;
          // Recalculate total pages
          this.totalPages = Math.ceil(this.filteredPosts.length / this.itemsPerPage);
        });
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
    // Method to handle page navigation
    goToPage(page) {
      // Set currentPage to the clicked page
      this.currentPage = page;
      // You might want to fetch paginated data here based on the new currentPage
    },
// Method to filter posts by year
filterPostsByYear(year) {
  // Update the selectedYear
  this.selectedYear = year;
  // Filter blog posts by the specified year
  this.filteredPosts = this.blogs.filter(blog => {
    return new Date(blog.date).getFullYear() === year;
  });
  // Recalculate total pages based on the number of filtered posts
  this.totalPages = Math.ceil(this.filteredPosts.length / this.itemsPerPage);
  // Reset currentPage to 1 if the total pages are less than the current page
  if (this.currentPage > this.totalPages) {
    this.goToPage(1);
  }
}

  },
  mounted() {
    // Fetch blogs when the component is mounted
    this.$store.getters.allBlogs;
    // Initialize filteredPosts array
    this.filteredPosts = this.blogs;
    // Calculate the total number of pages based on the number of blog posts
    this.totalPages = Math.ceil(this.filteredPosts.length / this.itemsPerPage);
  }
}
</script>



<style scoped>
p {
  color: black;
}

a {
  color: black;
}

.btn {
  color: white;
}

#blogContainer {
  display: flex;
  flex-wrap: wrap;
  /* Enable wrapping for multiple rows */
}

.blog-post {
  margin: 3vh;
  display: flex;
  flex-direction: column;
}

.blog-post h2 {
  font-size: 4vh;
}

.blog-post p {
  font-size: 3vh;
  width: 80%;
}

.blog-post-edit button {
  background-color: #886588ff;
  color: white;
}

#blogContainer .blog-post:nth-child(odd):not(:first-child):not(:last-child) {
  display: flex;
  align-items: flex-end;
}

#blogContainer .blog-post:nth-child(odd) .blog-post-edit {
  display: flex;
  justify-content: flex-end;
  /* Align buttons to the end */
}

.blogImg {
  width: 80%;
  /* Adjust the width as needed */
}

#blogSideContainer {
  border-left: 1px solid #886588ff;
  padding: 0;
  margin: 0;
}

#BlogSideInner ul {
  padding: 0;
  margin: 0;
}

#BlogSideInner h2 {
  color: black;
}

#BlogSideInner ul li {
  list-style: none;
  margin: calc(1vw + 1vh);
}

#BlogSideInner h2 {
  font-size: calc(1vw + 1.5vh);
}

#BlogSideInner ul li a {
  color: black;
  transition: color 0.1s ease-in-out 0.1s;
  font-size: calc(1vw + 1.5vh);
}

#BlogSideInner ul li a:hover,
#BlogSideInner ul li a:focus,
#BlogSideInner ul li a:active {
  color: #886588ff;
}
</style>
