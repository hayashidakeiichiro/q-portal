<template>
  <div>
    <div>header</div>

    <div class="container">
      <div class="row">
        <!-- maincolumn-->
        <div class="col-sm-12 col-md-8 bg-info">
          <nav>
            <router-link to="/">Top</router-link> |
            <router-link to="/news">News</router-link> |
            <router-link to="/dining">Dining</router-link> |
            <router-link to="/traffic">traffic</router-link> |
          </nav>
          <router-view />
        </div>
        <!-- sidecolumn-->
        <div class="col-sm-12 col-md-4 bg-info">aa</div>
      </div>
    </div>
  </div>
</template>

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
