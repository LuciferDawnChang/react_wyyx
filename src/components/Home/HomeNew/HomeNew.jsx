import React, {Component} from 'react';
import {connect} from "react-redux";
import BScroll from "better-scroll";

import "./HomeNew.less"

class HomeNew extends Component {

  componentDidUpdate(){
    let hitsContent = document.querySelector('.hitsContent')
    let scroll = new BScroll(hitsContent,{
      scrollX:true,
      scrollY:false,
    })
    // let hitsContent = document.getElementsByClassName(".hitsContent");
    // let BS = "";
    // if (!BS){
    //   BS = setTimeout(
    //     ()=>{new BScroll(hitsContent, {
    //       eventPassthrough: 'vertical',
    //       scrollX:true,
    //       scrollY:false,
    //       // click: true
    //     })
    //     },1000
    //   )
    // }


  };
  componentWillUnmount(){
  }


  render() {
    const newItemLists = this.props.newItemLists;
    // console.log(newItemLists)
    return (
      <div className="HomeNew">
        <header>
          <a href="JavaScripr:;" className="HomeNewheader">
            <h4>新品首发</h4>
            <span>查看全部 <i></i></span>
          </a>
        </header>
        <div className="hitsContent">
          <ul className="contentList">
            {newItemLists?newItemLists.map((item,index)=>(
              <li className="item" key={index}>
                <a href="javaScript:;">
                  <div className="goods">
                    <img src={item.listPicUrl}/>
                  </div>
                  <div className="info">
                    <div>
                      <p className="status gradientPrice">爱儿日特惠</p>
                    </div>
                    <p className="goodsName">{item.name}</p>
                    <p className="goodsInfo">{item.simpleDesc}</p>
                    <p className="goodsMoney">¥{item.retailPrice}</p>
                  </div>
                </a>
              </li>
            )):""}

          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    newItemLists: state.homes.newItemLists
  }),
  {}
)(HomeNew)
