import React, {Component} from 'react';
import {connect} from "react-redux";

import "./DiscernMore.less";

class DiscernMore extends Component {

  render() {
    const findMores = this.props.findMores;
    return (
      <div className="discernMoreWrap">
        <div className="discernMoreHeader">
          <h4 className="headerCon">更多精彩</h4>
        </div>
        <div className="discernMoreCon">

          {findMores.map((moresItem,index)=>(
            <div className="MoreConContent" key={index}>
              <img className="contentImg" src={moresItem.itemPicUrl} alt=""/>
              <div className="contentText">{moresItem.subTitle}</div>
            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    findMores: state.homes.findMores
  }),
  {}
)(DiscernMore)
