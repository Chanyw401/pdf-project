<template>
  <div>
    <div class="car-box">
      <header-one :data="{name:'您的结果总览',nameEn:'OVERVIEW OF YOUR RESULT',No:'NO：BG202304172012',date:'报告生成：2023-04-17'}" />

      <div style="height: 50px">
      </div>

      <header-tow :data="{name:'主要营养评估',nameEn:'MAIN NUTRTIONAL ASSESSMENT'}"></header-tow>
      <production-beat :data="listInfo3" />


      <header-tow :data="{name:'睡眠压力及精神状态评估',nameEn:'SLEEP STRESS AND MENTAL STATE ASSSESSMENT'}"></header-tow>
      <production-beat :data="listInfo " />

      <div class="footer-box">
        <div>
          <img src="@/assets/images/car-pdf/footer-bg.svg" alt="">
        </div>
        <div class="footer-text">
          04
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
  name:'page4',
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

