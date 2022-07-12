<template>
  <div class="App">
    <!-- header -->
    <header class="container" style="height: 80px">
      <HeaderComponent />
    </header>
    <!-- main -->
    <div class="container">
      <div class="row">
        <!-- maincolumn-->
        <div class="col-sm-12 col-md-9">
          <nav>
            <router-link to="/">Top</router-link> |
            <router-link to="/news">News</router-link> |
            <router-link to="/dining">Dining</router-link> |
            <router-link to="/traffic">traffic</router-link> |
          </nav>
          <router-view />
        </div>
        <!-- sidecolumn-->
        <nav class="col-sm-12 col-md-3">
          <RelatedLinks />
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import RelatedLinks from "@/components/RelatedLinks.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "HomeView",
  components: {
    RelatedLinks,
    HeaderComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
