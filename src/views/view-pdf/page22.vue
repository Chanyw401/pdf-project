<template>
  <div>
    <div class="car-box">

      <header-tow :data="{name:'有害菌属构成表',nameEn:'Composition Table of Harmful Bacteria'}" />

      <div>
        <div class="theader">
          <div style="width: 40%;text-align: left;padding-left: 30px">检测菌属</div>
          <div style="width: 15%;text-align: center ">丰度%</div>
          <div style="width: 15%;text-align: center "> 状态</div>
          <div style="width: 30%;text-align:center">参考范围</div>
        </div>
        <div class="t-body">
          <div v-for="(item,index) in tableList   " :key="index" class="item">
            <div style="width: 40%;text-align: left;padding-left: 10px">{{item.name}}</div>
            <div style="width: 15%;text-align: center ">{{item.value}}</div>
            <div style="width: 15%;text-align: center ">
              {{item.state == 0 ?'-': item.state ==1? '↓' : '↑'}}
            </div>
            <div style="width: 30%;text-align:center;">
              {{item.value2}}
            </div>
          </div>
        </div>

      </div>






      <footer-box :data="'22'"/>
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
  name:'page22',
  data() {
    return {
      tableList:[
        {name:'厚壁菌门 Firmicutes',value:'59.545%',value2:'0.1914-14.598',state:1},
        {name:'拟杆菌门 Bacteroidetes',value:'59.545%',value2:'0.1914-14.598',state:0},
        {name:'变形菌门 Proteobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
        {name:'放线菌门 Actinobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
        {name:'螺旋体 Spirochaetes',value:'59.545%',value2:0.1914-14.598,state: 1},
        {name:'厚壁菌门 Firmicutes',value:'59.545%',value2:0.1914-14.598,state:1},
        {name:'拟杆菌门 Bacteroidetes',value:'59.545%',value2:0.1914-14.598,state:0},
        {name:'变形菌门 Proteobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
        {name:'放线菌门 Actinobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
        {name:'螺旋体 Spirochaetes',value:'59.545%',value2:0.1914-14.598,state: 1},
        {name:'厚壁菌门 Firmicutes',value:'59.545%',value2:0.1914-14.598,state:1},
        {name:'拟杆菌门 Bacteroidetes',value:'59.545%',value2:0.1914-14.598,state:0},
        {name:'变形菌门 Proteobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
        {name:'放线菌门 Actinobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
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
  height: 45px;
  line-height: 45px;
  background-size: cover;
  border-radius: 4px;
  margin-bottom: 20px;
}
.t-body{
  width: 100%;

  .item{
    display: flex;
    align-content: center;
    width: 100%;
    height: 45px;
    line-height: 45px;
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


}





</style>

