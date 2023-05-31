<template>
  <div>
    <div class="car-box">

      <header-tow :data="{name:'疾病风险分析',nameEn:'DISEASE RISK ASSESSMENT'}"></header-tow>
      <div class="indicator-box">
        <img src="@/assets/images/car-pdf/Indicator-one.png" alt="">

      </div>

      <div class="car-content3">
        <production-beat :data="listInfo" />

      </div>


      <footer-box :data="'02'"/>
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
  name:'pageTwo',
  data() {
    return {
     listInfo:[
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
       },
       {
         name:'有害菌',
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
       },
       {
         name:'有害菌',
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
       },
       {
         name:'有害菌',
         num:50,
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
       {
         name:'有害菌',
         num:50,
         type:1
       }
     ]
    }
  },
}
</script>

<style scoped lang="scss">



</style>

