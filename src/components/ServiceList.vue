<template>
  <div class="container">

        <!-- Category buttons -->
    <div class="text-center mt-3 blog-post-edit">
      <button class="btn btn-primary m-1">Category 1</button>
      <button class="btn btn-primary m-1">Category 2</button>
      <button class="btn btn-primary m-1">Category 3</button>
      <button class="btn btn-primary m-1">Category 4</button>
      <button class="btn btn-primary m-1">Category 5</button>
      <button class="btn btn-primary m-1">Category 6</button>
      <button class="btn btn-primary m-1">Category 7</button>
      <button class="btn btn-primary m-1">Category 8</button>
      <button class="btn btn-primary m-1">Category 9</button>
      <button class="btn btn-primary m-1">Category 10</button>
      <button class="btn btn-primary m-1">Category 11</button>
      <button class="btn btn-primary m-1">Category 12</button>
      <button class="btn btn-primary m-1">Category 13</button>
      <button class="btn btn-primary m-1">Category 14</button>
      <button class="btn btn-primary m-1">Category 15</button>
    </div>
    <h1 class="text-center mt-5">Our Services</h1>
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
    <div class="row mt-4">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Service 1</h5>
            <p class="card-text">Description of service 1.</p>
            <p class="card-text">Price 200 kr</p>
          </div>
          <img class="card-img-top" src="https://via.placeholder.com/150" alt="Service 1 Image">
          <div class="blog-post-edit w-100">
            <button class="btn btn-md btn-primary">Create</button>
            <button class="btn btn-md btn-primary">Delete</button>
            <button class="btn btn-md btn-primary">Update</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Service 2</h5>
            <p class="card-text">Description of service 2.</p>
            <p class="card-text">Price 200 kr</p>
          </div>
          <img class="card-img-top" src="https://via.placeholder.com/150" alt="Service 2 Image">
          <div class="blog-post-edit w-100">
            <button class="btn btn-md btn-primary">Create</button>
            <button class="btn btn-md btn-primary">Delete</button>
            <button class="btn btn-md btn-primary">Update</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Service 3</h5>
            <p class="card-text">Price 200 kr</p>
            <p class="card-text">Description of service 3.</p>
          </div>
          <img class="card-img-top" src="https://via.placeholder.com/150" alt="Service 3 Image">
          <div class="blog-post-edit w-100">
            <button class="btn btn-md btn-primary">Create</button>
            <button class="btn btn-md btn-primary">Delete</button>
            <button class="btn btn-md btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceList',
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
