<template>
  <section class="News">
    <h1 class="News__header">
      <span class="News__headerIcon"></span>
      &nbsp;新着ニュース
    </h1>
    <ul class="News__newsList">
      <li v-for="(item, key) in news" class="News__newsListItem" :key="key">
        <a
          :href="item.url"
          target="_brank"
          rel="noopener noreferrer"
          class="News__newsLink"
        >
          <img :src="item.img" alt="ニュースの画像" class="News__newsImg" />
          <span class="News__newsText">
            <p class="News__newsDate">
              {{ item.date }}
            </p>
            <p class="News__newsTitle">
              {{ item.title }}
            </p>
            <p class="News__newsSubTitle">
              {{ item.subtitle }}
            </p>
          </span>
        </a>
      </li>
    </ul>
  </section>
</template>
<script>
// import io from "socket.io-client";
export default {
  data() {
    return {
      news: [],
    };
  },
  mounted() {
    const vm = this;
    const newsURL = `https://keiichiro-h.com/q-portal_API/news/news.php`;
    fetch(newsURL, {
      method: "GET",
    })
      .then((res) => res.text())
      .then((text) => {
        const dict = JSON.parse(text);
        vm.news = Object.values(dict).reverse();
        console.log(vm.news);
      });
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
.News {
  padding: 20px 0;
  &__header {
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    border-bottom: dotted 2px #333333;
    display: flex;
    @include sm {
      font-size: 18px;
    }
  }
  &__headerIcon {
    display: block;
    background-color: #87003c;
    width: 12px;
    height: 22px;
    border-radius: 2px;
    @include sm {
      width: 10px;
      height: 18px;
    }
  }
  &__newsList {
    list-style: none;
    padding: 0;
  }
  &__newsListItem {
    border-bottom: #878787 1px dotted;
    height: 150px;
    @include sm {
      height: 100px;
    }
  }
  &__newsLink {
    text-decoration: none;
    color: #000000;
    font-size: 20px;
    display: flex;
  }
  &__newsText {
    padding-left: 50px;
    text-align: left;
    @include sm {
      padding-left: 30px;
    }
  }
  &__newsImg {
    height: 130px;
    margin: 10px 0;
    @include sm {
      height: 80px;
    }
  }
  &__newsDate {
    font-size: 15px;
    margin-bottom: 5px;
    @include sm {
      font-size: 8px;
    }
  }
  &__newsTitle {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    @include sm {
      font-size: 12px;
    }
  }
  &__newsTitle:hover {
    text-decoration: underline;
  }
  &__newsSubTitle {
    font-size: 18px;
    @include sm {
      font-size: 10px;
    }
  }
}
</style>
