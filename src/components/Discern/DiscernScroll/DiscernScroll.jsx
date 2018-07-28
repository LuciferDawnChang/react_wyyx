import React, {Component} from 'react';
import {connect} from "react-redux";
import BScroll from "better-scroll";

import "./DiscernScroll.less";

class DiscernScroll extends Component {

  componentDidUpdate(){
    new BScroll(".listsWarp",{
      eventPassthrough: 'vertical',
      scrollX:true,
      click: true
    })
  }

  render() {
    const columns = this.props.columns;
    return (
      <div className="discernScroll">
        <div className="listsWarp">
          <div className="discernLists">
            {columns.map((item,index)=>(
              <div className="scrollList" key={index}>
                <a href="#">
                  <div className="scrollListItem">
                    <div className="imgItem">
                      <img src={item.picUrl} alt="滑屏"/>
                    </div>
                    <p className="recommend">{item.title}</p>
                    <span className="colSum">{item.articleCount}</span>
                  </div>
                </a>
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
    columns: state.homes.columns
  }),
  {}
)(DiscernScroll)
