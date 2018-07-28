<!--Category类别分类-->
<template>
  <div class="categoryHeaderWarp">
    <header class="categoryHeader">
      <CategoryHeader/>
    </header>
    <div class="categoryContent">
      <div class="categoryContentLeft">
        <ul class="leftItemsList" v-if="categorys">
          <li class="leftItemsListItem" v-for="(item,index) in categorys"
              v-on:click="func(index)" :class="{on:(indexImg=== index)}">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="categoryContentRight">
        <div class="rightItemsListItemWrap">
          <div class="top20"></div>
          <div class="rightItemsList" v-if="categorys[indexImg]">
            <div class="rightItemsListTopImg">
              <img :src="categorys[indexImg].bannerUrl" alt="">
            </div>

            <div class="rightItemsListItem" v-for="(itemImg,index) in categorys[indexImg].subCateList">
              <img :src="itemImg.wapBannerUrl">
              <p>{{itemImg.name}}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from "vuex";
  import BScroll from 'better-scroll';

  import CategoryHeader from "../../components/CategoryHeader/CategoryHeader.vue";
  export default {
    data(){
      return{
        indexImg:0
      }
    },
    computed:{
      ...mapState(["categorys"])
    },
    mounted(){



//      this.$store.dispatch('getCategorys', () => {
//        this.$nextTick(() => {
//          setTimeout(() => {
//            new BScroll('.categoryContentLeft', {
//              resizePolling:true,
//              scrollY:true,
//              click: true,
//              bounce: {
//                top: false,
//                bottom: false,
//                left: false,
//                right: false
//              }
//            });
//            new BScroll('.categoryContentRight', {
//              resizePolling:true,
//              scrollY:true,
//              click: true,
//              bounce: {
//                top: false,
//                bottom: false,
//                left: false,
//                right: false
//              }
//            });
//          }, 1500)
//        })
//      });
      window.onload= () => {
        this.$nextTick(() => {
          setTimeout(() => {
            new BScroll('.categoryContentLeft', {
              resizePolling:true,
              scrollY:true,
              click: true,
              bounce: {
                top: false,
                bottom: false,
                left: false,
                right: false
              }
            });
            new BScroll('.categoryContentRight', {
              resizePolling:true,
              scrollY:true,
              click: true,
              bounce: {
                top: false,
                bottom: false,
                left: false,
                right: false
              }
            });
          }, 1500)
        })
      };
      this.$store.dispatch('getCategorys', window.onload= () => {
        this.$nextTick(() => {
          setTimeout(() => {
            new BScroll('.categoryContentLeft', {
              resizePolling:true,
              scrollY:true,
              click: true,
              bounce: {
                top: false,
                bottom: false,
                left: false,
                right: false
              }
            });
            new BScroll('.categoryContentRight', {
              resizePolling:true,
              scrollY:true,
              click: true,
              bounce: {
                top: false,
                bottom: false,
                left: false,
                right: false
              }
            });
          }, 1500)
        })
      })
    },
    methods: {
      func (index) {
        this.indexImg = index;
      }
    },
    components:{
      CategoryHeader
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";
  .categoryHeaderWarp{
    .categoryHeader{
      height: 88/@rem;
      margin-bottom: 2/@rem;
    }
    .categoryContent{
      display: flex;
      .categoryContentLeft{
        background-color: #fff;
        width: 162/@rem;
        height: 1146/@rem;
        font-size: 28/@rem;
        &:after {
          content: '';
          position: absolute;
          background-color: rgba(0, 0, 0, .15);
          top: 0;
          bottom: 0;
          width: 1px;
          -webkit-transform-origin: 100% 50% 0;
          transform-origin: 100% 50% 0;
          right: 0;
        }
        .leftItemsList{
          line-height: 50/@rem;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #333;
          .leftItemsListItem{
            position: relative;
            display:block;
            margin-top: 40/@rem;
            height: 50/@rem;
            text-align: center;
            &.on{
              content: '';
              font-size: 36/@rem;
              color: #ab2b2b;

            }
            &.on:before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              width: 6/@rem;
              height: 50/@rem;
              background-color: #ab2b2b;
             }
          }
        }
      }
      .categoryContentRight{
        background-color: #fff;
        height: 1144/@rem;
        width: 528/@rem;
        padding: 0 30/@rem;
        .rightItemsListItemWrap{
          .top20{
            height: 30/@rem;
          }
          .rightItemsList{
            .clearFix();
            overflow: hidden;
            .rightItemsListTopImg{
              img{
                width: 100%;
              }
            }
            .rightItemsListItem{
              width: 33%;
              float: left;
              line-height: 1;
              /*height: ;*/
              img{
                width: 100%;
                height: 100%;
                line-height: 1;
              }
              p{
                text-align: center;
                font-size: 24/@rem;
                color: #7f7f7f;
                line-height: 1;
              }
            }
          }
        }

      }
    }
  }
</style>
