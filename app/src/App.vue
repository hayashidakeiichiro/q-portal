<template>
  <div class="App">
    <!-- header -->
    <header class="App__header">
      <HeaderComponent />
    </header>
    <!-- main -->
    <div class="App__body">
      <div class="App__main">
        <NavigationComponent />
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
import NavigationComponent from "@/components/NavigationComponent.vue";

export default {
  name: "HomeView",
  components: {
    RelatedLinks,
    HeaderComponent,
    NavigationComponent,
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
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1600px;
  @media screen and (max-width: $md) {
    padding: 0;
  }

  &__body {
    @media screen and (min-width: $md) {
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
    @media screen and (min-width: $md) {
      width: 100%;
    }
  }
  &__links {
    @media screen and (min-width: $md) {
      width: 500px;
    }
  }
}
</style>
