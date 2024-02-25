<template>
  <div class="container-fluid">
    <div class="blog-post">
      <h2>Sample Blog Post</h2>
      <img class="blogImg" src="../assets/Images/blog.png">
      <p class="text-muted">Published on January 1, 2023</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla ut ullamcorper aliquet...</p>
      <div class="blog-post-edit w-100">
            <button class="btn btn-md btn-primary">Create</button>
            <button class="btn btn-md btn-primary">Delete</button>
            <button class="btn btn-md btn-primary">Update</button>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    msg: String
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

.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center; /* Added to vertically center the content */
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
