<template>
  <div class="discernRecommend" v-if="recommend">
    <div class="RecommendWarp">
      <header>为你推荐</header>
      <div class="recGoods" >
        <a href="JavaScript:;" v-if="recommend.recommendBanner">
          <div class="GoodsItem">
            <div class="itemImg">
              <span class="DRBgImg" :style="{backgroundImage:'url('+recommend.recommendBanner.picUrl+')'}"></span>
              <!--<img :src="recommend.recommendBanner.picUrl" alt="">-->
            </div>
            <div class="itemTitle"></div>
          </div>
        </a>
      </div>
    </div>
    <div class="recommendItem" v-if="recommend.recommends"
         v-for="(item,index) in recommend.recommends" :key="index">
      <a :href="item.schemeUrl">

        <div class="recommendItemLeft">
          <div class="recommendItemLeftAvatar">
            <div class="avatar">
              <img :src="item.avatar" alt="">
            </div>
            <div class="nickname">{{item.nickname}}</div>
          </div>
          <h4 class="recommendItemLeftTitle">{{item.title}}</h4>
          <div class="recommendItemLeftInfo">{{item.subtitle}}</div>
        </div>
        <div class="recommendItemRight" v-if="" :style="{backgroundImage:'url('+item.picUrl+')'}"></div>

      </a>

    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  export default {
    computed:{
      ...mapState(['recommend'])
    },
    mounted () {
      this.$store.dispatch('getRecommend')
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .discernRecommend{
    background-color: #fff;
    margin-bottom: 20/@rem;
    padding: 0 30/@rem 40/@rem;
    .RecommendWarp{
      margin-bottom: 30/@rem;
      header{
        font-size: 32/@rem;
        text-align: center;
        height:120/@rem;
        line-height: 120/@rem;
      }
      .recGoods{
        a{
          .GoodsItem{
            .itemImg{
              .DRBgImg{
                display: block;
                width: (688/@rem);
                height: (386/@rem);
                background-color:#f4f4f4;
                background-position:center;
                background-repeat:no-repeat;
                -webkit-background-size: 100%;
                background-size: 100%;
              }
            }
          }
        }
      }
    }
    .recommendItem{
      width: 688/@rem;
      height: 272/@rem;
      color: #333;
      background-color: #fff;
      border: 1/@rem solid #d9d9d9;
      border-radius: 4/@rem;
      margin-bottom: 30/@rem;
      a{
        display: flex;
        width: 688/@rem;
        height: 272/@rem;
        justify-content: space-between;
        .recommendItemLeft{
          display: flex;
          justify-content: center;
          flex-direction: column;
          /*align-items: center;*/
          width: 358/@rem;
          height: 100%;
          padding: 0 20/@rem;
          .recommendItemLeftAvatar{
            display: flex;
            align-items: center;
            font-size: 20/@rem;
            height: 48/@rem;
            /*padding: 0 20/@rem 0 30/@rem;*/
            margin-bottom: 25/@rem;
            .avatar{
              border:1/@rem solid #d9d9d9;
              margin-right:8/@rem;
              border-radius: 50%;
              overflow: hidden;
              width: 48/@rem;
              height: 48/@rem;
              img{
                width: 100%;
                height: 100%;
                vertical-align: middle;
              }
            }
            .nickname{
              color: #7f7f7f;
            }
          }
          .recommendItemLeftTitle{
            font-size: 32/@rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 14/@rem;
            margin-right: 40/@rem;
            line-height: 1.2;
          }
          .recommendItemLeftInfo{
            line-height:1.5;
            overflow:hidden;
            text-overflow:ellipsis;
            color: #7f7f7f;
            font-size: 24/@rem;
          }
        }
        .recommendItemRight{
          width: 280/@rem;
          height: 100%;
          background-repeat:no-repeat;
          -webkit-background-size: 100%;
          background-size: 100%;
        }

      }
    }
  }
</style>
