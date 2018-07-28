<template>
  <div id="msite">
    <!--msite路由主组件-->

    <!--<Home/>-->
    <!--<Discern/>-->
    <!--<Category/>-->
    <!--<ShopCart/>-->
    <!--<Personal/>-->


    <FooterGuide/>
  </div>
</template>

<script>
//  import Home from "../Home/Home.vue";
//  import Discern from "../Discern/Discern.vue";
//  import Category from "../Category/Category.vue";
//  import ShopCart from "../ShopCart/ShopCart.vue";
//  import Personal from "../Personal/Personal.vue";
// Home,
//Discern,
//  Category,
//  ShopCart,
//  Personal
//  import FooterGuide from "../../common/FooterGuide/FooterGuide.vue";
  export default {
    components:{
//      FooterGuide
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";
  #msite{
    display: flex;
    flex-direction: column;
  }
</style>
