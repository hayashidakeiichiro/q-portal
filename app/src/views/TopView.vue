<template>
  <div class="top">
    <div>
      <img alt="logo" src="../assets/logo.png" />
    </div>
    <section style="height: 200px">
      <h1>今日の天気</h1>
      <img
        :src="require(`@/../src/assets/WeatherImg/${this.WeatherCode}.jpg`)"
        alt=""
        ref="WeatherIcon"
      />
      {{ temperture.max }}
      {{ temperture.min }}
    </section>
    <section style="height: 200px">
      <h1>新着情報</h1>
      <ul class="list-group">
        <li v-for="(news, key) in newsList" :key="key" class="list-group-item">
          <p>{{ news }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "TopView",
  data: function () {
    return {
      WeatherCode: "none", // 天気のアイコン読み込みのためのWeatherCode
      temperture: { max: 0, min: 0 },
      newsList: { 1: 1, 2: 2, 3: 3 },
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
      vm.WeatherCode = jsonInfo.daily.weathercode[0];
      vm.temperture.max = jsonInfo.daily.temperature_2m_max[0];
      vm.temperture.min = jsonInfo.daily.temperature_2m_min[0];
      console.log(jsonInfo);
    };
    request.send();
  },
};
</script>
