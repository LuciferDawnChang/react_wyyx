<!--品牌直销-->
<template>
  <div class="homeDirect">
    <header><a href="JavaScript:;">品牌制造商直供<i class="rightIcon"></i></a></header>
    <div class="content">
      <ul class="contentList">
        <li class="contentListItem"v-for="(item,index) in tagListsFliter" v-if="item" :key="index" :class="(index%2 ? '':'on')" >
          <a href="JavaScript:;">
            <div class="homeDirectInfo">
              <span class="direct">{{item.name}}</span>
              <span class="money">{{item.floorPrice}}元起</span>
            </div>
            <img :src="item.picUrl" alt="">
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
      ...mapState(["tagLists"]),
      tagListsFliter () {
        let arr = []
        for(let i = 0; i < 4; i++){
          arr.push(this.tagLists[i])
        }
        return arr
      }
    },
    mounted() {
      this.$store.dispatch("getTagLists");
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";
  .homeDirect{
    background-color: rgba(255,255,255,1);
    width: 750/@rem;
    color: #333;
    margin-bottom: 20/@rem;
    header{
      display:flex;
      align-items:center;
      justify-content:center;
      height:110/@rem;
      font-size:32/@rem;
      a{
        .rightIcon{
          margin-left:10/@rem;
          background:url("./images/right.png") no-repeat;
          background-size:100% 100%;
          display:inline-block;
          vertical-align:middle;
          width:30/@rem;
          height:30/@rem;
        }
      }
    }
    .content{
      width: 750/@rem;
      .contentList{
        padding: 0 15/@rem;
        .clearFix();
        .contentListItem{
          position: relative;
          width: 355/@rem;
          height: 236/@rem;
          background-color: #f4f4f4;
          float: left;
          margin-bottom: 8/@rem;
          &.on{
            margin-right:8/@rem;
            }
          img{
            width:100%;
            height: 100%;
          }
          .homeDirectInfo{
            position: absolute;
            left: 20/@rem;
            top: 20/@rem;
            .direct{
              display: block;
              margin-bottom:6/@rem;
            }
          }
        }
      }
    }
  }

</style>
