import React, {Component} from 'react';
import {connect} from "react-redux";

class Xxx extends Component {

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default connect(
  (state) => ({
    xxx: state.xxx
  }),
  {}
)(Xxx)
