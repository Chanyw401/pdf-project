<template>
  <div>
    <page-one />
    <page-two />
    <page-thre />
    <page4 />
    <page5 />
    <page6 />
    <page7 />
    <page22/>
    <page23/>


  </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import HeaderOne from "@/components/pdf-common/header-one.vue";
import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
import ProductionBeat from "@/components/common/production-beat.vue";
import PageOne from "@/views/view-pdf/pageone.vue";
import PageTwo from "@/views/view-pdf/page-two.vue";
import PageTre from "@/views/view-pdf/pagethre.vue";
import PageThre from "@/views/view-pdf/pagethre.vue";
import Page4 from "@/views/view-pdf/page4.vue";
import Page5 from "@/views/view-pdf/page5.vue";
import Page6 from "@/views/view-pdf/page6.vue";
import Page7 from "@/views/view-pdf/page7.vue";
import Page22 from "@/views/view-pdf/page22.vue";
import Page23 from "@/views/view-pdf/page23.vue";

export default {
  components: {
    Page23,
    Page22,
    Page7,
    Page6,
    Page5,
    Page4,
    PageThre,
    PageTre,
    PageTwo,
    PageOne,
    ProductionBeat,
    InstrumentPanel,
    HeaderOne,
    HeaderTow,
  },
  data() {
    return {
      searchData: {},
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      tableObj: {
        list: [
          { name: "1", code: "YG001" },
          { name: "2", code: "YG002" },
          { name: "3", code: "YG003" },
          { name: "4", code: "YG004" },
          { name: "5", code: "YG005" },
        ],
      },
      uploadBox: {
        show: false,
        title: "修改用户",
        data: {},
        rules: {
          code: [
            {
              required: true,
              message: "账号不能为空",
              trigger: ["blur", "change"],
            },
          ],
          name: [
            {
              required: true,
              message: "账号不能为空",
              trigger: ["blur", "change"],
            },
          ],
          password: [
            {
              required: true,
              message: "密码不能为空",
              trigger: ["blur", "change"],
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
//.car-content1{
//  display: flex;
//  justify-content: space-between;
//  height: 200px;
//  .left{
//    position: relative;
//    padding: 20px;
//    width: 40%;
//    height: 100%;
//    color: rgba(111, 127, 159, 1);
//    letter-spacing: 2px;
//    font-size: 18px;
//    .left-item{
//      margin-bottom: 29px;
//
//      span{
//        color: red;
//      }
//    }
//    &:after{
//      position: absolute;
//      content: '';
//      top:56px;
//      right: 0;
//      width: 1px;
//      height: 60px;
//      background: linear-gradient(180deg, rgba(111,127,159,0) 0%, #6F7F9F 49%, rgba(111,127,159,0) 100%);
//      border-radius: 0px 0px 0px 0px;
//      opacity: 0.5;
//    }
//  }
//  .right{
//    width: 60%;
//    height: 100%;
//    position: relative;
//    .right-titlt{
//      position: absolute;
//      left: 20px;
//      width: 78px;
//      height: 28px;
//      background: #e1e5eb;
//      border-radius: 6px 6px 6px 6px;
//      position: absolute;
//      color: #254A96;
//      line-height: 28px;
//      text-align: center;
//    }
//    .echart-box {
//      width: 100%;
//      height: 100%;
//    }
//  }
//}
//.car-content2{
//  height: 280px;
//  .car-content2-header{
//    width: 100%;
//    height: 42px;
//    border-radius: 4px;
//    background: url("../../assets/images/car-pdf/car-content2-header.png")  no-repeat;
//    background-size: cover;
//    display: flex;
//    align-items: center;
//    justify-content: space-around;
//    color: #ffffff;
//    margin-bottom: 30px;
//  }
//  .content{
//    height: 185px;
//    display: flex;
//    justify-content: space-between;
//    .left{
//      width: 50%;
//      padding: 20px;
//      display: flex;
//      justify-content: center;
//      align-items: center;
//      background: url("../../assets/images/car-pdf/left-bg.png")  no-repeat;
//      background-size: cover;
//      color: #6F7F9F;
//      font-size: 18px;
//      .item{
//        margin-bottom: 20px;
//        span{
//          color: #254A96;
//        }
//      }
//    }
//    .right {
//      width: 50%;
//    }
//
//  }
//}
//.car-content3{
//  height:180px;
//}
//.btn {
//  width: 58px;
//  height: 20px;
//  border-radius: 63px 63px 63px 63px;
//  font-size: 12px;
//  display: inline-block;
//  text-align: center;
//  line-height: 20px;
//  letter-spacing: 2px;
//  margin-left: 5px;
//}
//.btn-warning {
//  background: rgba(202, 62, 84, .2);
//  color: #CA3E54 !important;
//}
//.btn-success {
//  background: rgba(37, 74, 150, .2);
//  color: #254A96 !important;
//}
</style>

