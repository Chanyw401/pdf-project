<template>
  <div>
    <div class="car-box">

      <header-tow :data="{name:'疾病风险分析',nameEn:'DISEASE RISK ASSESSMENT'}"></header-tow>
      <div style="height: 100px">

      </div>

      <div class="car-content3">
        <production-beat :data="listInfo" />

      </div>

      <div class="footer-box">
        <div>
          <img src="@/assets/images/car-pdf/footer-bg.svg" alt="">
        </div>
        <div class="footer-text">
          02
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import HeaderOne from "@/components/pdf-common/header-one.vue";
import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
import ProductionBeat from "@/components/common/production-beat.vue";

export default {
  components: {ProductionBeat, InstrumentPanel, HeaderOne, HeaderTow},
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

