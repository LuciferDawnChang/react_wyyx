import React, { Component } from 'react';
import {connect} from "react-redux";
import BScroll from "better-scroll";

import "./HomeHeader.less";

class HomeHeader extends Component {
  componentDidMount(){
    // if (this.props.headCates.length === 0){
    // console.log(this.props.headCates)
      new BScroll('.homeHeaderNav', {
        eventPassthrough: 'vertical',
        scrollX:true,
        click: true
      })
    // }
  };
  render() {
    const headCates = this.props.headCates;
    // console.log(this.props.headCates)
    return (
      <div id="homeHeader">
        <header>
          <div className="homeHeaderTop">
            <i className="logo"></i>
            <div className="search">
              <i></i>
              <span>搜索商品,共10739件好物</span>
            </div>
          </div>
          <div className="wrapper">
            <nav className="homeHeaderNav">
              <ul >
                <li className="on"><span>推荐</span></li>
                {headCates.map((item,index) => (
                  <li key={index} ><span>{item.name}</span></li>
                ))}
                {/*<li v-for="(item,index) in headCates" :key="index" ><span>{{item.name}}</span></li>*/}
            </ul>
          </nav>
      </div>
  </header>
  </div>
    );
  }
}


// export default withRouter(HomeHeader);

export default connect(
  (state)=>({
    headCates:state.homes.headCates
  }),
  {
  }
)(HomeHeader)
