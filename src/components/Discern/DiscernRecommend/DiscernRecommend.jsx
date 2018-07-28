import React, {Component} from 'react';
import {connect} from "react-redux";

import "./DiscernRecommend.less"

class DiscernRecommend extends Component {

  render() {
    const recommend = this.props.recommend;
    return (
      <div className="discernRecommend">
        <div className="RecommendWarp">
          <header>为你推荐</header>
          <div className="recGoods" >
            <a href="#">
              <div className="GoodsItem">
                <div className="itemImg">
                  {recommend.recommendBanner?<span className="DRBgImg" style={{backgroundImage:`url(${recommend.recommendBanner.picUrl})`}}></span>:""}
                </div>
                <div className="itemTitle"></div>
              </div>
            </a>
          </div>
        </div>
        {recommend.recommends?recommend.recommends.map((item,index)=>(
          <div className="recommendItem" key={index}>
            <a href={item.schemeUrl}>
              <div className="recommendItemLeft">
                <div className="recommendItemLeftAvatar">
                  <div className="avatar">
                    <img src={item.avatar} alt="评论"/>
                  </div>
                  <div className="nickname">{item.nickname}</div>
                </div>
                <h4 className="recommendItemLeftTitle">{item.title}</h4>
                <div className="recommendItemLeftInfo">{item.subtitle}</div>
              </div>
              <div className="recommendItemRight" style={{backgroundImage:`url(${item.picUrl})`}}></div>
            </a>
          </div>
        )):""}

      </div>
    );
  }
}

export default connect(
  (state) => ({
    recommend: state.homes.recommend
  }),
  {}
)(DiscernRecommend)
