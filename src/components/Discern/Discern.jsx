/*
* 第二页,识物
*/
import React,{Component} from "react";
import {connect} from "react-redux";

import HeaderTop from "./HeaderTop/HeaderTop";
import DiscernHits from "./DiscernHits/DiscernHits";
import DiscernScroll from "./DiscernScroll/DiscernScroll"
import DiscernRecommend from "./DiscernRecommend/DiscernRecommend"
import DiscernGambit from "./DiscernGambit/DiscernGambit"
import DiscernZhenPin from "./DiscernZhenPin/DiscernZhenPin"
import DiscernLook from "./DiscernLook/DiscernLook"
import DiscernMore from "./DiscernMore/DiscernMore"

import "./Discern.less";

import {
  getBanners,
  getColumns,
  getRecommend,
  getTenfifteens,
  getZhenpin,
  getYxLook,
  getFindMores,
} from "../../redux/actions"

class Discern extends Component{

  componentDidMount(){
    this.props.getBanners();
    this.props.getColumns();
    this.props.getRecommend();
    this.props.getTenfifteens();
    this.props.getZhenpin();
    this.props.getYxLook();
    this.props.getFindMores();

  };

  render(){
    return(
      <div className="discern">
        <HeaderTop/>
        <DiscernHits/>
        <DiscernScroll/>
        <DiscernRecommend/>
        <DiscernGambit/>
        <DiscernZhenPin/>
        <DiscernLook/>
        <DiscernMore/>
      </div>
    )
  }
}

export default connect(
  (state)=>({
    // banners: [],    //识物banner
    // columns: [],   //banner下面的channel
  }),
  {
    getBanners,
    getColumns,
    getRecommend,
    getTenfifteens,
    getZhenpin,
    getYxLook,
    getFindMores,
  }
)(Discern)
