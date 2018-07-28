<!--
  首页商品列表
-->
<template>
  <div class="homeGoodsWrap">
    <div class="homeGoods" v-for="(cateList,index) in cateLists" :key="index">
      <header class="title">{{cateList.name}}</header>
      <ul class="homeGoodsList">
        <li class="item" v-for="(item,index) in cateList.itemList" :key="index">
          <a href="javascript:;">
            <div class="goodsImage">
              <img :src="item.listPicUrl" alt="" class="goodImg">
              <div class="goodName">{{item.name}}</div>
            </div>
            <p class="homeGoodInfo">{{item.simpleDesc}}</p>
            <span class="homeGoodMoney">¥2312</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import {mapState} from "vuex"
  export default {
    computed:{
      ...mapState(["cateLists"])
    },
    mounted(){
      this.$store.dispatch("getCateLists")
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .homeGoodsWrap{
    .homeGoods{
      margin-bottom: 20/@rem;
      padding: 0 10/@rem;
      background-color: #fff;
      .title{
        text-align: center;
        line-height: 120/@rem;
        font-size: 28/@rem;
        color: #333;
        background-color: #fff;
      }
      .homeGoodsList{
        .clearFix();
        .item{
          box-sizing: border-box;
          float: left;
          /*position: relative;*/
          width: 50%;
          overflow: hidden;
          background-color: #fff;
          padding: 0 10/@rem 33/@rem;
          a{
            display: block;
            .goodsImage{
              font-size: 0/@rem;
              width: 345/@rem;
              img{
                width: 100%;
                height: 345/@rem;
              }
              .goodName{
                box-sizing: border-box;
                width: 100%;
                background: #F1ECE2;
                border-radius: 0 0 4/@rem 4/@rem;
                font-size: 24/@rem;
                color: #9F8A60;
                letter-spacing: 0;
                line-height: 29/@rem;
                padding: 20/@rem 10/@rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }
            .homeGoodInfo{
              margin-top: 10/@rem;
              padding: 0 10/@rem;
              line-height: 48/@rem;
              text-align: left;
              font-size: 28/@rem;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              color: #333;
            }
            .homeGoodMoney{
              line-height: 1;
              font-size: 32/@rem;
              text-align: left;
              color: #b4282d;
              padding: 0 .13333rem;
            }
          }
        }
      }
    }
  }
</style>
