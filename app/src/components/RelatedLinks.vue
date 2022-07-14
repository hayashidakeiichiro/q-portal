<template>
  <div class="Links">
    <WeatherComponent class="Links__weather" />
    <nav class="Links__publicLinks">
      <h1 class="Links__header">関連リンク</h1>
      <ul class="Links__list">
        <li class="Links__listItem">
          <a
            href="https://ku-portal.kyushu-u.ac.jp/campusweb/top.do"
            target="_brank"
            class="Links__listImg"
            >Campssmate</a
          >
          <a
            href="https://ku-portal.kyushu-u.ac.jp/campusweb/top.do"
            target="_brank"
            class="Links__listImgSM"
            >C</a
          >
        </li>
        <li class="Links__listItem">
          <a href="https://moodle.s.kyushu-u.ac.jp/" target="_brank">
            <img
              class="Links__listImg"
              src="@/../src/assets/linkImg/moodle.png"
            />
          </a>
          <a href="https://moodle.s.kyushu-u.ac.jp/" target="_brank">
            <img
              class="Links__listImgSM"
              src="@/../src/assets/linkImg/moodle_sm.png"
            />
          </a>
        </li>
        <li class="Links__listItem">
          <a href="https://www.kyushu-u.ac.jp/ja/" target="_brank">
            <img
              class="Links__listImg"
              src="@/../src/assets/linkImg/kyudaiLogo.png"
            />
          </a>
          <a href="https://www.kyushu-u.ac.jp/ja/" target="_brank">
            <img
              class="Links__listImgSM"
              src="@/../src/assets/linkImg/kyudaiLogo_sm.png"
            />
          </a>
        </li>
      </ul>
    </nav>
    <nav class="Links__departmentLinks">
      <h1 class="Links__header">各学部のページ</h1>
      <ul class="Links__list">
        <li class="Links__listItem">
          <a
            href="https://kyoso.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa :icon="['far', 'handshake']" />
            協奏学部
          </a>
        </li>
        <li class="Links__listItem">
          <a
            href="https://www2.lit.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="book" />
            文学部
          </a>
        </li>
        <li class="Links__listItem">
          <a
            href="https://www.education.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="chalkboard-user" />
            教育学部
          </a>
        </li>
        <li class="Links__listItem">
          <a
            href="http://www.law.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="gavel" />
            法学部
          </a>
        </li>
        <li class="Links__listItem">
          <a
            href="https://www.econ.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="money-bill" />
            経済学部
          </a>
        </li>
        <li class="Links__listItem">
          <a
            href="https://www.sci.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="flask" />
            理学部
          </a>
        </li>
        <li class="Links__listItem">
          <a
            href="https://www.med.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="briefcase-medical" />
            医学部
          </a>
        </li>
        <li class="Links__listItem">
          <a
            href="https://www.dent.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="tooth" />
            歯学部
          </a>
        </li>
        <li class="Links__listItem">
          <a
            href="https://www.phar.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="pills" />
            薬学部
          </a>
        </li>
        <li class="Links__listItem">
          <a
            href="https://www.eng.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="gears" />
            工学部
          </a>
        </li>
        <li class="Links__listItem">
          <a
            href="https://www.design.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="compass-drafting" />
            芸工学部
          </a>
        </li>
        <li class="Links__listItem">
          <a
            href="https://www.agr.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="wheat-awn" />
            農学部
          </a>
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
  & a {
    text-decoration: none;
    color: #000000;
  }
  &__header {
    font-size: 25px;
    font-weight: bold;
    text-align: left;
  }
  &__list {
    list-style: none;
    padding: 0;
    @include md {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
  }
  &__listItem {
    border: 2px #bbbbbb solid;
    height: 60px;
    @include lg {
      height: 40px;
    }
    @include sm {
      height: 60px;
    }
  }
  &__link {
    display: flex;
    @include sm {
      flex-direction: column;
    }
  }
  &__listImg {
    height: 90%;
    margin: 0 auto;
    @include sm {
      display: none;
    }
  }
  &__listImgSM {
    height: 90%;
    margin: 0 auto;
    display: none;
    @include sm {
      display: block;
    }
  }
}
</style>
