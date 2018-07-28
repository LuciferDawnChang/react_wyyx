import React,{Component} from "react";
import {Link,withRouter} from "react-router-dom"

import "./HeaderTop.less";

class HeaderTop extends Component{
  gotos =(url)=>{
    if (url===this.props.location.pathname || !url)return;
    this.props.history.push(url);
  };
  render(){
    return(
      <header className="headerTops">
        <div className="top-bar">
          <span onClick={()=>this.gotos("/home")} className="icon-home"></span>
          <span onClick={()=>this.gotos("/home")} className="icon-logo-wrap">
            <i className="icon-logo"></i>
          </span>
          <div className="right">
            <span onClick={()=>this.gotos("")} className="search">
              <i className="icon-search"></i>
            </span>
            <span  onClick={()=>this.gotos("/shopcart")} className="cart">
              <i className="icon-cart"></i>
            </span>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(HeaderTop);
