<template>
  <div class="container-fluid">
    <div v-if="blogPost" class="blog-post">
      <h2>{{ blogPost.title }}</h2>
      <img class="blogImg" :src="blogPost.image" alt="Blog Image">
      <p class="text-muted">{{ blogPost.date }}</p>
      <p>{{ blogPost.content }}</p>
      <div class="blog-post-edit w-100">
        <button class="btn btn-md btn-primary">Create</button>
        <button class="btn btn-md btn-primary">Delete</button>
        <button class="btn btn-md btn-primary">Update</button>
      </div>
    </div>
    <div v-else>
      ....loading
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    msg: String
  },
  data() {
    return {
      blogPost: null
    };
  },
  methods: {
    fetchBlogPost() {
  const id = Number(this.$route.query.Id);
  console.log('Id:', id);
  const blogPost = this.$store.getters.getBlogById(id);
  console.log('blogPost:', JSON.stringify(blogPost));
  this.blogPost = blogPost; // Assigning to Vue data property
}

  },
  mounted() {
    this.fetchBlogPost();
  }
}
</script>

<style scoped>
.headerImg{
  width: 50%;
}

p {
  color: black;
}

a {
  color: black;
}

.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Added to vertically center the content */
}

.blog-post {
  text-align: center;
}

.blogImg {
  width: 40%;
}

.blog-post-edit button {
  background-color: #886588ff;
  color: white;
}
</style>
