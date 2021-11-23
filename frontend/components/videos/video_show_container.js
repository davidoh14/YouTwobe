import { connect } from "react-redux";
import VideoShow from "./video_show";
import { fetchVideo } from "../../actions/video_actions";
import { fetchLikes } from "../../actions/like_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    videoId: ownProps.match.params.videoId,
    video: state.entities.videos[ownProps.match.params.videoId],
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLikes: () => dispatch(fetchLikes()),
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);
