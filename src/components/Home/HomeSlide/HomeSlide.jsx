import React, {Component} from 'react';
import {connect} from "react-redux";
import Swiper from "swiper";
import 'swiper/dist/css/swiper.min.css'

import "./HomeSlide.less"

class HomeSlide extends Component {
  componentDidUpdate(){
    new Swiper('.swiper-container-hmSl', {
      pagination: { // 圆点指示器的容器div
        el: '.swiper-pagination',
      },
      eventPassthrough: 'vertical',//解决轮播去区域不能上下滑屏问题,
      loop: true, // 可以循环轮播
    })
  }
  render() {
    const focusLists = this.props.focusLists;
    return (
      <div className="wrapper">
        <div className="swiper-container swiper-container-hmSl">
          {/*<!--轮播图分页-->*/}
          <div className="swiper-wrapper">
            {focusLists.map((imgItem,index)=>(
              <div className="swiper-slide" key={index}>
                <a href={imgItem.targetUrl}><img src={imgItem.picUrl} alt="轮播"/></a>
              </div>
            ))}
            {/*<div className="swiper-slide" v-for="(item,index) in focusLists" key="index">*/}
              {/*<a href="item.targetUrl"><img src="item.picUrl"/></a>*/}
            {/*</div>*/}
          </div>
          {/*<!-- 如果需要分页器 -->*/}
          <div className="swiper-pagination" id="my-swiper-pagination"></div>
        </div>
        <div className="footer-container">
          <ul className="footer">
            <li className="item">
              <a href="/">
                <i className="icon"></i>
                <span className="txt">网易自营品牌</span>
              </a>
            </li>
            <li className="item">
              <a href="/">
                <i className="icon"></i>
                <span className="txt">30天无忧退货</span>
              </a>
            </li>
            <li className="item">
              <a href="/">
                <i className="icon"></i>
                <span className="txt">48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
}

export default connect(
  (state)=>({
    focusLists:state.homes.focusLists
  }),
  {
  }
)(HomeSlide)
