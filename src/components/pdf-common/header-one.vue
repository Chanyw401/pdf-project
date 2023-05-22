<template>
  <div class="car-header1">
    <div class="left">
      <div class="title">{{ data.name }}</div>
      <div class="title-en">{{ data.nameEn }}</div>
    </div>
    <div class="right">
      <div class="No">{{data.No}}</div>
      <div class="date" v-show="data.date !=''">{{ data.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerOne",
  props:{
    data:{
      type:Object,
      default:()=>{
        name:'您的结果总览';
        nameEn:'OVERVIEW OF YOUR RESULT'
        NO:'NO：BG202304172012';
        date:'报告生成：2023-04-17';
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
