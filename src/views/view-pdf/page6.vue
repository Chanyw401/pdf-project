<template>
  <div>
    <div class="car-box">
      <header-one :data="{name:'抗生素风险分析',nameEn:'OVERVIEW OF YOUR RESULT',No:'NO：BG202304172012',date:'报告生成：2023-04-17'}" />

      <div class="indicator-box"
       >
        <img src="@/assets/images/car-pdf/Indicator-thre.png" alt="">
      </div>


      <production-beat :data="listInfo" />




      <footer-box :data="'06'"/>
    </div>

  </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import HeaderOne from "@/components/pdf-common/header-one.vue";
import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
import ProductionBeat from "@/components/common/production-beat.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
  components: {FooterBox, ProductionBeat, InstrumentPanel, HeaderOne, HeaderTow},
  name:'page6',
  data() {
    return {
      listInfo:[
        {
          name:'肠道菌群血清素合成能力',
          num:50,
          type:1
        },
        {
          name:'菌群多样性',
          num:31,
          type:1
        },
        {
          name:'有益菌',
          num:40,
          type:1
        },  {
          name:'菌群平衡',
          num:50,
          type:1
        },
        {
          name:'菌群多样性',
          num:31,
          type:1
        },
        {
          name:'有益菌',
          num:40,
          type:1
        }, {
          name:'菌群平衡',
          num:50,
          type:1
        },
        {
          name:'菌群多样性',
          num:31,
          type:1
        },
        {
          name:'菌群平衡',
          num:50,
          type:1
        },
        {
          name:'菌群平衡',
          num:50,
          type:1
        },
        {
          name:'菌群多样性',
          num:31,
          type:1
        },
        {
          name:'有益菌',
          num:40,
          type:1
        },  {
          name:'菌群平衡',
          num:50,
          type:1
        },
        {
          name:'菌群多样性',
          num:31,
          type:1
        },
        {
          name:'有益菌',
          num:40,
          type:1
        },
      ],


    }
  },
}
</script>

<style scoped lang="scss">



</style>

