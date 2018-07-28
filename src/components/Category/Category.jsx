/*
* 第三页,分类类别
*/
import React,{Component} from "react";
import {connect} from 'react-redux';
import BScroll from "better-scroll";

import CategoryHeader from "./CategoryHeader/CategoryHeader";
import CategoryRight from "./CategoryRight/CategoryRight";

import "./Category.less"

import {getCategorys} from "../../redux/actions";

class Category extends Component{
  constructor(props) {
    super(props);
    // 初始化state
    this.state = { // 必须是对象
      indexImg:0,
      b:""
    }
  }

  componentDidUpdate() {
    // console.log(this.props.newItemLists);
    // if (!this.scroll) {
      // console.log('a')
    setTimeout(()=>(new BScroll('.categoryContentLeft', {
      scrollY: true,
      click: true
    })),200);
    setTimeout(()=>(
      this.state.b = new BScroll('.categoryContentRight', {
      scrollY: true,
      click: true
    })),200);
    // console.log(this.state.b)
    // if(this.state.b){
    //   setTimeout(this.state.b.disable(),5000)
    // }


    // } else {
    //   this.scroll.refresh()
    // }
  }

  componentDidMount(){
    this.props.getCategorys();
  }
  render(){
    const categorys =this.props.categorys;
    return(
      <div className="categoryHeaderWarp">
        <header className="categoryHeader">
          <CategoryHeader/>
        </header>
        <div className="categoryContent">
          <div className="categoryContentLeft">
            <ul className="leftItemsList" v-if="categorys">
              {categorys.map((item,index)=>(
                <li onClick={()=>(this.handleClick(index))} key={index}
                    className={(this.state.indexImg=== index?"on":"")+" leftItemsListItem"}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="categoryContentRight">
            <CategoryRight indexImg={this.state.indexImg}/>
          </div>
        </div>
      </div>
    )
  }

  handleClick=(index)=>{
    let indexImg=index;
    this.setState({indexImg})
  };
}

export default connect(
  (state)=>({
    categorys:state.homes.categorys
  }),
  {
    getCategorys,
  }
)(Category)
