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
      <RelatedLinks class="App__links" />
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

@mixin sm {
  @media screen and (max-width: ($sm)) {
    @content;
  }
}
@mixin md {
  @media screen and (max-width: ($md)) {
    @content;
  }
}
@mixin lg {
  @media screen and (max-width: ($lg)) {
    @content;
  }
}
@mixin xl {
  @media screen and (max-width: ($xl)) {
    @content;
  }
}

.App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1400px;
  @include md {
    padding: 0;
  }

  &__body {
    display: flex;
    @include md {
      display: block;
    }
  }
  &__header {
    height: 100px;
    @include sm {
      height: 80px;
    }
  }

  &__main {
    width: 100%;
  }
  &__links {
    margin: 0 16px;
    width: 500px;
    @include lg {
      width: 300px;
    }
    @include md {
      margin: 0 auto;
      width: 96%;
    }
  }
}
</style>
