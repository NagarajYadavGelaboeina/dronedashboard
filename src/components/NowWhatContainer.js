import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import NowWhat from "./NowWhat";

class NowWhatContainer extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const {
        tempLoading,
        tempData
      } = this.props;
      if (tempLoading) return <LinearProgress />;
      return (
          <NowWhat tempData={tempData} />
      )
  }
}

const mapState = (state, ownProps) => {
  const {
    tempLoading,
    tempData
  } = state.tempData;
  return {
    tempLoading,
    tempData
  };
};

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_TEMP_DATA
    })
});

export default connect(
  mapState,
  mapDispatch
)(NowWhatContainer);
