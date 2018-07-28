<!--主页组件头部-->

<template>
  <div id="homeHeader">
    <header>
      <div class="homeHeaderTop">
        <i class="logo"></i>
        <div class="search">
          <i></i>
          <span>搜索商品,共10739件好物</span>
        </div>
      </div>
      <div class="wrapper">
        <nav class="homeHeaderNav">
          <ul >
            <li class="on"><span>推荐</span></li>
            <li v-for="(item,index) in headCates" :key="index" ><span>{{item.name}}</span></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
  import BScroll from "better-scroll";
  import {mapState} from "vuex";
  export default {
//    vue组件的方法集合
    methods:{

    },
    computed:{
      ...mapState(["headCates"])
    },
    //完成渲染的步骤
    mounted(){
      this.$store.dispatch('getHeadCatelist',()=>{
          new BScroll('.homeHeaderNav', {
            eventPassthrough: 'vertical',
            scrollX:true,
            click: true
          })
      });
    },
    methods:{
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";
  #homeHeader{
    /*overflow: hidden;*/
    font-size: 28/@rem;
    color: #666;
    height:148/@rem;
    header{
      .bottom-border-1px(#d9d9d9);
      position: fixed;
      left: 0;
      top:0;
      z-index: 3;
      background-color: rgba(255,255,255,1);
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
        flex-wrap: nowrap;
        align-items:Center;
        height: 60/@rem;
        color: #333;
        padding: 0 17/@rem;
        ul{
          display: flex;
          flex-wrap: nowrap;
          align-items:Center;
          padding: 0 15/@rem;
          height:60/@rem;
          li{
            white-space: nowrap;
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
