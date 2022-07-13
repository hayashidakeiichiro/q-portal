<template>
  <div class="TopPage">
    <div class="TopPage__top">
      <img src="../assets/topimg.jpeg" alt="" class="TopPage__topImg" />
    </div>
    <WeatherComponent class="TopPage__weather" />
    <NewinfoComponent class="TopPage__newinfo" />
  </div>
</template>

<script>
import WeatherComponent from "@/../src/components/TopView/WeatherComponent.vue";
import NewinfoComponent from "@/../src/components/TopView/NewinfoComponent.vue";
export default {
  components: {
    WeatherComponent,
    NewinfoComponent,
  },
  name: "TopView",
  component: {
    WeatherComponent,
  },
};
</script>
<style lang="scss" scoped>
.TopPage {
  &__top {
  }
  &__topImg {
    width: 100%;
  }
}
</style>
