<template>
  <!--ShopCart购物车-->
  <div class="shopCartWrap">
    <header class="shopCartList">购物车</header>
    <div class="titleWrap">
      <ul class="title">
        <li class="item">
          <i class="itemIcon"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="item">
          <i class="item-icon"></i>
          <span>满88元免邮费</span>
        </li>
        <li class="item">
          <i class="item-icon"></i>
          <span>48小时快速退款</span>
        </li>

      </ul>
    </div>
    <div class="listWrap">
      <div class="cartList">
        <div class="cartIcon"></div>
        <div class="loginB">
          <p>购物车空空如也</p>
          <router-link to="/login/logUser" href="javascript:;">登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";
  .shopCartWrap{
    position: relative;
    width: 750/@rem;
    height: 1334/@rem;
    .shopCartList {
      .bottom-border-1px(#808080);
      position: fixed;
      top:0;
      left: 0;
      width: 100%;
      font-size: 36/@rem;
      height: 88/@rem;
      line-height: 88/@rem;
      text-align: center;
      background-color: #fff;
    }
    .titleWrap{
      position: fixed;
      top: 88/@rem;
      left: 0;
      width: 100%;
      height: 70/@rem;
      font-size: 24/@rem;
      .title{
        height: 70/@rem;
        line-height:70/@rem;
        padding: 0 30/@rem;
        width: 100%;
        box-sizing: border-box;
        .item{
          &:first-child{
            float: left;
          }
          &:nth-child(2){
            float: right;
          }
          &:last-child{
            text-align: center;
          }
          i{
            display: inline-block;
            vertical-align: middle;
            margin-right: 6/@rem;
            background-image: url("./images/circle.png");
            width: 10/@rem;
            height: 10/@rem;
            background-size: 100%;
            background-repeat: no-repeat;
          }

        }
      }
    }
    .listWrap{
      width: 10rem;
      height: 4rem;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      text-align: center;
/*      margin-top: 158/@rem;
      margin-bottom: 99/@rem;*/
      .cartList{
        .cartIcon{
          font-size: 0;
          display: inline-block;
          width: 248/@rem;
          height: 248/@rem;
          background-image: url(./images/shopcart.png);
          background-size: 100%;
          background-repeat: no-repeat;
        }
        .loginB{
          font-size: 28/@rem;
          margin-top: -38/@rem;
          p{
            line-height:1;
            text-align: center;
            color: #7f7f7f;
            margin-bottom: 50/@rem;
          }
          a{
            width: 480/@rem;
            height: 92/@rem;
            display: inline-block;
            margin: 0 auto;
            color: #fff;
            background-color: #b4282d;
            line-height: 92/@rem;
            border-radius: 5/@rem;
            font-size: 30/@rem;
          }

        }
      }
    }
  }
</style>
