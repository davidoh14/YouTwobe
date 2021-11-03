import { connect } from "react-redux";
import ShowRecsItem from "./show_recs_item";
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
  connect(mapStateToProps, mapDispatchToProps)(ShowRecsItem)
);
