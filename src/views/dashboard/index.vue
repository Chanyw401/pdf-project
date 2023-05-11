<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <!-- <instrumentPanel style="width: 100px; height: 100px" /> -->
    <progressBar />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import instrumentPanel from "@/components/Echart/instrument-panel.vue";
import progressBar from "@/components/Echart/progress-bar.vue";

export default {
  name: "Dashboard",
  components: {
    instrumentPanel,
    progressBar,
  },
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
