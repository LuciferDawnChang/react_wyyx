<!--
严选限时购
福利社
专题精选
的集合
-->

<template>
  <div class="homeGather">

    <div class="timeOut">
      <div class="left">
        <p class="leftTop">严选限时购</p>
        <div class="timeOutDawn ">
          <span class="hours times">11</span>
          <span class="colon">:</span>
          <span class="mins times">01</span>
          <span class="colon">:</span>
          <span class="secs times">20</span>
        </div>
      </div>
      <div class="right" v-if="flashSaleIndexVO">
        <img :src="flashSaleIndexVO.primaryPicUrl">
        <div class="rightHot" >
          <span class="rmb">¥{{flashSaleIndexVO.activityPrice}}</span>
          <span class="rmb2">¥{{flashSaleIndexVO.originPrice}}</span>
        </div>
      </div>
    </div>

    <div class="boon" v-if="flashSaleIndexVO.saleIndexVO">
      <img :src="flashSaleIndexVO.saleIndexVO.picUrl">
    </div>

    <div class="sift">
      <header>
        <a class="more" href="javaScript:;">
          <span>专题精选<i class="icon"></i></span>
        </a>
      </header>
      <div class="swiper-container-hg">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide-active" style="margin-right: 30px;"
          v-if="topicLists" v-for="(item,index) in topicLists" :key="index">
            <a class="imgWrap" :href="item.linkUrl">
              <img :src="item.itemPicUrl">
            </a>
            <div class="line1">
              <h4 class="title">
                {{item.title}}
              </h4>
              <span class="price">
                  <span>{{item.priceInfo}}</span>
                  <span>元起</span>
              </span>
            </div>
            <div class="desc">{{item.subtitle}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import {mapState} from "vuex"
//  import 'swiper/dist/css/swiper.min.css'
  export default {
//    计算属性
    computed:{
      ...mapState(["flashSaleIndexVO","topicLists"])
    },
//    生命周期,渲染页面
    mounted(){
      this.$store.dispatch("getFlashSaleIndexVO");
      this.$store.dispatch("getTopicLists",()=>{
        this.$nextTick(() => {
          new Swiper('.swiper-container-hg', {
            slidesPerView: 'auto',
            spaceBetween: 30
          });
        })
      });
    }
    /*methods: {
      categorys(){
        this.$nextTick(function(){
          new Swiper('.swiper-container-hg', {
            slidesPerView: 'auto',
            spaceBetween: 30
          });
        });
      }
    }*/
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";

  .homeGather{
    .timeOut{
      background-color: rgba(255,255,255,1);
      margin-bottom:20/@rem;
      width:654/@rem;
      height:320/@rem;
      padding: 30/@rem 40/@rem 30/@rem 56/@rem;
      /*background-color: red;*/
      .left{
        float: left;
        padding-top:80/@rem;
        .leftTop{
          display: block;
          font-size: 36/@rem;
          line-height: 36/@rem;
          margin-bottom: 24/@rem;
          color: #333;
          letter-spacing: 12/@rem;
        }
        .timeOutDawn{
          font-size: 0;
          span{
            font-size: 32/@rem;
            &.times{
              display: inline-block;
              width: 62/@rem;
              height:56/@rem;
              line-height:56/@rem;
              text-align: center;
              color: #fff;
              background-color: #444;
            }
            &.colon{
              color: #333;
              font-size: .4rem;
              width: .26667rem;
              display: inline-block;
              text-align: center;
              font-weight: 700;
            }

          }
        }
        }
      .right{
        float: right;
        position: relative;
        img{
          width: 320/@rem;
        }
        .rightHot{
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          width: 100/@rem;
          height: 100/@rem;
          background-color: rgba(244,143,24,.95);
          position: absolute;
          right: 20/@rem;
          bottom: 30/@rem;
          line-height: 28/@rem;
          border-radius:50%;
          font-size:28/@rem;
          color: #fff;
        }
      }
      }
    .boon{
      background-color: rgba(255,255,255,1);
      margin-bottom:20/@rem;
      img{
        width:100%;
      }

    }
    .sift {
      margin-bottom: 20/@rem;
      background-color: #fff;
      header {
        height: 110/@rem;
        text-align: center;
        .more {
          line-height: 110/@rem;
          margin: auto;
          span{
            font-size: 32/@rem;
            line-height:21/@rem;
            i{
              display: inline-block;
              background: url("../HomeDirect/images/right.png") no-repeat;
              -webkit-background-size: 30/@rem;
              background-size: 29/@rem;
              width: 30/@rem;
              height: 29/@rem;
              margin-left:10/@rem;
            }
          }

        }

      }
      .swiper-container-hg {
        width: 100%;
        overflow: hidden;
        .swiper-wrapper{
          padding: 0 30/@rem 36/@rem;
          .swiper-slide {
            vertical-align: middle;
            width: 575/@rem;
            .imgWrap {
              width: 100%;
              height: 332/@rem;
              display: block;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .line1{
              .title{
                float: left;
                white-space: nowrap;
                overflow: hidden;
                -ms-text-overflow: ellipsis;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                width: 410/@rem;
                font-size: 28/@rem;
                color: #333;
              }
              .price{
                float: right;
                font-size: 28/@rem;
                color: #b4282d;
              }
            }
            .desc{
              white-space: nowrap;
              overflow: hidden;
              -ms-text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              width: 575/@rem;
              font-size: 24/@rem;
              color: #7F7F7F;
            }
          }
        }

      }
    }
  }
</style>
