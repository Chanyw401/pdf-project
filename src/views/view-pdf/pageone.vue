<template>
  <div>
    <div class="car-box">
      <header-one :data="{name:'您的结果总览',nameEn:'OVERVIEW OF YOUR RESULT',No:'NO：BG202304172012',date:'报告生成：2023-04-17'}" />
      <div class="car-content1">
        <div class="left">
          <div class="left-item" >菌群健康: <span>13分</span></div>
          <div class="left-item" >疾病管理: <span style="color: #254A96">18分</span></div>
          <div class="left-item" >营养评估: <span style="color: #254A96">19分</span></div>
        </div>
        <div class="right">
          <div class="right-titlt">健康总分</div>
          <div class="echart-box">
            <instrument-panel/>
          </div>
        </div>

      </div>
      <!--      <div class="car-header2">-->
      <!--        肠道菌群总体状况 <span class="title-en">OVERALL STATUS OF GUTMICROBIOTA</span>-->
      <!--      </div>-->
      <header-tow :data="{name:'肠道菌群总体状况',nameEn:'OVERALL STATUS OF GUTMICROBIOTA'}"></header-tow>
      <div class="car-content2">
        <div class="car-content2-header">
          <div class="left">肠道预测年龄：</div>
          <div>64.72岁 </div>
          <div class="right">肠型：</div>
          <div>拟杆菌型</div>
        </div>
        <div class="content">
          <div class="left">
            <div>
              <div class="item">
                检测到菌种数量：<span>  1000</span> <span  class="btn btn-warning">注意</span>
              </div>
              <div class="item">
                检测到菌种数量：<span>  1000</span> <span class="btn btn-success">注意</span>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="circle" ref="circle"></div>
            <div class="cicle-bg">
              <img src="@/assets/images/car-pdf/circle-bg.png" alt=""></div>
          </div>
        </div>

      </div>
      <header-tow :data="{name:'肠道菌群类型及分散图',nameEn:'TYPE OF OUT MICROBIOTA  '}"></header-tow>
      <div class="car-content3">
        <production-beat />

      </div>
  <footer-box :data="'01'"/>
    </div>

  </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import HeaderOne from "@/components/pdf-common/header-one.vue";
import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
import ProductionBeat from "@/components/common/production-beat.vue";
import * as echarts from "echarts";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
  components: {FooterBox, ProductionBeat, InstrumentPanel, HeaderOne, HeaderTow},
  name:'pageOne',
  data() {
    return {
      searchData:{},
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableObj:{
        list:[
          {name:'1',code:'YG001'},
          {name:'2',code:'YG002'},
          {name:'3',code:'YG003'},
          {name:'4',code:'YG004'},
          {name:'5',code:'YG005'},
        ]
      },
      uploadBox: {
        show: false,
        title: '修改用户',
        data: {},
        rules: {
          code: [
            {
              required: true,
              message: "账号不能为空",
              trigger: ["blur", "change"]
            }
          ],
          name: [
            {
              required: true,
              message: "账号不能为空",
              trigger: ["blur", "change"]
            }
          ],
          password: [
            {
              required: true,
              message: "密码不能为空",
              trigger: ["blur", "change"]
            }
          ]
        }
      },
      option : {

        tooltip: {},

        radar: {
          shape: 'circle',
          indicator: [
            { name: '普氏菌型', max: 100},
            { name: '拟杆菌型', max: 100},
            { name: '胃球菌型', max: 100},

          ],
          radius: 80,
          name:{
            color:'rgba(111, 127, 159, 1)'
          },
          splitArea: {
            areaStyle: {
              color: 'rgba(230, 232, 238, .1)',
              shadowBlur: 10
            },
            show:false
          },
          axisLine: {
            lineStyle: {
              color: '#0095B0'
            },
            show:false
          },
          splitLine: {
            lineStyle: {
              color: '#333'
            },
            show:false
          }
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              color: 'rgba(37, 74, 150, .2)',
            },

            emphasis: {
              color: 'rgba(6, 222, 249,0.5)',
            }
          },
          lineStyle: {
            normal: {
              color: 'rgba(37, 74, 150, 1)',
              type: 'solid',
              width: 2
            },
            emphasis: {}
          },
          // areaStyle: {normal: {}},
          data : [
            {
              value : [100, 60, 30],
              name : '预算分配（Allocated Budget）'
            },

          ]
        }]
      },
      echart:null
    }
  },
  mounted() {
    this.echarts = echarts.init(this.$refs.circle);
    this.echarts.setOption(this.option);
  }
}
</script>

<style scoped lang="scss">
.car-content1{
  display: flex;
  justify-content: space-between;
  height: 200px;
  .left{
    position: relative;
    padding: 20px;
    width: 40%;
    height: 100%;
    color: rgba(111, 127, 159, 1);
    letter-spacing: 2px;
    font-size: 18px;
    .left-item{
      margin-bottom: 29px;

      span{
        color: red;
      }
    }
    &:after{
      position: absolute;
      content: '';
      top:56px;
      right: 0;
      width: 1px;
      height: 60px;
      background: linear-gradient(180deg, rgba(111,127,159,0) 0%, #6F7F9F 49%, rgba(111,127,159,0) 100%);
      border-radius: 0px 0px 0px 0px;
      opacity: 0.5;
    }
  }
  .right{
    width: 60%;
    height: 100%;
    position: relative;
    .right-titlt{
      position: absolute;
      left: 20px;
      width: 78px;
      height: 28px;
      background: #e1e5eb;
      border-radius: 6px 6px 6px 6px;
      position: absolute;
      color: #254A96;
      line-height: 28px;
      text-align: center;
    }
    .echart-box {
      width: 100%;
      height: 100%;
    }
  }
}
.car-content2{
  height: 280px;
  .car-content2-header{
    width: 100%;
    height: 42px;
    border-radius: 4px;
    background: url("../../assets/images/car-pdf/car-content2-header.png")  no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
    margin-bottom: 30px;
  }
  .content{
    height: 185px;
    display: flex;
    justify-content: space-between;
    .left{
      width: 50%;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("../../assets/images/car-pdf/left-bg.png")  no-repeat;
      background-size: cover;
      color: #6F7F9F;
      font-size: 18px;
      background-size: 100% 100%;
      .item{
        margin-bottom: 20px;
        span{
          color: #254A96;
        }
      }
    }
    .right {
      width: 50%;
      position: relative;
      .circle{
        position: absolute;
        width: 300px;
        height: 300px;
        top: -50px;
        left: 50px;
        z-index: 99;
      }
      .cicle-bg{
        position: absolute;
        left: 109px;
        top: 2px;
      }
    }

  }
}
.car-content3{
  height:180px;
}
.btn {
  width: 58px;
  height: 20px;
  border-radius: 63px 63px 63px 63px;
  font-size: 12px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  letter-spacing: 2px;
  margin-left: 5px;
}
.btn-warning {
  background: rgba(202, 62, 84, .2);
  color: #CA3E54 !important;
}
.btn-success {
  background: rgba(37, 74, 150, .2);
  color: #254A96 !important;
}

</style>

