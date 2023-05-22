<template>
  <div style="height: 100px;">
    <production-beat-item v-for="(item,index) in data" :color="colorList[index]" :data="item" :key="item.name" />
  </div>
</template>

<script>
import ProductionBeatItem from "@/components/Echart/progress-bar-item.vue";

export default {
  name: "productionBeat",
  components: {ProductionBeatItem},
  props:{
    data:{
      type:Array,
      default:()=>[{
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
  data() {
    return {
      colorList:['#8989A3','#ACACC1','#475276','#8989A3']
    };
  },
}
</script>

<style lang="scss" scoped>

</style>
