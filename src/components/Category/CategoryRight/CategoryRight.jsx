import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import BScroll from "better-scroll";

import "./CategoryRight.less"

class CategoryRight extends Component {
  static propTypes = {
    indexImg: PropTypes.number.isRequired
  }
  static defaultProps = {
    indexImg:0
  };

  componentDidUpdate() {
    // console.log(this.props.newItemLists);
    // if (!this.scroll) {
    // console.log('a')
    // this.scroll = new BScroll('.rightItemsListItemWrap', {
    //
    //   scrollY: true,
    //   click: true
    // })
    // } else {
    //   this.scroll.refresh()
    // }
  }

  render() {
    const categorys=this.props.categorys;
    const indexImg=this.props.indexImg;
    // console.log(categorys[indexImg]);
    return (
        <div className="rightItemsListItemWrap">
          <div>
            <div className="top20"></div>
            <div className="rightItemsList">
              <div className="rightItemsListTopImg">
                {categorys[indexImg]?<img src={categorys[indexImg].bannerUrl} alt="top"/>:""}
              </div>
              {categorys[indexImg]?categorys[indexImg].subCateList.map((itemImg,index)=>(
                <div className="rightItemsListItem" key={index}>
                  <img src={itemImg.wapBannerUrl} alt="item"/>
                  <p>{itemImg.name}</p>
                </div>
              )):""}

            </div>
          </div>

        </div>
    );
  }
}

export default connect(
  (state) => ({
    categorys: state.homes.categorys
  }),
  {}
)(CategoryRight)
