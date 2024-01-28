<template>
  <div class="HomePage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 m-0 p-0 position-relative">
          <router-link to="/Blog">
            <img src="../assets/Images/blog.png" alt="Image 1" class="img-fluid w-100">
            <div class="overlay"></div>
            <div class="text-container">
              <p>Blog</p>
            </div>
          </router-link>
        </div>
        <div class="col-md-6 m-0 p-0 position-relative">
          <router-link to="/Events">
          <img src="../assets/Images/events.jpg" alt="Image 2" class="img-fluid w-100">
          <div class="overlay"></div>
          <div class="text-container">
            <p>Events</p>
          </div>
        </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 m-0 p-0 position-relative">
          <router-link to="/Library">

          <img src="../assets/Images/hvemerjeg.jpg" alt="Image 3" class="img-fluid w-100">
          <div class="overlay"></div>
          <div class="text-container">
            <p>Bibliotek</p>
          </div>
        </router-link>
        </div>
        <div class="col-md-6 m-0 p-0 position-relative">
          <router-link to="/AboutMe">
          <img src="../assets/Images/Maila.jpg" alt="Image 4" class="img-fluid w-100">
          <div class="overlay"></div>
          <div class="text-container">
            <p>Hvem er jeg</p>
          </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}


ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

img {
  width: 100%;
  height: 45vh;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.3s ease;
  background-color: rgba(0, 0, 0, 0); /* Adjust the alpha value for transparency */
}

.overlay:hover {
  background-color: rgb(0,0,0,0.5);
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 5vh;
  /* Set the text color */
}
</style>
