import { connect } from "react-redux";
import VideoShow from "./video_show";
import { fetchVideo } from "../../actions/video_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    videoId: ownProps.match.params.videoId,
    video: state.entities.videos[ownProps.match.params.videoId],
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);
