<template>
  <div class="TopPage">
    <div class="TopPage__top">
      <img src="../assets/topimg.jpeg" alt="" class="TopPage__topImg" />
    </div>
    <NewinfoComponent class="TopPage__newinfo" />
  </div>
</template>

<script>
// import WeatherComponent from "@/../src/components/TopView/WeatherComponent.vue";
import NewinfoComponent from "@/../src/components/TopView/NewinfoComponent.vue";
export default {
  components: {
    // WeatherComponent,
    NewinfoComponent,
  },
  name: "TopView",
};
</script>
<style lang="scss" scoped>
.TopPage {
  padding: 20px 0;
  &__top {
    margin: 0 0 20px 0;
  }
  &__topImg {
    width: 100%;
  }
}
</style>
