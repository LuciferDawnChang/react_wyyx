import React, {Component} from 'react';
import {connect} from "react-redux";

import "./HomeGoods.less";

class HomeGoods extends Component {

  render() {
    const cateLists = this.props.cateLists;
    return (
      <div className="homeGoodsWrap">
        {cateLists.map((cateList,index)=>(
          <div className="homeGoods" key={index}>
            <header className="title">{cateList.name}</header>
            <ul className="homeGoodsList">
              {cateList.itemList?cateList.itemList.map((cateItem,index)=>(
                <li className="item" key={index}>
                  <a href="javascript:;">
                    <div className="goodsImage">
                      <img src={cateItem.listPicUrl} alt="" className="goodImg" />
                      <div className="goodName">{cateItem.name}</div>
                    </div>
                    <p className="homeGoodInfo">{cateItem.simpleDesc}</p>
                    <span className="homeGoodMoney">¥2312</span>
                  </a>
                </li>
              )):""}
            </ul>
          </div>
        ))}

      </div>
    );
  }
}

export default connect(
  (state) => ({
    cateLists: state.homes.cateLists
  }),
  {}
)(HomeGoods)
