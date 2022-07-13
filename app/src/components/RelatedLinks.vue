<template>
  <div class="Links">
    <WeatherComponent class="Links__weather" />
    <nav class="Links__publicLinks">
      <ul class="Links__list">
        <li class="Links__listItem">
          <a
            href="https://ku-portal.kyushu-u.ac.jp/campusweb/top.do"
            target="_brank"
            >Campssmate</a
          >
        </li>
        <li class="Links__listItem">
          <img
            class="Links__listImg"
            src="@/../src/assets/linkImg/moodle.png"
            onclick="window.open('https://moodle.s.kyushu-u.ac.jp/', '_brank')"
          />
        </li>
        <li class="Links__listItem">
          <img
            class="Links__listImg"
            src="@/../src/assets/linkImg/kyudaiLogo.png"
            onclick="window.open('https://www.kyushu-u.ac.jp/ja/', '_brank')"
          />
        </li>
      </ul>
    </nav>
    <nav class="Links__departmentLinks">
      <h1>各学部のページ</h1>
      <ul class="Links__list">
        <li class="Links__listItem">
          <a href="/" target="_brank">git</a>
        </li>
        <li class="Links__listItem">
          <a href="/" target="_brank">git</a>
        </li>
        <li class="Links__listItem">
          <a href="/" target="_brank">git</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import WeatherComponent from "./TopView/WeatherComponent.vue";
export default {
  components: {
    WeatherComponent,
  },
  name: "RelatedLinks",
};
</script>
<style lang="scss" scope>
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

.Links {
  &__weather {
    margin: 0 10px;
  }
  &__list {
    list-style: none;
    @include md {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
  }
  &__listItem {
    border: 2px #bbbbbb solid;
    height: 60px;
    margin: 10px 0;
  }
  &__listImg {
    width: 100%;
  }
}
</style>
