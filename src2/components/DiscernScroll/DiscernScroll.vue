<template>
  <div class="discernScroll">
    <div class="listsWarp">
      <div class="discernLists">
        <div class="scrollList" v-if="columns" v-for="(item,index) in columns" :key="index">
          <a href="javaScript:;">
            <div class="scrollListItem">
              <div class="imgItem">
                <img :src="item.picUrl" alt="">
              </div>
              <p class="recommend">{{item.title}}</p>
              <span class="colSum">{{item.articleCount}}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";
  import {mapState} from "vuex";
  export default {
    computed:{
      ...mapState(["columns"])
    },
    mounted(){
      this.$store.dispatch("getColumns");
      this.$nextTick(() => {
        new BScroll(".listsWarp",{
          eventPassthrough: 'vertical',
          scrollX:true,
          click: true
        })
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .discernScroll{
    background-color: #fff;
    padding: 32/@rem 30/@rem 28/@rem;
    margin-bottom:20/@rem;
    font-size: 0;
    width: 750/@rem;
    box-sizing: border-box;
    /*height: 210/@rem;*/
    /*overflow: hidden;*/
    .listsWarp{
      display: flex;
      overflow: hidden;
      .discernLists{
      white-space: nowrap;
        height: 226/@rem;
      .scrollList{
        display: inline-block;
        width:164/@rem;
        height: 210/@rem;
        margin-right:24/@rem;
        a{
          .scrollListItem{
            position: relative;
            width: 100%;
            height: 100%;
            .imgItem{
              width: 164/@rem;
              height: 164/@rem;
              margin-bottom:22/@rem;
              img{
                width: 100%;
                height: 100%;
              }

            }
            .recommend{
              width: 164/@rem;
              font-size: 24/@rem;
              line-height: 1;
              text-align: center;
              color: #333;
            }
            .colSum{
              display: block;
              position: absolute;
              top: 0;
              right: 0;
              color: #fff;
              text-align: right;
              line-height: 32/@rem;
              width: 150/@rem;
              height: 32/@rem;
              font-size: 24/@rem;
              background: url("./images/shadow.png") no-repeat;
              background-size: 100%;
            }
          }
        }
      }
    }
    }
  }
</style>
