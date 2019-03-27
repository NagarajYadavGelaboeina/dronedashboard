import React, { Component } from "react";
import { connect } from "react-redux";
import * as Constants from './constants';
import * as actions from "../store/actions";
import NowWhat from "./NowWhat";

class NowWhatContainer extends Component {
  componentDidMount() {
    const that = this;
    setInterval(function(){
      that.props.onLoad()
    },Constants.FETCH_INTERVAL*1000);
  }

  render() {
    const { tempData } = this.props;
      return (
          <NowWhat tempData={tempData} />
      )
  }
}

const mapState = (state) => {
  const { tempData } = state.temperature;
  return { tempData };
};

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.TEMP_DATA_FETCH
    })
});

export default connect(
  mapState,
  mapDispatch
)(NowWhatContainer);
