<template>
  <section class="Newinfo">
    <h1 class="Newinfo__header">
      <span class="Newinfo__headerIcon"></span>
      &nbsp;お知らせ
    </h1>
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
      newsList: [1, 2, 3, 4, 5, 6],
    };
  },
};
</script>
<style lang="scss" scoped>
$sm: 576px;
$md: 768px;
$lg: 992px;
$xl: 1200px;

@mixin sm {
  @media screen and (max-width: $sm) {
    @content;
  }
}
@mixin md {
  @media screen and (max-width: $md) {
    @content;
  }
}
@mixin lg {
  @media screen and (max-width: $lg) {
    @content;
  }
}
@mixin xl {
  @media screen and (max-width: $xl) {
    @content;
  }
}
.Newinfo {
  &__header {
    font-size: 32px;
    font-weight: bold;
    text-align: left;
    border-bottom: dotted 2px #333333;
    display: flex;
    @include sm {
      font-size: 24px;
    }
  }
  &__headerIcon {
    display: block;
    background-color: #87003c;
    width: 16px;
    height: 36px;
    border-radius: 2px;
    @include sm {
      width: 12px;
      height: 24px;
    }
  }
  &__list {
    display: grid;
    list-style: none;
    grid-template-columns: repeat(3, 1fr);
  }
  &__listItem {
  }
}
</style>
