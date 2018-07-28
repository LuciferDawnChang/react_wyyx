


<template>
  <nav id="footerGuide">
    <router-link to="/home">
      <i class="home"  :class ="{on:(this.$route.path==='/home')}"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/discern">
      <i class="discern" :class ="{on:(this.$route.path==='/discern')}"></i>
      <span>识物</span>
    </router-link>
    <router-link to="/category">
      <i class="category" :class ="{on:(this.$route.path==='/category')}"></i>
      <span>分类</span>
    </router-link>
    <router-link to="/shopcart">
      <i class="shopcart" :class ="{on:(this.$route.path==='/shopcart')}"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/personal">
      <i class="personal" :class ="{on:(this.$route.path==='/personal')}"></i>
      <span>个人</span>
    </router-link>
  </nav>
</template>

<script>
  export default {
    methods:{
    }
  }
</script>

<style lang="less" scoped>
  @import "../src/common/less/mixins";
  #footerGuide {
    position: fixed;
    bottom: 0;
    left:0;
    z-index: 3;
    display: flex;
    justify-content: space-around;
    width: 750/@rem;
    height: 99/@rem;
    border-top: 1/@rem solid #9d9d9d;
    font-size:24/@rem;
    background-color: rgba(255,255,255,1);
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      i {
        display: block;
        margin: 0 auto;
        width: 40/@rem;
        height: 40/@rem;
        background: url("images/footer.png") no-repeat;
        -webkit-background-size: 40/@rem;
        background-size: 40/@rem;
        &.home{
          background-position: 0 -50/@rem;
          &.on{
            background-position: 0 0;
          }
        }
        &.discern{
          background-position: 0 -150/@rem;
          &.on{
            background-position: 0 -100/@rem;
          }
        }
        &.category{
          background-position: 0 -250/@rem;
          &.on{
            background-position: 0 -200/@rem;
          }
        }
        &.shopcart{
          background-position: 0 -350/@rem;
          &.on{
            background-position: 0 -300/@rem;
          }
        }
        &.personal{
          background-position: 0 -450/@rem;
          &.on{
            background-position: 0 -400/@rem;
          }
        }
      span {
      }
      }
    }
  }
</style>
