<template>
  <div style="margin-bottom: 50px" >
<progress-item v-for="(item,index) in data" :color="colorList[index]" :data="item" :key="index"    />
  </div>
</template>

<script>
import ProgressItem from "@/components/Echart/progress-item.vue";

export default {
  name: "ProgressBox",
  components: {ProgressItem},
  props:{
    data:{
      type:Array,
      default:()=>[
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
        }
      ]
    }
  },
  data() {
    return {
      colorList:['#8989A3','#ACACC1','#475276','#8989A3','#8989A3','#ACACC1','#475276','#8989A3','#8989A3','#ACACC1','#475276','#8989A3']
    };
  },
}
</script>

<style lang="scss" scoped>

</style>
