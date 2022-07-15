<template>
  <div class="Header">
    <a href="/" class="Header__link">
      <img src="@/assets/logo3.png" alt="" class="Header__img" />
    </a>
    <div>
      <p class="Header__subTitle">九大生のためのポータルサイト</p>
    </div>
    <div class="Header__loginForm">
      <a href="" class="Header__login">
        <fa icon="right-to-bracket" class="Header__loginIcon" />
        <span class="Header__loginText"> ログイン </span>
      </a>
      <a href="" class="Header__login">
        <fa icon="user" class="Header__loginIcon" />
        <span class="Header__loginText"> 新規登録 </span>
      </a>
    </div>
  </div>
</template>
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
.Header {
  display: grid;
  grid-template-columns: 150px 1fr 250px;
  @include sm {
    grid-template-columns: 120px 1fr 200px;
  }
  &__img {
    width: 100%;
  }
  &__subTitle {
    color: #717171;
    font-size: 16px;
    font-weight: bold;
    line-height: 100px;
    @include sm {
      display: none;
    }
  }
  &__loginForm {
    padding: 38px 0 0 0;
  }
  &__login {
    color: #454343;
    text-decoration: none;
    margin: 0 5px;
    @include sm {
      margin: 0;
    }
  }
  &__loginIcon {
    color: #87003c;
    font-size: 1.5em;
    @include sm {
      font-size: 1.2em;
    }
  }
  &__loginText {
    font-weight: bold;
    font-size: 18px;
    @include sm {
      font-size: 14px;
    }
  }
}
</style>
