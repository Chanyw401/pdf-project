<template>
  <div>
    <div class="progress-item">
      <div class="item-text">{{ data.name }}</div>
      <div class="item-content">
        <div class="progress"></div>
        <div class="partition"></div>
        <div class="progress"></div>
        <div class="partition"></div>
        <div class="progress"></div>
        <div class="partition"></div>
        <div class="progress"></div>
        <div class="partition"></div>
        <div class="progress"></div>
        <div class="progress-bg" :style="{ width: `${data.num}%`,background: color }"></div>
      </div>
      <div class="item-num">{{data.num}}</div>
      <div>低风险</div>
    </div>
    <!-- <div class="progress">
      分段进度条
      <div class="cont">
        <div class="p" :style="{ width: `${a}%` }">
          <div class="s">
            <div class="span" v-for="count in 5" :key="count"></div>
          </div>
        </div>
      </div>
      {{ a }}
    </div> -->
  </div>
</template>

<script>
export default {
  name: "productionBeatItem",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    color: {
      type: String,
      default: "#8989A3",
    },
    progress: {
      type: Number,
      default: 20,
    },
  },
  watch: {},
  computed: {},
  data() {
    return {
      a: 60,
    };
  },
  mounted() {
    setInterval(() => {
      // a -> 随机生成0-100
      this.a = Math.floor(Math.random() * 100);


    }, 2000);
  },
};
</script>

<style scoped lang="scss">
.progress-item {
  display: flex;
  height: 45px;
  align-items: center;
  .item-text {
    width: 150px;
    text-align: right;
    color: #1C2431;
    font-size: 16px;
    margin-right: 10px;
  }
  .item-num{
    padding: 0 10px;
    font-size: 14px;
    font-weight: 300;
    color: #4779A6;
  }
  .item-content {
    width: 360px;
    height: 10px;
    // background: pink;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    padding: 0;
    position: relative;
    .progress {
      width: 100px;
      background: rgba(226, 229, 236, 1);
      height: 100%;
    }
    .progress-bg {
      height: 100%;
      //background: pink;
      position: absolute;
      // 加一个过度效果
      transition: .5s ease-in-out;
    }
  }
  .partition {
    width: 2px;
    height: 100%;
    background: #fff;
    z-index: 99;
  }
  //   div {
  //     padding: 0 10px;
  //   }
}
// .progress {
//   display: flex;
//   align-items: center;
// }
// .cont {
//   width: 318px;
//   height: 18px;
//   border: 1px solid #ccc;
//   padding: 4px;
// }
// .p {
//   height: 100%;
//   background: pink;
// }
// .s {
//   width: 318px;
//   height: 100%;
//   display: flex;
// }
// .span {
//   width: 4px;
//   height: 100%;
//   background: #fff;
//   margin-left: 16px;
// }
</style>
