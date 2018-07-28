import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'

import store from "./redux/store"
import './mock/mockServer';

import App from './components/App/App';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      {/*<Switch>/!*只显示当前匹配的某个路由组件*!/*/}
        {/*<Route path='/' component={App}/>*/}
      {/*</Switch>*/}
      <App/>
    </HashRouter>
  </Provider>), document.getElementById('root'));
