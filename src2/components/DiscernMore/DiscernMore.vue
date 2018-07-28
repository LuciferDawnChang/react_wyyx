<template>
  <div class="discernMoreWrap">
    <div class="discernMoreHeader">
      <h4 class="headerCon">更多精彩</h4>
    </div>
    <div class="discernMoreCon">
      <div class="MoreConContent" v-for="(moresItem,index) in findMores" :key="">
        <img class="contentImg" :src="moresItem.itemPicUrl" alt="">
        <div class="contentText">{{moresItem.subTitle}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    computed:{
      ...mapState(["findMores"])
    },
    mounted(){
      this.$store.dispatch("getFindMores");
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .discernMoreWrap{
    margin: 0 30/@rem 30/@rem;
    color: #333;
    font-size: 0.373333333333333rem;
    .discernMoreHeader{
      display: flex;
      align-items: center;
      height:140/@rem;
      text-align: center;
      &:after, &:before{
        content: '';
        display: inline-block;
        width: 264/@rem;
        height: 1px;
        /*background-color: #d999;*/
        background-color: rgba(221,153,153,0.6);
      }
      .headerCon{
        margin: 0 24/@rem;
        line-height: 140/@rem;
      }
    }
    .discernMoreCon{
      .MoreConContent{
        height: 450/@rem;
        padding: 24/@rem;
        background-color: #fff;
        padding-bottom: 30/@rem;
        margin-bottom: 30/@rem;
        .contentImg{
          width: 100%;
          height: 360/@rem;
        }
        .contentText{
          padding:29/@rem 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
</style>
