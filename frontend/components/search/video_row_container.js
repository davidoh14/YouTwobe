import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import VideoRow from "./video_row";

export default withRouter(connect()(VideoRow))