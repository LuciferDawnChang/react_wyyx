<template>
  <div class="headerWrap">
    <div class="search"><i class="icon"></i>搜索商品,共10923件好物</div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .headerWrap{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 750/@rem;
    height: 88/@rem;
    padding: 0 30/@rem;
    background-color: #fff;
    z-index: 3;
    &:after {
      content: '';
      position: absolute;
      background-color: #d9d9d9;
      left: 0;
      width: 100%;
      height: 1px;
      -webkit-transform-origin: 50% 100% 0;
      transform-origin: 50% 100% 0;
      bottom: 0;
    }
    .search{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 56/@rem;
      font-size: 28/@rem;
      background-color: #ededed;
      border-radius: 8/@rem;
      color: #666;
      .icon{
        display:inline-block;
        margin-right:10/@rem;
        width:28/@rem;
        height:28/@rem;
        background-image: url("./images/search.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
  }
</style>
