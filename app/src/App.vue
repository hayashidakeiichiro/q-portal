<template>
  <div class="App">
    <!-- header -->
    <header class="App__header">
      <HeaderComponent />
    </header>
    <!-- main -->
    <div class="App__body">
      <div class="App__main">
        <nav class="App__nav">
          <router-link to="/">Top</router-link> |
          <router-link to="/news">News</router-link> |
          <router-link to="/dining">Dining</router-link> |
          <router-link to="/traffic">traffic</router-link> |
        </nav>
        <router-view />
      </div>
      <!-- sidecolumn-->
      <nav class="App__links">
        <RelatedLinks />
      </nav>
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

<style lang="scss" scoped>
$sm: 576px;
$md: 768px;
$lg: 992px;
$xl: 1200px;

.App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 50px;
  max-width: 1600px;
  &__nav {
    padding: 30px;
  }

  &__nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  &__nav a.router-link-exact-active {
    color: #42b983;
  }

  &__body {
    @media screen and (min-width: $sm) {
      display: flex;
    }
  }
  &__header {
    height: 100px;
    @media screen and (max-width: $sm) {
      height: 60px;
    }
  }

  &__main {
    @media screen and (min-width: $sm) {
      width: 100%;
    }
  }
  &__links {
    @media screen and (min-width: $sm) {
      width: 300px;
    }
  }
}
</style>
