<template>
    <header class="headerTops">
      <div class="top-bar">
        <router-link to="/home" class="icon-home"></router-link>
        <router-link to="/home" class="icon-logo-wrap">
          <i class="icon-logo"></i>
        </router-link>
        <div class="right">
          <a href="/" class="search">
            <i class="icon-search"></i>
          </a>
          <router-link to="/shopcart" class="cart">
            <i class="icon-cart"></i>
          </router-link>
        </div>
      </div>
    </header>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";

  .headerTops{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:87/@rem;
    background-color:#fafafa;
    z-index:2;
    .top-bar{
      height:100%;
      padding:0 16/@rem 0 24/@rem;
      display:flex;
      align-items:center;
      justify-content:space-between;
      .icon-home{
        display:inline-block;
        vertical-align: middle;
        width: (48/@rem);
        height: (44/@rem);
        background-image: url("./images/xb.png");
        background-repeat: no-repeat;
        background-position: 0 -74/@rem;
        background-size: 172/@rem 398/@rem;
      }
      .icon-logo-wrap{
        display:block;
        .icon-logo{
          display:inline-block;
          height: 54/@rem;
          width: 172/@rem;
          vertical-align: middle;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          margin: auto;
          background-position: 0 -128/@rem;
          background-size: 172/@rem 398/@rem;
          background-repeat: no-repeat;
          background-image: url("./images/xb.png");
        }
      }
      .right{
        margin-right:5/@rem;
        font-size: 0;
        .search{
          .icon-search{
            display: inline-block;
            vertical-align: middle;
            background-position:0 -334/@rem;
            background-size: 172/@rem 398/@rem;
            background-repeat: no-repeat;
            background-image: url("./images/xb.png");
            height:64/@rem;
            width:64/@rem;
          }

        }
        .cart{
          .icon-cart{
            display: inline-block;
            height: 64/@rem;
            width:64/@rem;
            vertical-align: middle;
            background-image: url("./images/xb.png");
            background-repeat: no-repeat;
            background-position:0 0;
            background-size: 172/@rem 398/@rem;
          }
        }
      }
    }


  }


</style>
