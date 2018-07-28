import React, {Component} from 'react';
import {connect} from "react-redux";
import Swiper from "swiper"

import "./DiscernHits.less"

class DiscernHits extends Component {

  componentDidUpdate() {
    new Swiper('.swiper-container-end', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }

  render() {
    const banners = this.props.banners;
    return (
      <div className="swipperWarpper">
        <div className="swiper-container-end swiper-container-horizontal">
          <div className="swiper-wrapper" style={{transitionDuration: '0ms', transform: 'translate3d(75px, 0px, 0px)'}}>
            {banners.map((item,index)=>(
              <div key={index}
                   className="swiper-slide swiper-slide-active" style={{marginRight:'30px'}}>
                <img src={item.picUrl} alt="轮播"/>
              </div>
            ))}

        </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
  </div>
    );
  }
}

export default connect(
  (state) => ({
    banners:state.homes.banners
  }),
  {}
)(DiscernHits)
