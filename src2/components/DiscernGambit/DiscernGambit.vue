<template>
  <div class="discernGambit">
    <header class="title">
      <h4>十点一刻</h4>
    </header>
    <!-- Swiper -->
    <div class="swiper-container-discernGambit swiper-container-horizontal">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-if="tenfifteens"
             v-for="(item,index) in tenfifteens" :key="index">
          <div class="headItemDG"><span>—</span>今日话题<span>—</span></div>
          <div class="dGItemTitle">{{item.title}}</div>
          <div class="dGItemDesc">{{item.desc}}</div>
          <div class="dGItemBottom">
            <span class="dGItemBottomLeft" v-for="(avatar,index) in item.participantAvatar" :key="index">
              <img class="avatar-img"  :src="avatar ? avatar :'./static/images/ava.png'">
            </span>
            <span class="dGItemBottomRight">{{item.participantNum}}人参与话题</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  import {mapState} from "vuex";
  export default {
    data(){
      return{
      }
    },
    computed:{
      ...mapState(["tenfifteens"]),
//      imgsrc(){
//        let imgSrc = [];
//        console.log(this.tenfifteens)
//        this.tenfifteens.forEach((item, index) => {
//
//          item.participantAvatar.forEach((avatarItem, index) => {
//            imgSrc.push(avatarItem?avatarItem:'/static/images/ava.png')
//          })
//        })
//
//        return imgSrc;
//      }

    },
    mounted(){
      this.$store.dispatch("getTenfifteens",()=>{
        this.$nextTick(function() {
          new Swiper('.swiper-container-discernGambit', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
        })
      });
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .discernGambit{
    box-sizing: border-box;
    width: 100%;
    height:571/@rem;
    padding: 0 30/@rem 40/@rem;
    margin-bottom: 20/@rem;
    background-color: #fff;
    overflow: hidden;
    .title{
      width: 100%;
      height: 120/@rem;
      line-height: 120/@rem;
      font-size: 32/@rem;
      text-align: center;
    }
    .swiper-container-discernGambit {
      /*display: flex;*/
      width: 100%;
      height: 100%;
      .swiper-wrapper{
        display: flex;
        .swiper-slide {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 18px;
          width: 500/@rem;
          height:294/@rem;
          padding: 38/@rem 40/@rem 79/@rem;
          background: url("./images/bg.png") no-repeat;
          -webkit-background-size: 100%;
          background-size: 100%;

          /* Center slide text vertically */
          /*display: -webkit-box;*/
          /*display: -ms-flexbox;*/
          /*display: -webkit-flex;*/
          /*-webkit-box-pack: center;*/
          /*-ms-flex-pack: center;*/
          /*-webkit-justify-content: center;*/
          /*justify-content: center;*/
          /*-webkit-box-align: center;*/
          /*-ms-flex-align: center;*/
          /*-webkit-align-items: center;*/
          /*align-items: center;*/
          .headItemDG{
            align-items: center;
            padding: 0 8/@rem;
            color: #7f7f7f;
            line-height: 30/@rem;
            font-size: 0.20/@rem;
            margin-bottom: 40/@rem;
            span{
              padding: 0 8/@rem;
              color: #7f7f7f;
              line-height: 30/@rem;
              font-size: 0.20/@rem;
              margin-bottom: 40/@rem;
            }
          }
          .dGItemTitle{
            font-weight: 700;
            margin-bottom: 14/@rem;
            font-size: 36/@rem;
          }
          .dGItemDesc{
            line-height: 1.5;
            font-size: 28/@rem;
          }
          .dGItemBottom{
            .dGItemBottomLeft{
              border:1px solid #fff;
              float: left;
              border-radius: 50%;
              overflow: hidden;
              height: 48/@rem;
              width: 48/@rem;
              .avatar-img{
                width: 100%;
                height: 100%;
              }
            }
            .dGItemBottomRight{
              line-height: 48/@rem;
              font-size: 24/@rem;
              color: #7f7f7f;
            }
          }
        }
      }
    }
  }
</style>
