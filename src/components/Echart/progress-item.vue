<template>
  <div>
    <div class="progress-item">
      <div class="item-text">{{ data.name }}</div>
      <div class="item-content">

        <div class="progress-bg" :style="{ width: `${data.num}%`}">
          <div class="popover">{{data.num}}</div>
        </div>
      </div>
      <div class="state-btn">低风险</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProgressItem",
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
    background: #E2E5EC;
    margin-right: 36px;
    .progress {
      width: 100px;
      background: rgba(226, 229, 236, 1);
      height: 100%;
    }
    .progress-bg {
      height: 100%;
      background: #ACACC1;
      // 加一个过度效果
      transition: .5s ease-in-out;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        background: linear-gradient(172deg, #1C2431 0%, #6F7F9F 100%);
      border: 2px solid #F6F6F4;
        border-radius: 50%;
        top: -1px;
        right: -3px;
      }
      .popover{
        position: absolute;
        width: 25px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: #1C2431;
        border-radius: 4px 4px 4px 4px;
        top: -28px;
        right: -9px;
        color: #ffffff;
        font-size: 14px;
        font-weight: 300;
        &:after{
          position: absolute;
          content: '';
          width: 7px;
          height: 5px;
          background: #1C2431;
          top: -28px;
          right: -9px;
        }
      }
    }
  }
  .partition {
    width: 2px;
    height: 100%;
    background: #fff;
    z-index: 99;
  }

}

</style>
