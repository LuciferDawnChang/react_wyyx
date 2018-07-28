<template>
  <div class="discernLookWrap">
    <div class="discernLookContent">
      <div class="lookContentImg"><img :src="yxLook.picUrl"></div>
      <div class="lookContentText">
        <div class="ContentTextAva">
          <div class="ava"><img :src="yxLook.avatar" alt=""></div>
          <span>{{yxLook.nickname}}</span>
        </div>
        <div class="ContentTextCon">{{yxLook.content}}</div>

      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  export default {
    computed:{
      ...mapState(["yxLook"])
    },
    mounted(){
      this.$store.dispatch("getYxLook");
    },
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .discernLookWrap{
    background-color: #fff;
    width: 750/@rem;
    height: 1230/@rem;
    font-size: 28/@rem;
    line-height: 1.6;
    overflow: hidden;
    color: #7f7f7f;
    .discernLookContent{
      .lookContentImg{
        width: 100%;
        height: 1000/@rem;
        img {
          width:100%;
          height: 100%;
        }
      }
      .lookContentText{
        overflow: hidden;
        position: relative;
        padding: 24/@rem 30/@rem 46/@rem;
        background-color: #fff;
        .ContentTextAva{
          height: 48/@rem;
          line-height: 48/@rem;
          margin-bottom: 24/@rem;
          .ava{
            width: 48/@rem;
            height: 48/@rem;
            border-radius: 50%;
            overflow: hidden;
            display: inline-block;
            vertical-align: middle;
            img{
              width: 100%;
              height: 100%;
            }
          }
          span{
            display: inline-block;
            height: 48/@rem;
            line-height: 48/@rem;
          }
        }
        .ContentTextCon{
          width: 100%;
          height: 166/@rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:3; //指定显示多少行
        }
      }
    }
  }
</style>
