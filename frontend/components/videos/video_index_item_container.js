import { connect } from "react-redux";
import VideoIndexItem from "./video_index_item";
import { fetchVideo, detachVideo } from "../../actions/video_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
  currentUserId: state.session.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  detachVideo: (videoId) => dispatch(detachVideo(videoId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VideoIndexItem)
);
