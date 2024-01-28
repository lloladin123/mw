<template>
  <header>
    <img id="headerImg" src="../src/assets/Images/HeaderEdit.jpg">
    <p id="headerText">Focus on the journey not the desitation</p>
    <nav class="navbar navbar-expand-lg p-0 m-0">
      <div class="container-fluid align-items-start">
        <router-link to="/" class="navbar-brand">
          <img id="logo" src="../src/assets/Images/Logo.png">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end align-items-start" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/OmMw" class="nav-link" exact active-class="active-nav-link">Om MW</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Ydelser" class="nav-link" exact active-class="active-nav-link">Ydelser</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Blog" class="nav-link" exact active-class="active-nav-link">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Events" class="nav-link" exact active-class="active-nav-link">Events</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Kontakt" class="nav-link" exact active-class="active-nav-link">Kontakt</router-link>
            </li>
            <li id="lastNavLink" class="nav-item">
              <router-link to="/bibliotek" class="nav-link" exact active-class="active-nav-link">Bibliotek</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <router-view></router-view>
  <footer>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 m-0 p-0 justify-content-center align-items-start d-flex">
          <ul style="border-bottom: 1px solid #886588ff" class="d-flex">
            <a href="https://www.facebook.com" target="_blank">
              <li class="d-flex align-items-center">
                <img src="../src/assets/Images/FacebookLogo.svg" class="footerSOMELinks" />
              </li>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <li class="d-flex align-items-center">
                <img src="../src/assets/Images/InstagramLogo.svg" class="footerSOMELinks" />
              </li>
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <li class="d-flex align-items-center">
                <img src="../src/assets/Images/LinkedinLogo.svg" class="footerSOMELinks" />
              </li>
            </a>
            <a href="https://twitter.com" target="_blank">
              <li class="d-flex align-items-center">
                <img src="../src/assets/Images/TwitterLogo.svg" class="footerSOMELinks" />
              </li>
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <li class="d-flex align-items-center">
                <img src="../src/assets/Images/YoutubeLogo.svg" class="footerSOMELinks" />
              </li>
            </a>
          </ul>
        </div>
        <div class="col-md-12 m-0 p-0 justify-content-center align-items-start d-flex">
          <ul class="d-flex">
            <router-link to="/kontakt">
              <li>Kontakt</li>
            </router-link>
            <router-link to="/omMW">
              <li>Om MW</li>
            </router-link>
            <router-link to="/omMig">
              <li>Om mig</li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
/* Import Bootstrap CSS */
@import 'bootstrap/dist/css/bootstrap.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  background-color: darkslategray;
  height: 100vh;
}

#headerImg {
  object-fit: cover;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

#headerText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-size: calc(30px + 1vw + 1vh);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

#logo {
  height: auto;
  width: 15vh;
}

.navbar-brand {
  margin-left: 10%;
}

nav {
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

#navbarNav {
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 30%;
  /* border-bottom: 1px #886588ff solid; */

}

.nav-link {
  font-size: 4vh;
  color: white;
  margin-left: 1vh;
  margin-right: 1vh;
  transition: color 0.1s ease-in-out 0.1s;
}

.nav-link:hover,
.nav-link:active,
.nav-link:focus,
.active-nav-link {
  color: #886588ff;
}

#lastNavLink {
  background-color: #886588ff;
  border-radius: 20px;
  opacity: 80%;
}

#lastNavLink:hover,
#lastNavLink:active,
#lastNavLink:focus {
  background-color: transparent;
  color: #886588ff;
}

footer {
  background-color: antiquewhite;
}

footer ul {
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 0;
}

footer ul a {
  color: #886588ff;
}


footer ul a:hover,
footer ul a:active,
footer ul a:focus {
  color: black;
}

footer ul li {
  list-style: none;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 2vw;
  margin-right: 2vw;
  transition: color 0.1s ease-in-out 0.1s;
}

.footerSOMELinks {
  width: 10vh;
  transition: filter 0.3s ease-in-out;
  /* Add a smooth transition effect */
}

.footerSOMELinks:hover {
  filter: brightness(70%);
  /* Apply color overlay on hover */
}

/* Add custom styles here */</style>
