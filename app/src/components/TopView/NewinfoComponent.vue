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
      newsList: { 1: 1, 2: 2, 3: 3 },
    };
  },
};
</script>
<style lang="scss" scoped></style>
