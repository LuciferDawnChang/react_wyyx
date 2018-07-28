import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
// import {} from "react-router";
import './FooterGuide.less';


class FooterGuide extends Component {
  gotos =(url)=>{
    if (url===this.props.location.pathname || !url)return;
    this.props.history.push(url);
  };
  render() {
    return (
        <footer id={"footerGuide"}>
          <a onClick={()=>(this.gotos('/home'))}
            className = {this.props.location.pathname==='/home' ? 'on' : ''}>
            <i className="home"></i>
            <span>首页</span>
          </a>
          <a onClick={()=>(this.gotos('/discern'))}
            className = {this.props.location.pathname==='/discern' ? 'on' : ''}>
            <i className="discern"></i>
            <span>识物</span>
          </a>
          <a onClick={()=>(this.gotos('/category'))}
            className = {this.props.location.pathname==='/category' ? 'on' : ''}>
            <i className="category"></i>
            <span>分类</span>
          </a>
          <a onClick={()=>(this.gotos('/shopcart'))}
            className = {this.props.location.pathname==='/shopcart' ? 'on' : ''}>
            <i className="shopcart"></i>
            <span>购物车</span>
          </a>
          <a onClick={()=>(this.gotos('/personal'))}
            className = {this.props.location.pathname==='/personal' ? 'on' : ''}>
            <i className="personal"></i>
            <span>个人</span>
          </a>
        </footer>

    );
  }
}


export default withRouter(FooterGuide)