<template>
  <section class="Weather">
    <h1 class="Weather__header">糸島の天気</h1>
    <div class="Weather__main">
      <div v-if="weatherInfo.length == 7" class="Weather__todayWeather">
        <div>
          今日 {{ weatherInfo[0].month }}/{{ weatherInfo[0].date }}({{
            weatherInfo[0].day
          }})
        </div>
        <img
          :src="
            require(`@/../src/assets/WeatherImg/${weatherInfo[0].weathercode}.jpg`)
          "
          alt=""
          ref="WeatherIcon"
          class="Weather__img"
        />
        <div>
          <div class="Weather__maxTemp">{{ weatherInfo[0].maxtemp }}℃</div>
          <div class="Weather__minTemp">{{ weatherInfo[0].mintemp }}℃</div>
        </div>
      </div>
      <div v-if="weatherInfo.length == 7" class="Weather__tomorrowWeather">
        <div>
          明日 {{ weatherInfo[1].month }}/{{ weatherInfo[1].date }}({{
            weatherInfo[1].day
          }})
        </div>
        <img
          :src="
            require(`@/../src/assets/WeatherImg/${weatherInfo[1].weathercode}.jpg`)
          "
          alt=""
          ref="WeatherIcon"
          class="Weather__img"
        />
        <div>
          <div class="Weather__maxTemp">{{ weatherInfo[1].maxtemp }}℃</div>
          <div class="Weather__minTemp">{{ weatherInfo[1].mintemp }}℃</div>
        </div>
      </div>

      <div class="Weather__weeklyWeather">
        <ul class="Weather__list">
          <li
            v-for="info in weatherInfo.slice(2)"
            :key="info"
            class="Weather__listItem"
          >
            <div>{{ info.date }}({{ info.day }})</div>
            <img
              :src="
                require(`@/../src/assets/WeatherImg/${info.weathercode}.jpg`)
              "
              alt=""
              ref="WeatherIcon"
              class="Weather__img"
            />
            <div>
              <div class="Weather__maxTemp">{{ info.maxtemp }}°</div>
              <div class="Weather__minTemp">{{ info.mintemp }}°</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WeatherComponent",
  data: function () {
    return {
      weatherInfo: [], //１週間分の天気情報
    };
  },
  created() {
    // 天気予報
    const request = new XMLHttpRequest();
    const vm = this;
    const WeatherAPIURL = `https://api.open-meteo.com/v1/forecast?latitude=33.5573&longitude=130.1955&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia%2FTokyo`;
    request.open("GET", WeatherAPIURL, true);
    request.onload = function () {
      const jsonInfo = JSON.parse(this.responseText);
      console.log(jsonInfo);
      let today = new Date();
      const dayOfWeak = ["日", "月", "火", "水", "木", "金", "土"];
      for (let i = 0; i < 7; i++) {
        vm.weatherInfo.push({
          month: today.getMonth() + 1,
          date: today.getDate(),
          day: dayOfWeak[today.getDay()],
          weathercode: jsonInfo.daily.weathercode[i],
          maxtemp: jsonInfo.daily.temperature_2m_max[i],
          mintemp: jsonInfo.daily.temperature_2m_min[i],
        });
        today.setDate(today.getDate() + 1);
      }
    };
    request.send();
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

.Weather {
  //   border: 2px solid #000000;
  &__header {
    text-align: left;
    font-size: 25px;
    @include lg {
      font-size: 20px;
    }
    @include md {
      font-size: 18px;
    }
    @include sm {
      font-size: 16px;
    }
  }
  &__main {
    display: grid;
    row-gap: 20px;
    grid-template-areas:
      "a a b b "
      "a a b b"
      "c c c c";
    @media screen and (max-width: $sm) {
      grid-template-areas: "a b";
    }
  }
  &__todayWeather {
    grid-area: a;
    font-size: 20px;
    @include lg {
      font-size: 15px;
    }
    @include md {
      font-size: 20px;
    }
    @include sm {
      font-size: 15px;
    }
  }
  &__tomorrowWeather {
    grid-area: b;
    font-size: 20px;
    @include lg {
      font-size: 15px;
    }
    @include md {
      font-size: 20px;
    }
    @include sm {
      font-size: 15px;
    }
  }
  &__weeklyWeather {
    display: flex;
    grid-area: c;
    font-size: 15px;
    @include sm {
      display: none;
    }
  }
  &__img {
    width: 80%;
    max-width: 150px;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    list-style: none;
  }
  &__listItem {
  }
  &__maxTemp {
    color: rgb(217, 83, 83);
  }
  &__minTemp {
    color: rgb(114, 150, 223);
  }
}
</style>
