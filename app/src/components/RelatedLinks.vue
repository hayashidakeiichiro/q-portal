<template>
  <div class="Links">
    <section class="Links__weather">
      <h1 class="Links__header">
        <span class="Links__headerIcon"></span>
        &nbsp;糸島の天気
      </h1>
      <WeatherComponent />
    </section>
    <nav class="Links__publicLinks">
      <h1 class="Links__header">
        <span class="Links__headerIcon"></span>
        &nbsp;関連リンク
      </h1>
      <ul class="Links__list">
        <li class="Links__publicListItem">
          <a
            href="https://ku-portal.kyushu-u.ac.jp/campusweb/top.do"
            target="_brank"
          >
            <img
              class="Links__listImg"
              src="@/../src/assets/linkImg/campassmate.png"
            />
          </a>
          <a
            href="https://ku-portal.kyushu-u.ac.jp/campusweb/top.do"
            target="_brank"
          >
            <img
              class="Links__listImgSM"
              src="@/../src/assets/linkImg/campassmate_SM.png"
            />
            <div class="Links__listTitleSM">Campassmate</div>
          </a>
        </li>
        <li class="Links__publicListItem">
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
            <div class="Links__listTitleSM">moodle</div>
          </a>
        </li>
        <li class="Links__publicListItem">
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
            <div class="Links__listTitleSM">九大公式</div>
          </a>
        </li>
      </ul>
    </nav>
    <nav class="Links__departmentLinks">
      <h1 class="Links__header">
        <span class="Links__headerIcon"></span>
        &nbsp;各学部のページ
      </h1>
      <ul class="Links__list">
        <li class="Links__departmentListItem">
          <a
            href="https://kyoso.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa :icon="['far', 'handshake']" class="Links__icon" />
            &nbsp;協奏学部
          </a>
        </li>
        <li class="Links__departmentListItem">
          <a
            href="https://www2.lit.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="book" class="Links__icon" />
            &nbsp;文学部
          </a>
        </li>
        <li class="Links__departmentListItem">
          <a
            href="https://www.education.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="chalkboard-user" class="Links__icon" />
            &nbsp;教育学部
          </a>
        </li>
        <li class="Links__departmentListItem">
          <a
            href="http://www.law.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="gavel" class="Links__icon" />
            &nbsp;法学部
          </a>
        </li>
        <li class="Links__departmentListItem">
          <a
            href="https://www.econ.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="money-bill" class="Links__icon" />
            &nbsp;経済学部
          </a>
        </li>
        <li class="Links__departmentListItem">
          <a
            href="https://www.sci.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="flask" class="Links__icon" />
            &nbsp;理学部
          </a>
        </li>
        <li class="Links__departmentListItem">
          <a
            href="https://www.med.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="briefcase-medical" class="Links__icon" />
            &nbsp;医学部
          </a>
        </li>
        <li class="Links__departmentListItem">
          <a
            href="https://www.dent.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="tooth" class="Links__icon" />
            &nbsp;歯学部
          </a>
        </li>
        <li class="Links__departmentListItem">
          <a
            href="https://www.phar.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="pills" class="Links__icon" />
            &nbsp;薬学部
          </a>
        </li>
        <li class="Links__departmentListItem">
          <a
            href="https://www.eng.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="gears" class="Links__icon" />
            &nbsp;工学部
          </a>
        </li>
        <li class="Links__departmentListItem">
          <a
            href="https://www.design.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="compass-drafting" class="Links__icon" />
            &nbsp;芸工学部
          </a>
        </li>
        <li class="Links__departmentListItem">
          <a
            href="https://www.agr.kyushu-u.ac.jp/"
            target="_brank"
            class="Links__link"
          >
            <fa icon="wheat-awn" class="Links__icon" />
            &nbsp;農学部
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
    font-size: 20px;
    color: #333333;
    text-align: left;
    @include lg {
      font-size: 16px;
    }
    @include sm {
      text-align: center;
    }
  }
  & a:hover {
    color: #87003c;
  }
  &__header {
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    border-bottom: dotted 2px #333333;
    display: flex;
  }
  &__headerIcon {
    display: block;
    background-color: #87003c;
    width: 12px;
    height: 22px;
    border-radius: 2px;
  }
  &__list {
    list-style: none;
    padding: 20px 0 0 0;
    @include md {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
  }
  &__publicListItem {
    height: 80px;
    margin: 20px 0;
    @include lg {
      height: 60px;
    }
    @include sm {
      height: 60px;
    }
  }
  &__departmentListItem {
    // border: 2px #bbbbbb solid;
    height: 40px;
    margin: 10px 0 0 20px;
    @include lg {
      height: 40px;
      margin: 5px 0 0 10px;
    }
    @include sm {
      height: 60px;
      margin: 0;
    }
  }
  &__link {
    display: block;
    @include sm {
      display: flex;
      flex-direction: column;
    }
  }
  &__icon {
    font-size: 1.5em;
    color: #87003c;
    @include sm {
      font-size: 2em;
    }
  }
  &__listImg {
    height: 80%;
    bottom: 10%;
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
      height: 100%;
    }
  }
  &__listTitleSM {
    display: none;
    font-size: 12px;
    font-weight: bold;
    @include sm {
      display: block;
    }
  }
}
</style>
