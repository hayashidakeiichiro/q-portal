<template>
  <section class="Weather">
    <h1>今日の天気(糸島)</h1>
    <div>
      <img
        :src="require(`@/../src/assets/WeatherImg/${this.WeatherCode}.jpg`)"
        alt=""
        ref="WeatherIcon"
      />
      <div>
        <span class="Weather__maxtemp"> {{ temperture.max }}℃ </span>
        <span class="Weather__mintemp"> {{ temperture.min }}℃ </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WeatherComponent",
  data: function () {
    return {
      WeatherCode: "none", // 天気のアイコン読み込みのためのWeatherCode
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
<style lang="scss" scoped></style>
