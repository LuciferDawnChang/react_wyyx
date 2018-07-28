import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'

import './css/reset.css'

import Home from "../Home/Home"
import Discern from "../Discern/Discern";
import Category from "../Category/Category";
import ShopCart from "../ShopCart/ShopCart";
import Personal from "../Personal/Personal";
import FooterGuide from "../FooterGuide/FooterGuide";
// import InterLayer from "../FooterGuide/FooterGuide";

export default class App extends Component {
  render() {
    return (
        <div>
          <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/discern' component={Discern}/>
              <Route path='/category' component={Category}/>
              <Route path='/shopcart' component={ShopCart}/>
              <Route path='/personal' component={Personal}/>
              <Redirect to="/home"/>
          </Switch>
          <FooterGuide/>
        </div>

    );
  }
}
