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
      <div id="blogSideContainer" class="col-3">
        <div id="BlogSideInner" class="m-2">
          <h2>Seneste opslag</h2>
          <ul>
            <li><router-link to="/BlogPost?Id=1">BlogPost1</router-link></li>
            <li><router-link to="/BlogPost?Id=2">BlogPost2</router-link></li>
            <li><router-link to="/BlogPost?Id=3">BlogPost3</router-link></li>
            <li><router-link to="/BlogPost?Id=4">BlogPost4</router-link></li>
            <li><router-link to="/BlogPost?Id=5">BlogPost5</router-link></li>
          </ul>
          <h2>Arkiv</h2>
          <ul>
            <li><router-link to="/BlogPage?Year=2023">2023</router-link></li>
            <li><router-link to="/BlogPage?Year=2022">2022</router-link></li>
            <li><router-link to="/BlogPage?Year=2021">2021</router-link></li>
            <li><router-link to="/BlogPage?Year=2020">2020</router-link></li>
            <li><router-link to="/BlogPage?Year=2019">2019</router-link></li>
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
  justify-content: flex-end; /* Align buttons to the end */
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
