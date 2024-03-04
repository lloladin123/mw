<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Search Bar -->
      <div id="blogContainer" class="col-9">
        <div class="w-100">
          <input v-model="searchQuery" @input="performSearch" type="text" placeholder="Search blog posts..."
            class="form-control blogSearch" />
          <div class="d-flex justify-content-center blogPagination"> <!-- Center-align pagination items -->
            <a class="paginationNextSet" href="/">&lt;&lt;</a>
            <a href="/">&lt;</a>
            <router-link to="/BlogPage?Page=1">1</router-link>
            <router-link to="/BlogPage?Page=2">2</router-link>
            <router-link to="/BlogPage?Page=3">3</router-link>
            <router-link to="/BlogPage?Page=4">4</router-link>
            <router-link to="/BlogPage?Page=5">5</router-link>
            <a href="/">></a>
            <a class="paginationNextSet" href="/">>></a>

          </div>
          </div>
          <router-link :to="'/BlogPost?Id=' + blog.id" v-for="(blog, index) in filteredPosts" :key="index" class="blog-post">
    <div>
      <h2>{{ blog.title }}</h2>
      <img class="blogImg" :src="blog.image">
      <p class="text-muted">Published on {{ blog.date }}</p>
      <p>{{ blog.content }}</p>
      <div class="blog-post-edit w-100">
        <button class="btn btn-md btn-primary">Create</button>
        <button class="btn btn-md btn-primary">Delete</button>
        <button class="btn btn-md btn-primary">Update</button>
      </div>
    </div>
  </router-link>

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
              <router-link :to="`/Blog?Year=${year}`">{{ year }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogEntryPage',
  props: {
    msg: String
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
    filteredPosts() {
      const yearParam = this.$route.query.Year;
      if (yearParam) {
        const year = parseInt(yearParam);
        if (!isNaN(year)) {
          // If the year is valid, filter the blog posts by that year
          return this.blogs.filter(blog => new Date(blog.date).getFullYear() === year);
        }
      }
      // If the 'Year' parameter is not provided or invalid, return all blog posts
      return this.blogs;
    }
  },
  methods: {
    // Example method for search functionality
    performSearch() {
      // Implement search functionality here
    },
    filterPostsByYear(year) {
      // Filter blog posts by the specified year
      this.filteredPosts = this.blogs.filter(blog => {
        return new Date(blog.date).getFullYear() === year;
      });
    }
  },
  mounted() {
    // Fetch blogs when the component is mounted
    this.$store.getters.allBlogs;
    // Now you can use allBlogs variable to access the value of the getter
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
