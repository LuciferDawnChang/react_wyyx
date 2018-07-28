<!--首页底部-->
<template>
  <div class="homeFooter">
    <div class="homeFooterTop">
      <a class="appDawn">下载APP</a>
      <a class="pcLink">电脑版</a>
    </div>
    <div class="homeFooterBottom">
      <p class="copyright">
        <span>网易公司版权所有 © 1997-</span><span>2018</span><br>
        <span>食品经营许可证：JY13301080111719</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .homeFooter{
    background-color: #414141;
    width: 750/@rem;
    height: 244/@rem;
    border-top: 1px solid rgba(0,0,0,0.15);
    padding: 54/@rem 20/@rem 28/@rem;
    box-sizing: border-box;
    .homeFooterTop{
      color: #fff;
      text-align: center;
      a{
        font-size: 24/@rem;
        color: #fff;
        display: inline-block;
        width: 170/@rem;
        height: 60/@rem;
        line-height: 60/@rem;
        text-align: center;
        border: 1/@rem solid rgb(153, 153, 153);
        &.appDawn{
          margin-right:50/@rem;
        }
        &.pcLink{

        }
      }
    }
    .homeFooterBottom{
      text-align: center;
      margin-top: 36/@rem;
      font-size: 24/@rem;
      line-height: 32/@rem;
      color: #999;

    }
  }
</style>
