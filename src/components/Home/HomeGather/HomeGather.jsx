import React, {Component} from 'react';
import {connect} from "react-redux";
import Swiper from "swiper";

import "./HomeGather.less"

class HomeGather extends Component {
  componentDidUpdate(){
    new Swiper('.swiper-container-hg', {
      slidesPerView: 'auto',
      spaceBetween: 30
    });
  }
  render() {
    const flashSaleIndexVO= this.props.flashSaleIndexVO;
    const topicLists= this.props.topicLists;
    return (
      <div className="homeGather">

        <div className="timeOut">
          <div className="left">
            <p className="leftTop">严选限时购</p>
            <div className="timeOutDawn ">
              <span className="hours times">11</span>
              <span className="colon">:</span>
              <span className="mins times">01</span>
              <span className="colon">:</span>
              <span className="secs times">20</span>
            </div>
          </div>
          <div className="right" v-if="flashSaleIndexVO">
            <img src={flashSaleIndexVO.primaryPicUrl} alt="react要加alt"/>
            <div className="rightHot" >
              <span className="rmb">¥{flashSaleIndexVO.activityPrice}</span>
              <span className="rmb2">¥{flashSaleIndexVO.originPrice}</span>
            </div>
          </div>
        </div>

        <div className="boon" v-if="flashSaleIndexVO.saleIndexVO">
          {flashSaleIndexVO.saleIndexVO?<img src={flashSaleIndexVO.saleIndexVO.picUrl} alt="react要加alt"/>:""}
        </div>

        <div className="sift">
          <header>
            <a className="more" href="javaScript:;">
              <span>专题精选<i className="icon"></i></span>
            </a>
          </header>
          <div className="swiper-container swiper-container-hg">
            <div className="swiper-wrapper">
              {topicLists.map((item,index)=>(
                <div className="swiper-slide swiper-slide-active" style={{marginRight:'30px'}}
                     key={index}>
                  <a className="imgWrap" href={item.linkUrl}>
                    <img src={item.itemPicUrl} alt="react要加alt"/>
                  </a>
                  <div className="line1">
                    <h4 className="title">
                      {item.title}
                    </h4>
                    <span className="price">
                    <span>{item.priceInfo}</span>
                    <span>元起</span>
                  </span>
                  </div>
                  <div className="desc">{item.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    flashSaleIndexVO: state.homes.flashSaleIndexVO,
    topicLists: state.homes.topicLists
  }),
  {}
)(HomeGather)
