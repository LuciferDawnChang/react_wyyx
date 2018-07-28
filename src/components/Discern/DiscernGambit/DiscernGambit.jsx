import React, {Component} from 'react';
import {connect} from "react-redux";
import ava from "./images/ava.png"

import Swiper from "swiper";

import "./DiscernGambit.less"

class DiscernGambit extends Component {
  componentDidUpdate(){
    new Swiper('.swiper-container-discernGambit', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  };

  render() {
    const tenfifteens = this.props.tenfifteens;
    return (
      <div className="discernGambit">
        <header className="title">
          <h4>十点一刻</h4>
        </header>
        {/*<!-- Swiper -->*/}
        <div className="swiper-container-discernGambit swiper-container-horizontal">
          <div className="swiper-wrapper">
            {tenfifteens.map((item,index)=>(
              <div className="swiper-slide" key={index}>
                <div className="headItemDG"><span>—</span>今日话题<span>—</span></div>
                <div className="dGItemTitle">{item.title}</div>
                <div className="dGItemDesc">{item.desc}</div>
                <div className="dGItemBottom">
                  {item.participantAvatar?item.participantAvatar.map((avatarItem,avatarIndex)=>(
                    <span className="dGItemBottomLeft" key={avatarIndex}>
                        <img className="avatar-img"  src={avatarItem ? avatarItem :ava}/>
                    </span>
                    )):""}
                  <span className="dGItemBottomRight">{item.participantNum}人参与话题</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    tenfifteens: state.homes.tenfifteens
  }),
  {}
)(DiscernGambit)
