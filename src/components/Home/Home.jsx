/*
* Home首页
*/
import React,{Component} from "react";
import {connect} from 'react-redux';

import HomeHeader from "./HomeHeader/HomeHeader"
import HomeSlide from "./HomeSlide/HomeSlide"
import HomeDirect from "./HomeDirect/HomeDirect"
import HomeNew from "./HomeNew/HomeNew"
import HomeHits from "./HomeHits/HomeHits"
import HomeGather from "./HomeGather/HomeGather"
import HomeGoods from "./HomeGoods/HomeGoods"

import "./Home.less"

import {
  getHeadCatelist,
  getFocusList,
  getTagLists,
  getItemLists,
  getPopularItemList,
  getFlashSaleIndexVO,
  getTopicLists,
  getCateLists,
} from "../../redux/actions"

class Home extends Component{
  componentDidMount(){
    this.props.getHeadCatelist();
    this.props.getFocusList();
    this.props.getTagLists();
    this.props.getItemLists();
    this.props.getPopularItemList();
    this.props.getFlashSaleIndexVO();
    this.props.getTopicLists();
    this.props.getCateLists();

  };
  render(){
    return(
      <div id="home">
        <HomeHeader/>
        <HomeSlide/>
        <HomeDirect/>
        <HomeNew/>
        <HomeHits/>
        <HomeGather/>
        <HomeGoods/>
      </div>
    )
  }
}

export default connect(
  (state)=>({
    home:state.homes
  }),
  {
    getHeadCatelist,
    getFocusList,
    getTagLists,
    getItemLists,
    getPopularItemList,
    getFlashSaleIndexVO,
    getTopicLists,
    getCateLists,
  }
)(Home)
