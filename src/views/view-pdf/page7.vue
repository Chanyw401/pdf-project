<template>
  <div>
    <div class="car-box">
      <header-one :data="{name:'您的肠道菌群构造',nameEn:'Your gut microbiota structure',No:'NO：BG202304172012',date:'报告生成：2023-04-17'}" />
      <div class="content-box">
        <div class="content-header">门（DOOR）</div>
        <div class="content">
          <div class="content-item">门是细菌最初的分类，肠道菌群最主要的细菌构成是以下三类:</div>
          <div class="content-item2">
              <div class="item-btn">
                <div>厚壁菌门</div>
                <div>(Firmicutes)</div>
              </div>

            <div class="item-btn">
              <div>厚壁菌门</div>
              <div>(Firmicutes)</div>
            </div>
            <div class="item-btn">
              <div>厚壁菌门</div>
              <div>(Firmicutes)</div>
            </div>
          </div>
          <div class="content-foorter">
            *变形菌门是大部分致病菌所在的门
          </div>
        </div>
      </div>
      <header-tow :data="{name:'检测结果',nameEn:'DETECTION RESULT'}" />
      <div class="content2-box">
        <div class="left">
          <PieContainerChart :dataList="[20,30]"/>
        </div>
        <div class="right">
          <div>您的主要菌群构成</div>
          <div></div>
        </div>
      </div>

      <div>
        <div class="theader">
        <div style="width: 40%;text-align: center">名称</div>
        <div style="width: 20%;text-align: center ">丰度%</div>
        <div style="width: 50%;text-align:center">人群水平%</div>
      </div>
        <div class="t-body">
          <div v-for="(item,index) in tableList   " :key="index" class="item">
            <div style="width: 40%;text-align: left;padding-left: 10px">{{item.name}}</div>
            <div style="width: 20%;text-align: center ">{{item.value}}</div>
            <div style="width: 50%;text-align:left;    padding-top: 9px;padding-right: 25px;">
              <el-progress :percentage="item.value2" :stroke-width="8" color="#2E5CBB"></el-progress>
            </div>
          </div>
        </div>

      </div>






      <footer-box :data="'07'"/>
    </div>

  </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import HeaderOne from "@/components/pdf-common/header-one.vue";
import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
import ProductionBeat from "@/components/common/production-beat.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import PieContainerChart from "@/components/Echart/pieContainerChart.vue";

export default {
  components: {PieContainerChart, FooterBox, ProductionBeat, InstrumentPanel, HeaderOne, HeaderTow},
  name:'page7',
  data() {
    return {
      tableList:[
        {name:'厚壁菌门 Firmicutes',value:'59.545%',value2:15},
        {name:'拟杆菌门 Bacteroidetes',value:'59.545%',value2:35},
        {name:'变形菌门 Proteobacteria',value:'59.545%',value2:45},
        {name:'放线菌门 Actinobacteria',value:'59.545%',value2:55},
        {name:'螺旋体 Spirochaetes',value:'59.545%',value2:100},
      ]



    }
  },
}
</script>

<style scoped lang="scss">
.theader{
  width: 100%;
  display: flex;
  color: #ffffff;
  background: url(../../assets/images/car-pdf/car-content2-header.png) no-repeat;
  height: 34px;
  line-height: 34px;
  background-size: cover;
  border-radius: 4px;
}
.t-body{
  width: 100%;

  .item{
    display: flex;
    align-content: center;
    width: 100%;
    height: 34px;
    line-height: 34px;
    color: #434F65;
    background: #e1e4ea;
    margin: 10px 0;
    border-radius: 4px;
    div{
    }
  }
  .item:nth-child(2n){
    background: rgba(37, 74, 150, .2);
  }

  ::v-deep.el-progress__text {
    color: #2E5CBB !important;
    font-size: 11px !important;
  }
}
.content-box{
  height: 200px;
  margin-bottom: 30px;
  .content-header{
    color: #1A356B;
    padding-bottom: 10px;

  }
  .content{
    height: 157px;
    background: linear-gradient(180deg, #EAECED 0%, rgba(234,236,237,0) 100%);
    border-radius: 6px 6px 6px 6px;
    padding: 20px;
    .content-item{
      height: 14px;
      font-size: 14px;
      color: #667995;
      margin-bottom: 10px ;
    }
    .content-item2{
      display: flex;
      height: 100px;
      align-items: center;
      justify-content: space-around;
      .item-btn{
        box-sizing: border-box;
        width: 144px;
        height: 48px;
        text-align: center;
        border: 1px dashed rgba(37, 74, 150, 1);
        color: rgba(37, 74, 150, 1);
        background: rgba(37, 74, 150, .1);
        border-radius: 51px 51px 51px 51px;
        padding-top: 5px;
      }
    }
    .content-foorter{
      display: flex;
      justify-content: flex-end;
      color: #667995;
      font-size: 10px;
      padding-right: 25px;
    }
  }

}
.content2-box{
  display: flex;
  width: 100%;
  height: 200px;
  .left{
    width: 50%;
    height: 100%;
    background: #e1e4ea;
    border-radius: 6px 0 0 6px;
  }
  .right{
    width: 50%;
    height: 100%;
    background: #e1e4ea;
    border-radius: 0 6px 6px 0;
  }
}





</style>

