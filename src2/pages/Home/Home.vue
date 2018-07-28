<template>
  <div id="home">
    <!--头部-->
    <HomeHeader/>
    <!--轮播HomeHeader-->
    <div v-if="active===-1">
      <HomeSlide/>
      <!--品牌直供-->
      <HomeDirect/>
      <!--新品首发-->
      <HomeNew/>
      <!--人气推荐-->
      <HomeHits/>
      <!--严选限时购,福利社,专题精选的集合-->
      <HomeGather/>

      <!--商品列表-->
      <HomeGoods/>

      <!--首页底部页脚-->
      <HomeFooter/>
    </div>

  </div>
</template>

<script>
  import BScroll from "better-scroll";
  import HomeHeader from "../../components/HomeHeader/HomeHeader.vue";
  import HomeSlide from "../../components/HomeSlide/HomeSlide.vue";
  import HomeDirect from "../../components/HomeDirect/HomeDirect.vue";
  import HomeNew from "../../components/HomeNew/HomeNew.vue";
  import HomeHits from "../../components/HomeHits/HomeHits.vue";
  import HomeGather from "../../components/HomeGather/HomeGathera.vue";
  import HomeGoods from "../../components/HomeGoods/HomeGoods.vue";
  import HomeFooter from "../../components/HomeFooter/HomeFooter.vue";
  export default {
    data(){
      return{
        active:-1
      }
    },
    components:{
      HomeHeader,
      HomeSlide,
      HomeDirect,
      HomeNew,
      HomeHits,
      HomeGather,
      HomeGoods,
      HomeFooter
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";
  #home{
    font-size: 28/@rem;
    color: #666;
    padding-bottom:99/@rem;;
    header{
      .bottom-border-1px(#d9d9d9);
      position: fixed;
      left: 0;
      top:0;
      z-index: 3;
      width: 750/@rem;
      height: 148/@rem;
      box-sizing: border-box;
      .homeHeaderTop{
        display: flex;
        justify-content:center;
        align-items:Center;
        padding: 16/@rem 30/@rem;
        .logo{
          display: block;
          width:138/@rem;
          height:40/@rem;
          margin-right: 20/@rem;
          background: url(./images/logo.png) no-repeat;
          background-size: cover;
        }
        .search{
          display: flex;
          justify-content:center;
          align-items:Center;
          width: 532/@rem;
          height: 56/@rem;
          background-color: #ededed;
          border-radius: 10/@rem;
          font-size: 28/@rem;
          i{
            display: inline-block;
            vertical-align: middle;
            margin-right:10/@rem;
            width: 28/@rem;
            height:28/@rem;
            background: url("./images/search.png") no-repeat;
            -webkit-background-size: 100%;
            background-size: 100%;
          }
          span{
            font-size: 27/@rem;
          }
        }
      }
      .homeHeaderNav{
        display: flex;
        align-items:Center;
        height: 60/@rem;
        color: #333;
        width:1560/@rem;
        flex-wrap: nowrap;
        padding: 0 17/@rem;
        ul{
          display: flex;
          align-items:Center;
          padding: 0 15/@rem;
          height:60/@rem;
          li{
            line-height: 60/@rem;
            font-size: 27/@rem;
            text-align: center;
            padding: 0 17/@rem;
            margin-left: 48/@rem;
            height: 60/@rem;
            &:nth-child(1){
              margin-left:0;
            }
            &.on{
              color: #b4282d;
              border-bottom:2/@rem solid #b4282d;;
            }
          }
        }
      }
    }
  }
</style>
