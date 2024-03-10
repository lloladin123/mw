<template>
  <div class="container-fluid">
    <div v-if="blogPost" class="blog-post">
      <h2>Edit Blog Post</h2>
      <form @submit.prevent="updatePost">
        <div class="form-group m-2">
          <label for="title">Title:</label>
          <input type="text" v-model="editedBlog.title" class="form-control" id="title">
        </div>
        <div class="form-group m-2">
          <label for="content">Content:</label>
          <textarea v-model="editedBlog.content" class="form-control" id="content"></textarea>
        </div>
        <div class="form-group m-2">
          <label for="image">Image:</label>
          <input type="file" @change="handleImageUpload" class="form-control-file" id="image">
        </div>
        <div v-if="editedBlog.image">
          <img :src="editedBlog.image" class="img-fluid m-2" alt="Uploaded Image">
        </div>
        <button type="submit" class="btn btn-primary m-2">Update Post</button>
        <router-link :to="'/BlogPost?Id=' + blogPost.id" class="btn btn-secondary m-2">Back to Post</router-link>
      </form>
    </div>
    <div v-else>
      ...loading
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdatePost',
  props: {
    msg: String
  },
  data() {
    return {
      blogPost: null,
      editedBlog: {
        title: '',
        content: '',
        image: ''
      }
    };
  },
  methods: {
    fetchBlogPost() {
      const id = Number(this.$route.query.Id);
      this.blogPost = this.$store.getters.getBlogById(id);
      // Set initial values for the edited blog post
      this.editedBlog.title = this.blogPost.title;
      this.editedBlog.content = this.blogPost.content;
      this.editedBlog.image = this.blogPost.image;
    },
    updatePost() {
      this.$store.dispatch('updateBlog', { id: this.blogPost.id, updatedBlog: this.editedBlog });
      // Redirect to the updated blog post page
      this.$router.push(`/BlogPost?Id=${this.blogPost.id}`);
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      // Convert the image file to a data URL
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.editedBlog.image = reader.result;
      };
    }
  },
  mounted() {
    this.fetchBlogPost();
  }
};
</script>

<style scoped>
/* Add your styles here */

img{
  width: 50%;
}
</style>
