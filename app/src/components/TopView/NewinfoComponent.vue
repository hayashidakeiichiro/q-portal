<template>
  <section class="Newinfo">
    <h1>新着情報</h1>
    <ul class="Newinfo__list">
      <li v-for="(news, key) in newsList" :key="key" class="Newinfo__listitem">
        <p>{{ news }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "NewinfoComponent",
  data: function () {
    return {
      newsList: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    };
  },
};
</script>
<style lang="scss" scoped>
.Newinfo {
  &__list {
    display: grid;
    list-style: none;
    grid-template-columns: repeat(3, 1fr);
  }
  &__listItem {
  }
}
</style>
