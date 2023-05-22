<template>
  <div>
    <div class="item1_content">
      <div class="left">
        <div ref="beat" class="beat"></div>
  <!--        <div class="beat_bg">-->
  <!--          <img src="../../assets/images/car-pdf/beat-bg-line.svg" alt="">-->
  <!--          -->
  <!--        </div>-->
        <div class="beat_bg_before">
          <img src="../../assets/images/car-pdf/beat_bg_before.svg" alt="">
        </div>
        <div class="beat_bg">
          <img src="../../assets/images/car-pdf/beat-bg.svg" alt="">
        </div>
        <div class="left_text">
          <!-- {{ data.proportion }} -->
          21
          <span style="font-size: 14px; color: #9f6aa2; font-weight: 400"
            >个</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "InstrumentPanel",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    // data:{
    //   handler(val){
    //     if(this.echarts && val.proportion !=''){
    //       this.option.series[0].data[0].value = this;
    //       this.option.series[2].data[0].value = val.proportion;
    //       this.echarts.setOption(this.option,true);
    //     }
    //   },
    //   deep:true
    // },
    // proportion: {
    //   handler(val) {
    //     if (this.echarts && val != "") {
    //       this.option.series[0].data[0].value = Number(val);
    //       this.option.series[2].data[0].value = Number(val);
    //       this.echarts.setOption(this.option, true);
    //     }
    //   },
    // },
    // deep: true,
  },
  computed: {
    //比率
    // proportion() {
    //   let num;
    //   num = this.data.proportion / this.data.productionTime;
    //   return num > 0 ? (num * 100).toFixed(2) : 0;
    // },
  },
  data() {
    return {
      echarts: null,
      option: {
        angleAxis: {
          show: false,
          max: (100 * 360) / 180, //-45度到225度，二者偏移值是270度除360度
          type: "value",
          startAngle: 180, //极坐标初始角度
          splitLine: {
            show: false,
          },
        },
        barMaxWidth: 8, //圆环宽度
        radiusAxis: {
          show: false,
          type: "category",
        },
        //圆环位置和大小
        polar: {
          center: ["50%", "70%"],
          radius: "160%",
        },
        series: [
          {
            type: "bar",
            data: [
              {
                //上层圆环，显示数据
                value: 75,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                      offset: 0,
                      color: "#E88F61",
                    },
                    {
                      offset: 1,
                      color: "#9F6AA2",
                    },
                  ]),
                },
              },
            ],
            barGap: "-100%", //柱间距离,上下两层圆环重合
            coordinateSystem: "polar",
            roundCap: true, //顶端圆角
            z: 3, //圆环层级，同zindex
          },
          {
            //下层圆环，显示最大值
            type: "bar",
            data: [
              {
                value: 100,
                itemStyle: {
                  color: "#EFEFEF",
                  borderWidth: 10,
                },
              },
            ],
            barGap: "-100%",
            coordinateSystem: "polar",
            roundCap: true,
            z: 1,
          },
        ],
      },
    };
  },
  mounted() {
    console.log("echarts", echarts);
    this.echarts = echarts.init(this.$refs.beat);
    this.option.series[0].data[0].value = 50;
    // this.option.series[2].data[0].value = 50;
    this.echarts.setOption(this.option);
  },
};
</script>

<style scoped lang="scss">
.item1_content {
  height: 150px;
  width: 390px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left {
    position: relative;
    .beat {
      left: -70px;
      top: -120px;
      width: 220px;
      height: 220px;
      position: absolute;
      //background-color: pink;
    }
    .beat_bg_before{
      position: absolute;
      left: -61px;
      width: 200px;
      top: -67px;
      img {
        width: 100%;
      }
    }
    .beat_bg {
      position: absolute;
      left: -20px;
      width: 110px;
      top: -28px;
      img {
        width: 100%;
      }
    }
    .left_text {
      color: #362b33;
      left: -18px;
      font-size: 22px;
      bottom: -39px;
      position: absolute;
      font-weight: 700;
      width: 120px;
      text-align: center;
    }

    img {
      width: 140px;
    }
  }
  .right {
    color: #ac9caa;
    font-size: 10px;
    .left_item {
      padding: 10px 20px 10px 20px;
    }

    .value_text {
      color: #9f6aa2;
      font-size: 28px;
      font-weight: 700;
    }
  }
}
.item_header {
  width: 100%;
  height: 50px;
  display: flex;
  background: rgba(162, 144, 161, 0.45);
  border-radius: 8px 8px 0px 0px;
  align-items: center;
  .header_img {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    img {
      width: 70%;
      height: 70%;
    }
  }
  .header_text_top {
    font-size: 20px;
    font-weight: 700;
    color: #2c2c2c;
  }
  .header_text_bottom {
    color: #9f6aa2;
    font-weight: 700;
    font-size: 14px;
    opacity: 0.8;
  }
}
</style>
