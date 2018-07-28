<!--新品首发-->

<template>
  <div class="HomeHits">
    <header>
      <a href="JavaScripr:;" class="HomeHitsheader">
        <h4>人气推荐·好物精选</h4>
        <span>查看全部 <i></i></span>
      </a>
    </header>
    <div class="newContent">
      <ul class="contentList">
        <li class="item" v-if="popularItemLists" v-for="(item,index) in popularItemLists" :key="index">
          <a href="javaScript:;">
            <div class="goods">
              <img :src="item.listPicUrl"/>
            </div>
            <div class="info">
              <p class="goodsName">{{item.name}}</p>
              <p class="goodsInfo">{{item.simpleDesc}}</p>
              <p class="goodsMoney">¥{{item.retailPrice}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";
  import {mapState} from "vuex"
  export default {
//    计算属性
    computed:{
      ...mapState(["popularItemLists"])
    },
//    vue组件的方法集合
    mounted(){
      this.$store.dispatch("getPopularItemList",()=>{
        this.$nextTick(() => {
          new BScroll(".newContent",{
            eventPassthrough: 'vertical',
            scrollX:true,
            click: true
          })
        }
      );
      })
    }
    /*methods:{
      _initScroll () {
        new BScroll('.content',{
          scrollX:true,
          click: true
        })
      }
    }*/
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .HomeHits{
    background-color: #fff;
    width: 750/@rem;
    margin-bottom:20/@rem;
    header{
      display: flex;
      align-items: center;
      justify-content: center;
      background-image:url("./images/newProduct/bg.png");
      background-size:10rem 260/@rem;
      width: 750/@rem;
      height: 260/@rem;
      margin-bottom:32/@rem;
      .HomeHitsheader{
        display: block;
        color: #8BA0B6;
        text-align: center;
        h4{
          font-size: 36/@rem;
          color: #8BA0B6;
        }
        span{
          margin: 0 auto;
          display: block;
          width: 240/@rem;
          height: 56/@rem;
          line-height: 56/@rem;
          background:#F4E9CB;
          margin-top: 16/@rem;
          i{
            background:url("./images/newProduct/right.png") no-repeat;
            margin-top:16/@rem;
            background-size:10/@rem 22/@rem;
            display:inline-block;
            height:22/@rem;
            width:10/@rem;
            margin-left:6/@rem;
          }

        }
      }
    }
    .newContent{
      display: flex;
      flex-wrap: nowrap;
      width: 750/@rem;
      height: 480/@rem;
      overflow: hidden;
      .contentList{
        display: flex;
        flex-wrap: nowrap;
        /*width: 1600/@rem;*/
        /*background-color: #f2f;*/
        .item{
/*          white-space: nowrap;*/
          /*float: left;*/
          /*background-color: #a3f;*/
          width:280/@rem;
          height:414/@rem;
          margin-left:31/@rem;
          a{
            .goods{
              width: 280/@rem;
              height: 280/@rem;
              background-color: #F4F4F4;
              img{
                width: 100%;
              }
            }
            .info{
              p{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: left;
                &.goodsName{
                  font-size:28/@rem;
                  line-height: 34/@rem;
                  color: #333;
                  padding: 10/@rem;
                }
                &.goodsInfo{
                  font-size:24/@rem;
                  line-height: 30/@rem;
                  color: #7f7f7f;
                  padding:0 10/@rem 14/@rem;
                }
                &.goodsMoney{
                  padding: 0 10/@rem;
                  color: #b4282d;
                  line-height: 1;
                  font-style: 28/@rem;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
