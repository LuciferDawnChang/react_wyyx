import React, {Component} from 'react';
import {connect} from "react-redux";

import "./DiscernZhenPin.less"

class DiscernZhenPin extends Component {

  render() {
    const zhenpin = this.props.zhenpin;
    return (
      <div className="DiscernZhenPinWrap">
        {zhenpin.zhenOne?
          <div className="DiscernZhenPin">
            <header className="zhenPHeader">严选甄品</header>
            <a v-if="zhenpin.zhenOne" className="zhenPContent" href={zhenpin.zhenOne.schemeUrl}>
              <div className="imgTop" style={{backgroundImage:`url(${zhenpin.zhenOne.picUrl})` }}></div>
              <div className="zhenPContentText">
                <span className="contentTexttitle">{zhenpin.zhenOne.title}</span>
              </div>
            </a>
          </div>:""}
        {zhenpin.zhenpins?(zhenpin.zhenpins.map((contentItem,index)=>(
            <div className="line" key={index}>
              <div className="lineLeft">{contentItem.title}</div>
              <div className="lineRight" style={{backgroundImage: `url(${contentItem.picUrl})`}}></div>
            </div>
          ))):""}

      </div>
    );
  }
}

export default connect(
  (state) => ({
    zhenpin: state.homes.zhenpin
  }),
  {}
)(DiscernZhenPin)
