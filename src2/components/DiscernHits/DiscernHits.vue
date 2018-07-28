<!--
  识物轮播
-->

<template>
  <div class="swipperWarpper">
    <div class="swiper-container-end swiper-container-horizontal">
      <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(75px, 0px, 0px);">
        <div v-if="banners" v-for="(item,index) in banners" :key="index"
             class="swiper-slide swiper-slide-active" style="margin-right: 30px;">
          <img :src="item.picUrl" alt="">
        </div>
      </div>
      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  import {mapState} from  "vuex";
  export default {
    computed:{
      ...mapState(["banners"])
    },
    mounted(){
      this.$store.dispatch("getBanners",()=>{
        this.$nextTick(() => {
          new Swiper('.swiper-container-end', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 10,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          })
        });
      });

    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .swipperWarpper{
    background-color: #fff;
    padding: 24/@rem;
    .swiper-container-end {
      width: 100%;
      height: 100%;
      .swiper-wrapper{
        .swiper-slide {
          /* Center slide text vertically */
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          width: 670/@rem;
          height: 385/@rem;
          img{
            width: 100%;
            height: 100%;
          }

        }
      }

    }
  }
</style>
