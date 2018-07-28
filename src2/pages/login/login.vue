<template>
  <div class="login">
    <HeaderTop/>
    <div class="logImg">
      <img src="./images/logo.png" alt="">
    </div>
    <div class="loginButton">
      <router-link to="/login/loguser" class="loginPhone"><i class="phone"></i>手机号码登录</router-link>
      <router-link to="/login/loguser" class="loginEmail"><i class="email"></i>邮箱账号登录</router-link>
    </div>
    <div class="links">
      <div class="wechatLink"><img src="./images/wechat.png" alt="">微信</div>
      <div class="qqLink"><img src="./images/qq.png" alt="">qq</div>
      <div class="weiboLink"><img src="./images/weibo.png" alt="">微博</div>
    </div>
  </div>
</template>

<script>
  import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
  export default {
    components:{
      HeaderTop
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .login{
    .logImg{
      padding: 247/@rem 0 160/@rem 0;
      text-align: center;
      vertical-align: middle;
      img{
        width: 268/@rem;
        height: 90/@rem;
        vertical-align: middle;
      }
    }
    .loginButton{
      a{
        display: block;
        margin: auto;
        font-size: 28/@rem;
        width: 670/@rem;
        height: 94/@rem;
        line-height: 94/@rem;
        text-align: center;
        margin-bottom: 32/@rem;
        border: 1.5/@rem solid #b4282d;
        border-radius: 2/@rem;
        &.loginPhone{
          color: #fff;
          background-color: #b4282d;
          .phone{
            display: inline-block;
            width: 40/@rem;
            height: 40/@rem;
            margin-right: 10/@rem;
            vertical-align: middle;
            background-image: url("./images/xb1.png");
            background-repeat: no-repeat;
            background-size:40/@rem 290/@rem;
            background-position:0 -50/@rem;
          }
        }
        &.loginEmail{
          color: #b4282d;
          .email{
            display: inline-block;
            width: 40/@rem;
            height: 40/@rem;
            margin-right: 10/@rem;
            vertical-align: middle;
            background-image: url("./images/xb1.png");
            background-repeat: no-repeat;
            background-size:40/@rem 290/@rem;
            background-position:0 0;
          }
        }
      }
    }
    .links{
      position: absolute;
      left: 0;
      height: 80/@rem;
      bottom: 80/@rem;
      width: 100%;
      text-align: center;
      div{
        padding: 0 40/@rem;
        border-right: 1/@rem solid #333;
        color: #333333;
        font-size: 12/@rem;
        display: inline-block;
        &:nth-child(3){
          border: none;
        }
        img{
          margin-right: 5/@rem;
          width: 40/@rem;
          height: 40/@rem;
          vertical-align: middle;
        }
      }
    }
  }
</style>
