import React, {Component} from 'react';
import {connect} from "react-redux";
import BScroll from "better-scroll";

import "./HomeHits.less"

class HomeHits extends Component {

  componentDidUpdate(){
    // new BScroll('.newContentHist', {
      // eventPassthrough: 'vertical',
      // scrollX:true,
      // click: true,
    // })
    let newContentHist = document.querySelector('.newContentHist');
    let scroll = new BScroll(newContentHist,{
      scrollX:true,
      scrollY:false,
      click: true,
    })
  };
  
  render() {
    const popularItemLists = this.props.popularItemLists;
    return (
      <div className="HomeHits">
        <header>
          <a href="JavaScripr:;" className="HomeHitsheader">
            <h4>人气推荐·好物精选</h4>
            <span>查看全部 <i></i></span>
          </a>
        </header>
        <div className="newContent newContentHist">
          <ul className="contentList">
            {popularItemLists.map((item,index)=>(
              <li className="item" key={index}>
                <a href="javaScript:;">
                  <div className="goods">
                    <img src={item.listPicUrl}/>
                  </div>
                  <div className="info">
                    <p className="goodsName">{item.name}</p>
                    <p className="goodsInfo">{item.simpleDesc}</p>
                    <p className="goodsMoney">¥{item.retailPrice}</p>
                  </div>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
    )
  }
}

export default connect(
  (state) => ({
    popularItemLists: state.homes.popularItemLists
  }),
  {}
)(HomeHits)
