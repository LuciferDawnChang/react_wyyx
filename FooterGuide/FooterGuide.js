import React,{Component} from "react";

import "../src/common/less/mixins.less";
import "./FooterGuide.less"


export default class FooterGuide extends Component{
  render(){
    return(
      <div>
        <nav id="footerGuide">
          <link to="/home">
            <i class="home"  className ="{on:(this.$route.path==='/home')}"></i>
            <span>首页</span>
          </link>
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
      </div>
    )
  }
}