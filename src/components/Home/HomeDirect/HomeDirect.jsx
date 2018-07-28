import React, {Component} from 'react';
import {connect} from "react-redux";

import "./HomeDirect.less"

class HomeDirect extends Component {
  state={
  };
  // mapList = () =>{
  //   this.state.List = (this.props.tagLists).filter((item,index)=>((index<4)))
  // };
  componentDidUpdate(){
    // this.mapList();
  };
  render() {
    const List = this.props.tagLists;
    let arr = List.slice(0,4);
    return (
      <div className="homeDirect">
        <header><a href="JavaScript:;">品牌制造商直供<i className="rightIcon"></i></a></header>
        <div className="content">
          <ul className="contentList">
            {arr.map((item,index)=>(
              <li key={index} className={index%2 ? 'contentListItem':'contentListItem on'}>
                <a href="JavaScript:;">
                  <div className="homeDirectInfo">
                    <span className="direct">{item.name}</span>
                    <span className="money">{item.floorPrice}元起</span>
                  </div>
                  <img src={item.picUrl} alt="直供"/>
                </a>
              </li>
            ))}

        </ul>
      </div>
  </div>
    );
  }
}

export default connect(
  (state) => ({
    tagLists: state.homes.tagLists
  }),
  {}
)(HomeDirect)
