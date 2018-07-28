<template>
  <div class="DiscernZhenPinWrap">
    <div class="DiscernZhenPin">
      <header class="zhenPHeader">严选甄品</header>
      <a v-if="zhenpin.zhenOne" class="zhenPContent" :href="zhenpin.zhenOne.schemeUrl">
        <div class="imgTop" :style="{backgroundImage:'url('+ zhenpin.zhenOne.picUrl +')' }"></div>
        <div class="zhenPContentText">
          <span class="contentTexttitle">{{zhenpin.zhenOne.title}}</span>
        </div>
      </a>
    </div>
    <div class="line" v-if="zhenpin.zhenpins" v-for="(contentItem,index) in zhenpin.zhenpins" :key="index">
      <div class="lineLeft">{{contentItem.title}}</div>
      <div class="lineRight" :style="{backgroundImage: 'url('+ contentItem.picUrl +')'}"></div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  export default {
    computed:{
      ...mapState(["zhenpin"])
    },
    mounted(){
      this.$store.dispatch("getZhenpin");
    },
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .DiscernZhenPinWrap{
    padding: 0 30/@rem /@rem;
    margin-bottom: 20/@rem;
    background-color: #fff;
    .DiscernZhenPin{
      margin-bottom:30/@rem;
      .zhenPHeader{
        background-color: #fff;
        text-align: center;
        font-size: 32/@rem;
        height: 120/@rem;
        line-height: 120/@rem;
      }
      .zhenPContent{
        width: 690/@rem;
        height: 541/@rem;
        display: block;
        color: #333;
        border: 1px solid #d9d9d9;
        border-radius: .10667rem;
        overflow: hidden;
        .imgTop{
          height: 386/@rem;
          background-repeat:no-repeat;
          -webkit-background-size: 100% 100%;
          background-size: 100% 100%;
        }
        .zhenPContentText{
          padding: 24/@rem 20/@rem 67/@rem;
          font-size: 24/@rem;
          .contentTexttitle{
            font-size: 36/@rem;
            color: #333;;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
      }
    }
    .line{
      display: flex;
      color: #333;
      height: 272/@rem;
      border: 1px solid #d9d9d9;
      border-radius: 4/@rem;
      margin-bottom: 30/@rem;
      .lineLeft{
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 32/@rem;
        margin-right:30/@rem;
        width: 356/@rem;
        padding: 0 30/@rem 0 20/@rem;
      }
      .lineRight{
        width: 280/@rem;
        height: 272/@rem;
        background-color:red;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
      }
    }
  }
</style>
