<template>
  <div>
    <div class="car-box">
      <header-tow :data="{name:'短链脂肪酸SCFA评估',nameEn:'EVALUATION OF SHORT CHAIN FATTY ACID SCFAS'}"></header-tow>

      <div class="indicator-box" >
        <img src="@/assets/images/car-pdf/Indicator-two.png" alt="">
      </div>
      <div class="car-content3">
        <production-beat :data="listInfo" />

      </div>
      <header-tow :data="{name:'睡眠压力及精神状态评估',nameEn:'SLEEP STRESS AND MENTAL STATE ASSSESSMENT'}"></header-tow>

      <div style="height: 150px;">
        <production-beat :data="listInfo2" />

      </div>

      <header-tow :data="{name:'睡眠压力及精神状态评估',nameEn:'SLEEP STRESS AND MENTAL STATE ASSSESSMENT'}"></header-tow>
<!--      <production-beat :data="listInfo3" />-->
    <progress-box :data="listInfo3"/>


      <footer-box :data="'03'"/>
    </div>

  </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import HeaderOne from "@/components/pdf-common/header-one.vue";
import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
import ProductionBeat from "@/components/common/production-beat.vue";
import ProgressBox from "@/components/common/progress-box.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";


export default {
  components: {FooterBox, ProgressBox, ProductionBeat, InstrumentPanel, HeaderOne, HeaderTow},
  name:'pageThre',
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
      ],
      listInfo2:[
        {
          name:'菌群平衡',
          num:50,
          type:1
        },
      ],
      listInfo3:[
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
      ]
    }
  },
}
</script>

<style scoped lang="scss">



</style>

