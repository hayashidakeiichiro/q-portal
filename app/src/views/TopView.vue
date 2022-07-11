<template>
  <div class="top">
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div style="height: 200px">
      <img
        :src="require(`@/../src/assets/WeatherImg/${this.WeatherCode}.jpg`)"
        alt=""
        ref="WeatherIcon"
      />
      {{ temperture.max }}
      {{ temperture.min }}
    </div>
    <div style="height: 200px">お知らせ</div>
  </div>
</template>

<script>
export default {
  name: "TopView",
  data: function () {
    return {
      WeatherCode: 0, // 天気のアイコン読み込みのためのWeatherCode
      temperture: { max: 0, min: 0 },
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
