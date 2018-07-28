<template>
  <div class="logUser">
    <HeaderTop/>
    <div class="logImg">
      <img src="../images/logo.png" alt="">
    </div>

    <div class="user-box">
      <input type="text" maxlength="11" placeholder="请输入手机号" v-model="phone"
             pattern="^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$"/>
      <div class="code-wrap">
        <input type="text" maxlength="6" placeholder="请输入短信验证码" v-model="code"
               pattern="[0-9]{4}"/>
        <div class="test-code">
          <button class="code-btn" :disabled="!rightPhone"
                  @click.prevent="getCode" :class="{'right-phone': rightPhone}">
            {{computeTime>0 ? `已发送${computeTime}s` : '获取验证码'}}
          </button>
        </div>
      </div>
    </div>

    <div class="loginButton">
      <div class="loginIn"><i class="login"></i>登录</div>
      <router-link to="/login" class="loginRests"><i class="rests"></i>其他登录方式</router-link>
    </div>
  </div>
</template>

<script>
  import HeaderTop from "../../../components/HeaderTop/HeaderTop.vue";
  export default {
    components:{
      HeaderTop
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../common/less/mixins";
  .logUser{
    width: 100%;
    height: 1334/@rem;
    background-color: #fff;
    .logImg{
      padding: 143/@rem 0 0/@rem 0;
      text-align: center;
      vertical-align: middle;
      img{
        width: 192/@rem;
        height: 64/@rem;
        vertical-align: middle;
      }
    }
    .user-box{
      margin-top:100/@rem;
      font-size:30/@rem;
      padding:0 40/@rem;
      input{
        border-bottom: 1px solid #d4d4d4;
        padding-bottom: 30/@rem;
        padding-left: 16/@rem;
        width: 100%;
        margin: 20/@rem 0;
        outline: 0;
      }
      .code-wrap{
        position:relative;
        .test-code{
          position: absolute;
          top: 12/@rem;
          right: 0;
          padding: 10/@rem;
          border-radius: 10/@rem;
          border: 1px solid #333;
          .code-btn{
            border: 0;
            color: #ccc;
            background: transparent;
            font-size: 30/@rem;
            &.right-phone {
              color: black;
            }
          }


        }

      }


    }

    .loginButton{
      div,a{
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
        &.loginIn{
          color: #fff;
          background-color: #b4282d;
        }
        &.loginRests{
          color: #b4282d;
        }
      }
    }
  }
</style>
