<template>
  <div class="container-fluid">
    <div v-if="blogPost" class="blog-post">
      <h2>{{ blogPost.title }}</h2>
      <img class="blogImg" :src="blogPost.image" alt="Blog Image">
      <p class="text-muted">{{ blogPost.date }}</p>
      <p>{{ blogPost.content }}</p>
      <div class="blog-post-edit w-100">
        <router-link class="btn btn-md btn-primary" :to="'/CreatePost'">Create</router-link>
        <button class="btn btn-md btn-primary" @click="showDeleteConfirmation">Delete</button>
        <button class="btn btn-md btn-primary">Update</button>
      </div>
      <DeletePost v-if="showConfirmation" :post="blogPost" @cancel="cancelDelete" @confirm="deletePost" />
    </div>
    <div v-else>
      ....loading
    </div>
  </div>
</template>

<script>
import DeletePost from './DeletePost.vue';

export default {
  name: 'BlogPost',
  components: {
    DeletePost
  },
  props: {
    msg: String
  },
  data() {
    return {
      blogPost: null,
      showConfirmation: false
    };
  },
  methods: {
    fetchBlogPost() {
      const id = Number(this.$route.query.Id);
      const blogPost = this.$store.getters.getBlogById(id);
      this.blogPost = blogPost;
    },
    showDeleteConfirmation() {
      this.showConfirmation = true;
    },
    cancelDelete() {
      this.showConfirmation = false;
    },
    deletePost() {
      this.$store.dispatch('deleteBlog', this.blogPost.id);
      this.showConfirmation = false;
    }
  },
  mounted() {
    this.fetchBlogPost();
  }
};
</script>
<style scoped>
.headerImg{
  width: 50%;
}

p {
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
