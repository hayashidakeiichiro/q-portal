<template>
  <div class="Navigation">
    <nav class="Navigation__main">
      <router-link to="/">Top</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/dining">Dining</router-link> |
      <router-link to="/traffic">traffic</router-link> |
    </nav>
    <router-view />
  </div>
</template>
<style lang="scss" scoped>
.Navigation {
  &__main {
    padding: 30px;
  }

  &__main a {
    font-weight: bold;
    color: #2c3e50;
  }

  &__main a.router-link-exact-active {
    color: #42b983;
  }
}
</style>
