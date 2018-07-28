<!--主页轮播图-->
<template>
  <div class="wrapper">
    <div class="swiper-container">
      <!--轮播图分页-->
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in focusLists" :key="index">
          <a :href="item.targetUrl"><img :src="item.picUrl"></a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" id="my-swiper-pagination"></div>
    </div>
    <div class="footer-container">
      <ul class="footer">
        <li class="item">
          <a href="/">
            <i class="icon"></i>
            <span class="txt">网易自营品牌</span>
          </a>
        </li>
        <li class="item">
          <a href="/">
            <i class="icon"></i>
            <span class="txt">30天无忧退货</span>
          </a>
        </li>
        <li class="item">
          <a href="/">
            <i class="icon"></i>
            <span class="txt">48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import Swiper from "swiper"
  import {mapState} from "vuex"
  import 'swiper/dist/css/swiper.min.css'
  export default {
    computed:{
      ...mapState(["focusLists"])
    },
    mounted(){
      this.$store.dispatch("getFocusList",() =>{
        this.$nextTick(function(){
          new Swiper('.swiper-container', {
            pagination: { // 圆点指示器的容器div
              el: '.swiper-pagination',
            },
            eventPassthrough: 'vertical',//解决轮播去区域不能上下滑屏问题,
            loop: true, // 可以循环轮播
          })
        });
      });
    },
    watch: {
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .wrapper{
    background-color: #fff;
    margin-bottom:20/@rem;
    .swiper-container {
      width: 750/@rem;
      height: 400/@rem;
      img{
        width: 750/@rem;
        height: 400/@rem;
      }
      #my-swiper-pagination{
        .swiper-pagination-bullet{
          display: inline-block;
          width:40/@rem;
          height:4/@rem;
          background: seagreen;
          opacity: .4;
          margin-right:10/@rem;
        }
      }
      .swiper-pagination{
        background-color:red;

      }
    }
    .footer{height:72/@rem;
      padding:0 30/@rem;
      display:flex;
      align-items:center;
      background-color:#fff;
      .item{
        flex:1;
        font-size:0;
        .icon{
          background-image:url("./images/icon/arrow.png");
          background-size:100% 100%;
          display:inline-block;
          width:32/@rem;
          height: 32/@rem;
          vertical-align:middle;
        }
        .txt{
          font-size:24/@rem;
          color:#333;
          margin-left:8/@rem;
          line-height:32/@rem;
          display:inline-block;
          vertical-align:middle;
        }
      }
    }

  }
</style>
