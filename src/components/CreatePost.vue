<template>
  <form @submit.prevent="addBlog" class="container mt-5">
    <div class="form-group m-2">
      <h1>Create Post</h1>
    </div>
    <div class="form-group m-2">
      <input type="text" v-model="title" placeholder="Title" class="form-control">
    </div>
    <div class="form-group m-2">
      <textarea v-model="content" placeholder="Content" class="form-control"></textarea>
    </div>
    <div class="form-group m-2">
      <input type="file" @change="handleImageUpload" accept="image/*" class="form-control-file">
    </div>
    <button type="submit" class="btn btn-primary m-2">Add Blog</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      date: '',
      content: '',
      image: null
    };
  },
  methods: {
    addBlog() {

      const now = new Date();
      const formattedDate = `${now.getFullYear()}-${('0' + (now.getMonth() + 1)).slice(-2)}-${('0' + now.getDate()).slice(-2)} Klokken: ${('0' + now.getHours()).slice(-2)}:${('0' + now.getMinutes()).slice(-2)}`;

      const newBlog = {
        id: Date.now(), // Generate a unique ID
        title: this.title,
        date: formattedDate,
        content: this.content,
        image: this.image // Assign the selected image
      };
      this.$store.commit('addBlog', newBlog);
      // Optionally, you can dispatch an action to save the new post to the server
      // this.$store.dispatch('saveBlog', newBlog);
      this.$router.push('/Blog'); // Redirect to the blogs page
    },
    handleImageUpload(event) {
      // Access the uploaded file
      const file = event.target.files[0];
      // Convert the file to a data URL
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Set the data URL as the image
        this.image = reader.result;
      };
    }
  }
};
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
