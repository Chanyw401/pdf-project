<template>
  <div class="footer-box">
    <div>
      <img src="@/assets/images/car-pdf/footer-bg.svg" alt="">
    </div>
    <div class="footer-text">
      {{data}}
    </div>

  </div>
</template>

<script>
export default {
  name:'footerBox',
  props:{
    data:{
      type:String,
      default:'01'
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
