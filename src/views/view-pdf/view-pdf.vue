<template>
  <div>
    <div class="car-box">
      <div class="car-header1">
        <div class="left">
          <div class="title">您的结果总览</div>
          <div class="title-en">OVERVIEW OF YOUR RESULT</div>
        </div>
        <div class="right">
          <div class="No">NO：BG202304172012</div>
          <div class="date">报告生成：2023-04-17</div>
        </div>
      </div>
      <div class="car-content1">
        <div class="left">
          <div class="left-item" >菌群健康: <span>13分</span></div>
          <div class="left-item" >疾病管理: <span style="color: #254A96">18分</span></div>
          <div class="left-item" >营养评估: <span style="color: #254A96">19分</span></div>
        </div>
        <div class="right">
          <div class="right-titlt">健康总分</div>
          <div class="echart-box"></div>
        </div>

      </div>
      <div class="car-header2">
        肠道菌群总体状况 <span class="title-en">OVERALL STATUS OF GUTMICROBIOTA</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
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
    }
  },
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
      background: #1C2431;
    }
  }
}
.car-header2{
  margin: 30px 0;
  border-bottom: 2px solid #6F7F9F;
  padding-bottom: 5px;
  position: relative;
  font-weight: bold;
  color: #353F51;
  font-size: 26px;
  .title-en{
    color: #6F7F9F;
    font-size: 12px;
    line-height: 12px;
  }
  &:before{
    position: absolute;
    content: "";
    top: -11px;
    left: 0;
    width: 86px;
    height: 8px;
    background-size: cover;
    background: url("../../assets/images/car-pdf/header2-bg.png") no-repeat;
  }
}

</style>

