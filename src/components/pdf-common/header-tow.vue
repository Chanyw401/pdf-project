<template>
  <div class="car-header2">
    {{ data.name }} <span class="title-en">{{data.nameEn}}</span>
  </div>

</template>

<script>
export default {
  name: "headerTow",
  props:{
    data:{
      type:Object,
      default:()=>{
        name:'肠道菌群总体状况';
        nameEn:'OVERALL STATUS OF GUTMICROBIOTA'
      }
    }
  }

}
</script>

<style lang="scss" scoped>

.car-header2{
  margin: 20px 0;
  border-bottom: 2px solid #6F7F9F;
  padding-bottom: 5px;
  position: relative;
  font-weight: bold;
  color: #353F51;
  font-size: 26px;
  .title-en{
    color: #6F7F9F;
    font-size: 12px;
    line-height: 12px;
  }
  &:before{
    position: absolute;
    content: "";
    top: -11px;
    left: 0;
    width: 86px;
    height: 8px;
    background-size: cover;
    background: url("../../assets/images/car-pdf/header2-bg.png") no-repeat;
  }
}
</style>
