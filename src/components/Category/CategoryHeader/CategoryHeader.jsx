import React, {Component} from 'react';
import {connect} from "react-redux";

import "./CategoryHeader.less"

class CategoryHeader extends Component {

  render() {
    return (
      <div className="headerWrap">
        <div className="search"><i className="icon"></i>搜索商品,共10923件好物</div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
  }),
  {}
)(CategoryHeader)
