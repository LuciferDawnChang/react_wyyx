import React, {Component} from 'react';
import {connect} from "react-redux";

import "./DiscernLook.less"

class DiscernLook extends Component {

  render() {
    const yxLook= this.props.yxLook;
    console.log(yxLook);
    return (
      <div className="discernLookWrap">
        <div className="discernLookContent">
          <div className="lookContentImg"><img src={yxLook.picUrl}/></div>
          <div className="lookContentText">
            <div className="ContentTextAva">
              <div className="ava"><img src={yxLook.avatar} alt=""/></div>
              <span>{yxLook.nickname}</span>
            </div>
            <div className="ContentTextCon">{yxLook.content}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    yxLook: state.homes.yxLook
  }),
  {}
)(DiscernLook)
