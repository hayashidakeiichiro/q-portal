<template>
  <div class="Navigation">
    <nav class="Navigation__main">
      <router-link to="/" class="Navigation__link">
        <fa icon="house" class="Navigation__icon" />
        Top
      </router-link>
      <router-link to="/news" class="Navigation__link">
        <fa icon="newspaper" class="Navigation__icon" />
        News
      </router-link>
      <router-link to="/dining" class="Navigation__link">
        <fa icon="utensils" class="Navigation__icon" />
        Dining
      </router-link>
      <router-link to="/traffic" class="Navigation__link">
        <fa icon="train-subway" class="Navigation__icon" />
        traffic
      </router-link>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
$sm: 576px;
$md: 768px;
$lg: 992px;
$xl: 1200px;

.Navigation {
  &__main {
    width: 100%;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: $md) {
      background-color: #f5f5f5;
    }
  }

  &__main a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }

  &__main a.router-link-exact-active {
    color: #87003c;
  }

  &__link {
    font-size: 20px;
    border-left: 1px solid #dadada;
    border-right: 1px solid #dadada;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: $md) {
      font-size: 20px;
      border: none;
    }
    @media screen and (max-width: $sm) {
      font-size: 13px;
    }
  }
  &__icon {
    font-size: 1.7em;
    @media screen and (max-width: $md) {
      font-size: 2em;
    }
    @media screen and (max-width: $sm) {
      font-size: 2.5em;
    }
  }
}
</style>
