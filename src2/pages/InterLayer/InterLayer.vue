<template>
  <!--第一页夹层-->
  <div class="InterLayer">
    <img src="./images/top1.jpg" alt="">
    <img src="./images/top2.jpg" alt="">
    <img src="./images/bottom.jpg" alt="">
  </div>
</template>

<script>
  export default {
    name: "InterLayer"
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";
  .InterLayer {
    font-size: 0;
    img {
      width: 750/@rem;
      height: 1334/3/@rem;
    }
  }
</style>
